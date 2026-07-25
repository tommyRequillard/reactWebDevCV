import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGamificationStore } from '@stores/gamificationStore'

interface TerminalLine {
  type: 'input' | 'output'
  text: string
}

const WELCOME_MSG = `Bienvenue dans le terminal de Tommy Requillard.
Tapez "help" pour voir les commandes disponibles.`

const COMMANDS: Record<string, string> = {
  help: `Commandes disponibles :
  whoami     → À propos de Tommy
  skills     → Compétences principales
  contact    → Informations de contact
  projects   → Projets notables
  toolbox    → Boîte à outils PowerShell (admin Windows)
  clear      → Effacer l'écran
  exit       → Fermer le terminal`,

  whoami: `Tommy Requillard
──────────────────────────────
Développeur Web Full-Stack & Cybersécurité
Passionné par le DevSecOps, l'architecture logicielle
et la création d'expériences web premium.`,

  skills: `Frontend  → React, TypeScript, Tailwind, Framer Motion
Backend   → Node.js, Express, NestJS, Python
DevOps    → Docker, GitLab CI/CD, GitHub Actions
Cyber     → OWASP, Pentest, Analyse de vulnérabilités
Cloud     → AWS, GCP, Azure fundamentals`,

  contact: `📧 Email   → contact@tommy-requillard.dev
🔗 LinkedIn → linkedin.com/in/tommy-requillard
🐙 GitHub  → github.com/tommyRequillard`,

  projects: `▸ CV Portfolio (ce site !)  → React + Vite + TS
▸ RecruitLAFF               → App cartographie SI
▸ Pipelines DevSecOps        → CI/CD sécurisées`,

  toolbox: `🛠️ Boîte à outils PowerShell (Terminal admin, à exécuter en tant qu'administrateur)
Sélectionnez une ligne pour la copier-coller dans PowerShell.
──────────────────────────────────────────────────────────

🛠️ Maintenance & Nettoyage

# Nettoyage disque avancé (débloque toutes les options cachées)
cleanmgr /sageset:65535; cleanmgr /sagerun:65535

# Nettoyage des composants (WinSxS) — allège le dossier Windows
dism /online /Cleanup-Image /StartComponentCleanup

# Optimisation SSD (force le TRIM sur le disque système C:)
Optimize-Volume -DriveLetter C -ReTrim -Verbose

# Vider les journaux d'événements (nettoyage complet, irréversible)
Wevtutil el | Foreach-Object {wevtutil cl "$_"}

# Vider la corbeille
Clear-RecycleBin -Force

🚑 Réparation & Diagnostic

# Créer un point de restauration système immédiat
Checkpoint-Computer -Description "Toolbox Manual Point" -RestorePointType "MODIFY_SETTINGS"

# Réparation système (scan + restauration des fichiers corrompus, long)
sfc /scannow; DISM /Online /Cleanup-Image /RestoreHealth

# Reset Windows Update (vide le cache, corrige les erreurs de MAJ)
Stop-Service wuauserv,cryptSvc,bits,msiserver; Remove-Item "$env:windir\\SoftwareDistribution" -Recurse -Force; Start-Service wuauserv,cryptSvc,bits,msiserver

# Reset réseau complet (DNS, Winsock, pile TCP/IP — redémarrage conseillé après)
ipconfig /flushdns; ipconfig /release; ipconfig /renew; netsh winsock reset; netsh int ip reset

# Liste des derniers correctifs (hotfix) installés
Get-HotFix | Sort-Object InstalledOn -Descending

💻 Infos & Réseau

# Scan des appareils sur le réseau local (IP + MAC + hostname)
Write-Host "Analyse en cours..."; arp -a | Select-String '\\d{1,3}(\\.\\d{1,3}){3}' | ForEach-Object { $parts = $_.Line.Trim() -split '\\s+'; if ($parts[0] -as [ipaddress]) { $ip = $parts[0]; $mac = $parts[1]; try { $hostn = [System.Net.Dns]::GetHostEntry($ip).HostName } catch { $hostn = '' }; [PSCustomObject]@{ IP=$ip; MAC=$mac; Hostname=$hostn } } } | Format-Table -AutoSize

# Infos PC (clé de produit OEM + numéro de série)
Write-Host "Clé Windows : $((Get-WmiObject -query 'select * from SoftwareLicensingService').OA3xOriginalProductKey)"; Write-Host "Numéro de Série : $((Get-WmiObject win32_bios).SerialNumber)"

# Statut d'activation Windows
Get-CimInstance -ClassName SoftwareLicensingProduct -Filter "PartialProductKey IS NOT NULL" | Select-Object Name, LicenseStatus

# Rapport de santé de la batterie (PC portable)
powercfg /batteryreport /output "C:\\battery_report.html"; Start-Process "C:\\battery_report.html"

# Mots de passe WiFi enregistrés (exécution locale requise)
netsh wlan show profiles | Select-String "All User Profile|Tous les utilisateurs" | %{$name=$_.ToString().Split(":")[1].Trim(); $out=netsh wlan show profile name="$name" key=clear; $pass=($out | Select-String "Key Content|Contenu"); if($pass){[PSCustomObject]@{Profile=$name;Password=$pass.ToString().Split(":")[1].Trim()}}} | Format-Table -AutoSize

# Top 10 des processus les plus gourmands en CPU
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10

📦 Outils & Installation

# Installer la suite Sysinternals (ProcExp, Autoruns...) dans C:\\Sysinternals
New-Item -ItemType Directory -Force -Path C:\\Sysinternals; Invoke-WebRequest -Uri https://download.sysinternals.com/files/SysinternalsSuite.zip -OutFile C:\\Sysinternals\\sys.zip; Expand-Archive -Path C:\\Sysinternals\\sys.zip -DestinationPath C:\\Sysinternals -Force; Remove-Item C:\\Sysinternals\\sys.zip

# Sauvegarder tous les pilotes tiers vers C:\\DriversBackup
Export-WindowsDriver -Online -Destination "C:\\DriversBackup"

# Santé des disques physiques (S.M.A.R.T.)
Get-PhysicalDisk | Select-Object FriendlyName, MediaType, HealthStatus, OperationalStatus

──────────────────────────────────────────────────────────
⚠️  Certaines commandes sont destructives ou nécessitent des droits administrateur
    (logs, reset réseau/WU, WiFi). Toujours créer un point de restauration avant.`,
}

export function TerminalEmulator() {
  const isOpen = useGamificationStore((s) => s.isTerminalOpen)
  const openTerminal = useGamificationStore((s) => s.openTerminal)
  const closeTerminalAction = useGamificationStore((s) => s.closeTerminal)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const closeTerminal = () => {
    closeTerminalAction()
    setLines([])
    setCurrentInput('')
  }

  useEffect(() => {
    if (isOpen) {
      setLines([{ type: 'output', text: WELCOME_MSG }])
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'ù' || e.key === '%')) {
        e.preventDefault()
        if (useGamificationStore.getState().isTerminalOpen) {
          closeTerminalAction()
          setLines([])
          setCurrentInput('')
        } else {
          openTerminal()
        }
      }
      if (e.key === 'Escape' && useGamificationStore.getState().isTerminalOpen) {
        closeTerminalAction()
        setLines([])
        setCurrentInput('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openTerminal, closeTerminalAction])

  useEffect(() => {
    if (isOpen) {
      // Small delay to let AnimatePresence mount
      const t = setTimeout(() => inputRef.current?.focus(), 100)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (scrollRef.current?.scrollTo) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight })
    }
  }, [lines])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = currentInput.trim().toLowerCase()
    if (!trimmed) return

    const newLines: TerminalLine[] = [
      ...lines,
      { type: 'input', text: `visitor@tommy ~ $ ${currentInput}` },
    ]

    if (trimmed === 'clear') {
      setLines([])
      setCurrentInput('')
      return
    }

    if (trimmed === 'exit') {
      closeTerminal()
      return
    }

    const output = COMMANDS[trimmed]
    if (output) {
      newLines.push({ type: 'output', text: output })
    } else {
      newLines.push({
        type: 'output',
        text: `commande introuvable: "${trimmed}". Tapez "help" pour la liste.`,
      })
    }

    setLines(newLines)
    setCurrentInput('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-testid="terminal-overlay"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeTerminal()
          }}
        >
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="relative mx-4 flex h-[420px] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[color:var(--color-neon-cyan-400)]/20 bg-[#0a0e17] font-[family-name:var(--font-mono)] text-sm shadow-[0_0_60px_var(--color-neon-cyan-400)/10]"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={closeTerminal}
                  className="h-3 w-3 rounded-full bg-red-500 transition-opacity hover:opacity-80"
                  aria-label="Fermer le terminal"
                />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-3 text-xs text-white/40">visitor@tommy-requillard — bash</span>
              <span className="ml-auto text-[10px] text-white/20">Ctrl+ù pour fermer</span>
            </div>

            {/* Output area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
              {lines.map((line, i) => (
                <pre
                  key={i}
                  className={`whitespace-pre-wrap leading-relaxed ${
                    line.type === 'input'
                      ? 'text-[color:var(--color-neon-cyan-400)]'
                      : 'text-green-300/90'
                  }`}
                >
                  {line.text}
                </pre>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center border-t border-white/10 px-4 py-2.5">
              <span className="mr-2 text-[color:var(--color-neon-cyan-400)]">visitor@tommy ~ $</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="flex-1 border-none bg-transparent text-green-300 caret-[color:var(--color-neon-cyan-400)] outline-none placeholder:text-white/20"
                placeholder="Tapez une commande..."
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
