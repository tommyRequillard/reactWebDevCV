import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@shared/lib/cn'

export type ToastType = 'success' | 'error' | 'info' | 'warn'

export interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

interface ToastContextValue {
  toasts: Toast[]
  push: (toast: Omit<Toast, 'id'>) => string
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

const icons: Record<ToastType, ReactNode> = {
  success: <CheckCircleIcon className="h-5 w-5 text-[color:var(--color-neon-lime-400)]" />,
  error: <XCircleIcon className="h-5 w-5 text-[color:var(--color-neon-red-400)]" />,
  info: <InformationCircleIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />,
  warn: <ExclamationTriangleIcon className="h-5 w-5 text-[color:var(--color-neon-amber-400)]" />,
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const push = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
      const duration = toast.duration ?? 4500
      setToasts((prev) => [...prev, { ...toast, id }])
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration)
      }
      return id
    },
    [dismiss],
  )

  const value = useMemo(() => ({ toasts, push, dismiss }), [toasts, push, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed bottom-6 right-6 z-[100] flex w-full max-w-sm flex-col gap-2"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'glass-surface pointer-events-auto flex items-start gap-3 rounded-xl p-3.5 text-sm text-[color:var(--text-primary)] shadow-[var(--shadow-elevated)]',
              )}
              role={t.type === 'error' ? 'alert' : 'status'}
            >
              <span className="mt-0.5 shrink-0">{icons[t.type]}</span>
              <p className="flex-1">{t.message}</p>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Fermer la notification"
                className="text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]"
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
