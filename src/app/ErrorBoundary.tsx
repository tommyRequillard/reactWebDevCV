import { Component, type ReactNode } from 'react'
import { GlassCard } from '@shared/ui/GlassCard'
import { NeonButton } from '@shared/ui/NeonButton'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    console.error('ErrorBoundary caught:', error, info.componentStack)
  }

  private reset = () => this.setState({ hasError: false, error: null })

  render() {
    if (!this.state.hasError) return this.props.children
    if (this.props.fallback) return this.props.fallback

    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <GlassCard variant="elevated" glow="cyan" padding="xl" className="max-w-md text-center">
          <h1 className="mb-3 text-2xl font-semibold text-[color:var(--color-neon-red-400)]">
            Une erreur est survenue
          </h1>
          <p className="mb-6 text-sm text-[color:var(--text-secondary)]">
            {this.state.error?.message ?? 'Erreur inconnue'}
          </p>
          <NeonButton variant="primary" onClick={this.reset}>
            Réessayer
          </NeonButton>
        </GlassCard>
      </div>
    )
  }
}

export default ErrorBoundary
