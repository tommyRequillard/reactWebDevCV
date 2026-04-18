import { Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import lion from '@assets/lion-face.png'
import { cn } from '@shared/lib/cn'
import { NAV_ITEMS } from './navigation'
import { useUIStore } from '@stores/uiStore'

export function MobileSidebar() {
  const { t } = useTranslation('common')
  const open = useUIStore((s) => s.mobileNavOpen)
  const close = useUIStore((s) => s.closeMobileNav)

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={close}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 flex">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="glass-surface glass-surface--elevated relative flex w-72 max-w-xs flex-1 flex-col gap-6 rounded-r-2xl px-6 py-6">
              <button
                type="button"
                aria-label={t('nav.close')}
                onClick={close}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--glass-border)] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--grad-neon-soft)] p-2 ring-1 ring-[color:var(--glass-border-hi)]">
                  <img src={lion} alt="" className="h-full w-auto" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                    {t('app.name')}
                  </p>
                  <p className="text-xs text-[color:var(--text-muted)]">{t('app.tagline')}</p>
                </div>
              </div>

              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.end}
                        onClick={close}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-[image:var(--grad-neon-soft)] text-[color:var(--text-primary)] ring-1 ring-[color:var(--glass-border-hi)]'
                              : 'text-[color:var(--text-secondary)] hover:bg-[color-mix(in_srgb,var(--text-primary)_8%,transparent)] hover:text-[color:var(--text-primary)]',
                          )
                        }
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span>{t(item.labelKey)}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
