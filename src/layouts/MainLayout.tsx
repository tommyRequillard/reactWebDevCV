import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import MainArea from "./MainArea.tsx"
import SecondaryCol from "./SecondaryCol.tsx"
import photoProfil from "../assets/photoProfil.png"
import lion from "../assets/lion-face.png"

const navigation = [
  {name: 'CV', href: '/', icon: HomeIcon, current: true, active: true},
  {name: 'Portfolio', href: '/portfolio', icon: FolderIcon, current: false, active: false},
  {name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon, current: false, active: false},
  {name: 'Counter', href: '/counter', icon: ChartPieIcon, current: false, active: false},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface MainLayoutProps {
    children: string
}

function MainLayout({children}: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80"/>
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-dark px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={lion}
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  item.current
                                    ? 'bg-gray-50 text-cvblue'
                                    : 'text-cvblue hover:text-cvcyan hover:bg-gray-50',
                                  item.active ? 'text-gold' : ''
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    'h-6 w-6 shrink-0',
                                    item.current ? 'text-cvblue' : 'text-gray-400 group-hover:text-cvcyan',
                                    item.active ? 'text-gold' : ''
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-dark px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-10 w-auto text-cvblued"
              src={lion}
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          item.current
                            ? 'bg-gray-50 text-cvblue'
                            : 'text-cvblue hover:text-cvcyan hover:bg-gray-50',
                          item.active ? 'text-gold' : ''
                        )}
                      >
                        <item.icon
                          className={classNames(
                            'h-6 w-6 shrink-0',
                            item.current ? 'text-cvblue' : 'text-gray-400 group-hover:text-cvcyan',
                            item.active ? 'text-gold' : ''
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white-900 hover:bg-gray-50"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src={photoProfil}
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span className="text-cvblued" aria-hidden="true">Tommy REQUILLARD</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className="sticky top-0 z-40 flex items-center gap-x-6 bg-dark px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-cvblue lg:hidden"
          onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-cvblue">CV</div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src={photoProfil}
            alt=""
          />
        </a>
      </div>

      <main className="lg:pl-72">
        <div className="xl:pr-96">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <MainArea children={children}/>
          </div>
        </div>
      </main>
      <aside
        className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        <SecondaryCol/>
      </aside>
    </>
  )
}

export default MainLayout