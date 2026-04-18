import {
  Dialog as HuiDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@shared/lib/cn'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title?: ReactNode
  description?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
  className?: string
}

const sizeClass = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-xl',
  xl: 'max-w-3xl',
} as const

export function Dialog({
  open,
  onClose,
  title,
  description,
  size = 'md',
  children,
  className,
}: DialogProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <HuiDialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-[color-mix(in_srgb,var(--bg-canvas)_70%,transparent)] backdrop-blur-md" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              className={cn(
                'glass-surface glass-surface--elevated w-full rounded-2xl p-6',
                sizeClass[size],
                className,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  {title && (
                    <DialogTitle className="text-lg font-semibold text-[color:var(--text-primary)]">
                      {title}
                    </DialogTitle>
                  )}
                  {description && (
                    <p className="text-sm text-[color:var(--text-muted)]">{description}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer"
                  className="rounded-lg p-1 text-[color:var(--text-muted)] hover:bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] hover:text-[color:var(--text-primary)]"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </HuiDialog>
    </Transition>
  )
}
