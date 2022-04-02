import { Disclosure } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon, CalendarIcon, UsersIcon } from '@heroicons/react/outline'
import { classNames } from 'src/utils'

const navigation = [
  { name: 'For You', href: '#', current: true },
  { name: 'Homes', href: '#', current: false },
  { name: 'Experiences', href: '#', current: false },
  { name: 'Places', href: '#', current: false },
]
const userNavigation = [
  { name: 'Become a Host', href: '#' },
  { name: 'Help', href: '#' },
  { name: 'Sign Up', href: '#' },
  { name: 'Log In', href: '#' },
]


function Header() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 lg:h-auto lg:pt-1.5 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center max-w-md sm:max-w-[470px]">
                  <span className="relative z-0 inline-flex shadow rounded">
                    <div className="w-full sm:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Anywhere
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white rounded-l border border-gray-200 py-2.5 pl-10 pr-3 placeholder-gray-700 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                          placeholder="Anywhere"
                          type="search"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:max-w-xs">
                      <label htmlFor="date-time" className="sr-only">
                        Anytime
                      </label>
                      <div className="-ml-px relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          id="date-time"
                          name="date-time"
                          className="block w-full bg-white border border-gray-200 py-2.5 pl-10 pr-3 placeholder-gray-700 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                          placeholder="Anytime"
                          type="search"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:max-w-xs">
                      <label htmlFor="guest" className="sr-only">
                        Guest
                      </label>
                      <div className="-ml-px relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          id="guest"
                          name="guest"
                          className="block w-full bg-white rounded-r border border-gray-200 py-2.5 pl-10 pr-3 placeholder-gray-700 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                          placeholder="1 guest"
                          type="search"
                        />
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* Right menu */}
                <nav className="lg:flex lg:space-x-8" aria-label="UserNavigation">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400',
                        'py-2 border-b-2 inline-flex items-center text-xs font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <nav className="hidden lg:pt-2 lg:flex lg:space-x-8" aria-label="Global">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-neutral-500 border-neutral-500' : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400',
                    'pt-2 pb-2.5 -mb-0.5 border-b-2 inline-flex items-center text-xs sm:text-tiny font-medium uppercase'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="pt-2 pb-3 px-2 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
