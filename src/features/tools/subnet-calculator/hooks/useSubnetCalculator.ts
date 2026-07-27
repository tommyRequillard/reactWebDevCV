import { useCallback, useState } from 'react'

export interface SubnetResult {
  networkAddress: string
  broadcastAddress: string
  firstHost: string
  lastHost: string
  hostCount: number
  subnetMask: string
}

const CIDR_REGEX =
  /^((?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\/(\d{1,2})$/

function ipToInt(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0
}

function intToIp(int: number): string {
  return [24, 16, 8, 0].map((shift) => (int >>> shift) & 0xff).join('.')
}

export function calculateSubnet(input: string): SubnetResult | null {
  const match = CIDR_REGEX.exec(input.trim())
  if (!match) return null

  const cidr = Number(match[2])
  if (cidr < 0 || cidr > 32) return null

  const ip = match[0].split('/')[0]
  const ipInt = ipToInt(ip)
  const maskInt = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0
  const networkInt = ipInt & maskInt
  const broadcastInt = networkInt | (~maskInt >>> 0)
  const hostCount = cidr >= 31 ? 0 : 2 ** (32 - cidr) - 2

  return {
    networkAddress: intToIp(networkInt),
    broadcastAddress: intToIp(broadcastInt),
    firstHost: hostCount > 0 ? intToIp(networkInt + 1) : intToIp(networkInt),
    lastHost: hostCount > 0 ? intToIp(broadcastInt - 1) : intToIp(broadcastInt),
    hostCount,
    subnetMask: intToIp(maskInt),
  }
}

export function useSubnetCalculator() {
  const [result, setResult] = useState<SubnetResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calculate = useCallback((input: string) => {
    const computed = calculateSubnet(input)
    if (!computed) {
      setError('invalidCidr')
      setResult(null)
      return
    }
    setError(null)
    setResult(computed)
  }, [])

  return { result, error, calculate }
}
