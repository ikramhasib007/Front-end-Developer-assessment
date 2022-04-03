import Link from 'next/link'
import { CalendarIcon, DesktopComputerIcon } from '@heroicons/react/outline'
import { SelectorIcon, UserIcon } from '@heroicons/react/solid'

function Hero() {
  return (
    <div className="relative box-border bg-blue-500">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-blue-400 to-sky-700 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative space-y-5 w-full px-2 mx-auto sm:px-1 pb-1.25 sm:max-w-3xl lg:max-w-7xl">
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-white lg:text-2xl">Resorts</h1>
          <p className="text-sm font-semibold text-white tracking-tight">
            Treat yourself! Your dream resort stay is just a few clicks away.
          </p>
        </div>
        <div className='p-0.75 bg-yellow-500 rounded'>
          <div className='relative z-0 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap rounded gap-0.75'>
            <div className="w-full">
              <label htmlFor="place" className="sr-only">
                More places than you could ever go (but you can try!)
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <DesktopComputerIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="place"
                  name="search"
                  className="block w-full tracking-tighter bg-white rounded-sm border border-transparent py-3 pl-10 pr-2 font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                  placeholder="More places than you could ever go (but you can try!)"
                  type="search"
                />
              </div>
            </div>

            <div className='relative flex min-w-max rounded-sm cursor-text'>
              <div className='max-w-fit pointer-events-none'>
                <label htmlFor="check-in" className="sr-only">
                  Check-in
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="check-in"
                    name="check-in"
                    className="block w-full tracking-tight bg-white rounded-l-sm border border-transparent py-3 pl-10 pr-0 font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                    placeholder="Check-in"
                    type="search"
                  />
                </div>
              </div>
              <div className='-ml-2 pointer-events-none'>
                <label htmlFor="check-out" className="sr-only">
                  Check-out
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <span className='text-gray-400' aria-hidden="true">-</span>
                  </div>
                  <input
                    id="check-out"
                    name="check-out"
                    className="block w-full tracking-tight bg-white rounded-r-sm border border-transparent py-3 pl-4 pr-0 font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                    placeholder="Check-out"
                    type="search"
                  />
                </div>
              </div>
            </div>

            <div className='relative inline-flex rounded-sm'>
              <div className="w-26 pointer-events-none">
                <label htmlFor="adult" className="sr-only">
                  Adults
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="adult"
                    name="adult"
                    className="block w-full tracking-tight bg-white rounded-l-sm border border-transparent py-3 pl-9 pr-px font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                    placeholder="2 adults"
                    type="search"
                  />
                </div>
              </div>
              <div className="w-20 -ml-4 pointer-events-none">
                <label htmlFor="children" className="sr-only">
                  Childrens
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <span className='text-gray-400 -mt-2 font-semibold' aria-hidden="true">.</span>
                  </div>
                  <input
                    id="children"
                    name="children"
                    className="block w-full tracking-tight bg-white border border-transparent py-3 pl-2 pr-px font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                    placeholder="0 children"
                    type="search"
                  />
                </div>
              </div>
              <div className="w-20 -ml-2.5 pointer-events-none">
                <label htmlFor="room" className="sr-only">
                  Room
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <span className='text-gray-400 -mt-2 font-semibold' aria-hidden="true">.</span>
                  </div>
                  <input
                    id="room"
                    name="room"
                    className="block w-full tracking-tight bg-white rounded-r-sm border border-transparent py-3 pl-2 pr-px font-semibold placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xxs"
                    placeholder="1 room"
                    type="search"
                  />
                </div>
              </div>
              <div className="absolute inset-0 right-0 flex justify-end items-center pr-2 cursor-text">
                <SelectorIcon className="h-4 w-4 text-blue-400" aria-hidden="true" />
              </div>
            </div>

            <div className='relative w-full sm:w-auto block sm:inline-flex rounded-sm'>
              <Link href={'/properties'} as="/properties" passHref>
                <a className="relative w-full sm:w-auto block sm:inline-flex items-center px-6 py-2 border border-transparent bg-blue-500 text-sm font-bold text-white rounded-sm hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                  Search
                </a>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
