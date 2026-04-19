import { useCallback, useEffect, useRef, useState } from 'react'
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
}

export function TerminalEmulator() {
  const [isOpen, setIsOpen] = useState(false)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const unlockTerminal = useGamificationStore((s) => s.unlockTerminal)

  const openTerminal = useCallback(() => {
    setIsOpen(true)
    setLines([{ type: 'output', text: WELCOME_MSG }])
    unlockTerminal()
  }, [unlockTerminal])

  const closeTerminal = useCallback(() => {
    setIsOpen(false)
    setLines([])
    setCurrentInput('')
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '\\') {
        e.preventDefault()
        setIsOpen((prev) => {
          if (!prev) {
            openTerminal()
            return true
          }
          closeTerminal()
          return false
        })
      }
      if (e.key === 'Escape' && isOpen) {
        closeTerminal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, openTerminal, closeTerminal])

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
              <span className="ml-auto text-[10px] text-white/20">Ctrl+\ pour fermer</span>
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
