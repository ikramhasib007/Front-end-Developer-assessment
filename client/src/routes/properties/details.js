import { useState } from 'react'
import { DateRangePicker } from 'react-dates'
import Select from 'react-select'
import { reactSelectTheme } from 'src/utils/customsFunc'
import {
  BellIcon,
  EmojiHappyIcon,
  LibraryIcon,
  PhoneIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/solid'
import {
  FlagIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import 'react-dates/initialize'

const property = {
  name: 'Hotel Alborada Ocean Club',
  decription: 'Stylish Spacious Double with Views of the City!!',
  rent: 24,
  currency: '€',
  location: {
    address: 'Costa del Silencio, Tenerife, Canary Islands',
    city: 'London',
    country: 'England'
  },
  rating: 3.5,
  reviews: 325,
  pictures: [
    { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    { path: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
  ],
  type: 'Double',
}

function PropertyDetails() {
  const [state, setState] = useState({ startDate: undefined, endDate: undefined, focusedInput: null })

  return (
    <div className='mt-8 pb-16 sm:pb-32 space-y-12 sm:space-y-18 px-4 sm:px-0'>
      <div>
        <div>
          <div className='flex items-center space-x-1'>
            <h1 className="text-lg text-sky-800 font-semibold">{property.name}</h1>
            <span className='flex -space-x-1'>
              <StarIcon className="h-6.5 w-6.5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
              <StarIcon className="h-6.5 w-6.5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
              <StarIcon className="h-6.5 w-6.5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
            </span>
          </div>
          <p className='mt-1 text-gray-800 text-xs'>{property.location.address}</p>
          
          <div className='mt-0.5 flex items-center relative space-x-1'>
            <EmojiHappyIcon className='h-5 w-5 text-yellow-600' aria-hidden="true" />
            <div className='relative flex space-x-px'>
              <div className='relative flex items-center justify-center bg-green-500 z-10 h-3.5 w-3.5 rounded-full'>
                <div className='h-3 w-3 bg-green-500 border-2 border-white rounded-full'></div>
              </div>
              <div className='relative flex items-center justify-center bg-green-500 z-10 h-3.5 w-3.5 rounded-full'>
                <div className='h-3 w-3 bg-green-500 border-2 border-white rounded-full'></div>
              </div>
              <div className='relative flex items-center justify-center bg-green-500 z-10 h-3.5 w-3.5 rounded-full'>
                <div className='h-3 w-3 bg-green-500 border-2 border-white rounded-full'></div>
              </div>
              <div className='relative flex items-center justify-center bg-green-500 z-10 h-3.5 w-3.5 rounded-full'>
                <div className='relative h-3 w-3 bg-green-500 border-2 border-white rounded-full'>
                  <div className='absolute inset-0 left-1/2 bg-white'></div>
                </div>
              </div>
              <div className='relative flex items-center justify-center bg-green-500 z-10 h-3.5 w-3.5 rounded-full'>
                <div className='h-3 w-3 bg-white border-2 border-white rounded-full'></div>
              </div>
            </div>
            <p className='text-cyan-500 text-xs font-medium'>{property.reviews} <span>reviews</span></p>
          </div>
        </div>

        <div>
          <div className="relative mt-3.5 border border-gray-600">
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 overflow-hidden">
                  <img src={property.pictures[0].path} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details</span>
                  </button>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='grid grid-rows-2'>
                  <div className='row-span-1'>
                    <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 overflow-hidden">
                      <img src={property.pictures[1].path} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                      <button type="button" className="absolute inset-0 focus:outline-none">
                        <span className="sr-only">View details</span>
                      </button>
                    </div>
                  </div>
                  <div className='row-span-1'>
                    <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 overflow-hidden">
                      <img src={property.pictures[2].path} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                      <button type="button" className="absolute inset-0 focus:outline-none">
                        <span className="sr-only">View details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-12 gap-10'>
        <div className='col-span-12 sm:col-span-7'>
          <div className='flex items-center space-x-6'>
            <h2 className='text-xl sm:text-3xl tracking-tight text-warm-gray-700 font-semibold'>{property.decription}</h2>
            <div className="flex-none">
              <img
                src="https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="w-13 h-13 bg-gray-100 rounded-full"
              />
              <p className='pt-0.5 text-gray-400 text-xs text-center'>Shimmy</p>
            </div>
          </div>

          <div className='mt-1 space-y-3'>
            <p className='text-warm-gray-500 text-sm'>Greater London</p>
            <div className='flex text-sm text-warm-gray-700 space-x-3'>
              <div className="flex-none items-center justify-center">
                <LibraryIcon className='text-warm-gray-700 h-5 w-3' aria-hidden="true" />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>Private room in flat</p>
                <div className='flex space-x-4 text-warm-gray-500'>
                  <span>2 guests</span>
                  <span>1 bedroom</span>
                  <span>1 bed</span>
                  <span>1 shared bathroom</span>
                </div>
              </div>
            </div>

            <div className='flex text-sm text-warm-gray-700 space-x-3'>
              <div className="flex-none items-center justify-center">
                <BellIcon className='text-warm-gray-700 h-5 w-3' aria-hidden="true" />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>Self check-in</p>
                <div className='flex space-x-4 text-warm-gray-500'>
                  <span>Check yourself in with the lockbox</span>
                </div>
              </div>
            </div>

            <div className='flex text-sm text-warm-gray-700 space-x-3'>
              <div className="flex-none items-center justify-center">
                <SparklesIcon className='text-warm-gray-700 h-5 w-3 rotate-180' aria-hidden="true" />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>Breakfast</p>
                <div className='flex space-x-4 text-warm-gray-500'>
                  <span>This is one of a few places in the area that has this feature.</span>
                </div>
              </div>
            </div>

            <div className='flex text-sm text-warm-gray-700 space-x-3'>
              <div className="flex-none items-center justify-center">
                <PhoneIcon className='text-warm-gray-700 h-5 w-3' aria-hidden="true" />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>Great communication</p>
                <div className='flex space-x-4 text-warm-gray-500'>
                  <span>100% of recent guests rated Shimmy 5-star in communication.</span>
                </div>
              </div>
            </div>
          </div>

          <div className='my-6 border-t text-sm text-warm-gray-500'>
            <p className='mt-8'>A spacious double room with a comfy king size bed in the heart of East End</p>
            <p className='flex flex-col mt-3'>
              <span>- 5mins walk from underground</span>
              <span>- 5mins walk to shadwell DLR station</span>
              <span>- 10mins by train to city</span>
              <span>- 5mins by train to trendy Shoreditch nightlife</span>
              <span>- Easy access to all tourist destinations</span>
              <span>- Large variety of pubs and restaurants close by</span>
            </p>
          </div>

        </div>

        <div className='col-span-12 sm:col-span-5'>
          <div className='border p-4 divide-y divide-gray-200 space-y-3'>
            <div>
              <p className='text-xl text-gray-700 font-bold'>
                {property.currency}{property.rent} {' '}
                <span className='text-tiny font-bold text-gray-500'>per night</span>
              </p>
              <div className='flex items-center'>
                <StarIcon className='h-3 w-3 text-green-600' />
                <span className='text-tiny text-gray-400 font-medium'>(215 reviews)</span>
              </div>
            </div>
            <div>
              <div className='mt-1'>
                <label htmlFor="dates" className='text-xs text-gray-500 font-semibold'>Dates</label>
                <div className='w-full -mt-0.5'>
                  <DateRangePicker
                    startDate={state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={state.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => setState(prevState => ({ ...prevState, startDate, endDate }))}
                    focusedInput={state.focusedInput}
                    onFocusChange={focusedInput => setState(prevState => ({ ...prevState, focusedInput }))}
                    block
                    small
                  />
                </div>
              </div>
              <div className='mt-1'>
                <label htmlFor="dates" className='text-xs text-gray-500 font-semibold'>Guests</label>
                <div className='w-full -mt-0.5'>
                  <Select
                    className="focus:ring-neutral-500 focus:border-neutral-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                    options={[{ label: "1 guest", value: '1' },{ label: "2 guests", value: '2' }]}
                    classNamePrefix="react-select"
                    theme={reactSelectTheme}
                  />
                </div>
              </div>

              <div className='divide-y divide-gray-200 space-y-2'>
                <div className='mt-3 flex space-x-4 justify-between'>
                  <p className='text-xs text-gray-500 font-semibold'>
                    <span>{property.currency}{property.rent}</span> x 1 night
                  </p>
                  <p className='text-xs text-gray-500 font-semibold'><span>{property.currency}{property.rent}</span></p>
                </div>
                <div className='pt-3 flex space-x-4 justify-between'>
                  <p className='flex text-xs text-gray-500 font-semibold space-x-0.5'>
                    <span>Cleaning fee</span>
                    <QuestionMarkCircleIcon className='h-4 w-4 text-gray-400' aria-hidden="true" />
                  </p>
                  <p className='text-xs text-gray-500 font-semibold'>€5</p>
                </div>
                <div className='pt-3 flex space-x-4 justify-between'>
                  <p className='flex text-xs text-gray-500 font-semibold space-x-0.5'>
                    <span>Service fee</span>
                    <QuestionMarkCircleIcon className='h-4 w-4 text-gray-400' aria-hidden="true" />
                  </p>
                  <p className='text-xs text-gray-500 font-semibold'>€4</p>
                </div>
                <div className='pt-3 flex space-x-4 justify-between'>
                  <p className='flex text-xs text-gray-500 font-semibold space-x-0.5'>
                    <span className='font-bold text-gray-600'>Total</span>
                  </p>
                  <p className='text-xs text-gray-600 font-bold'>€33</p>
                </div>
              </div>
              <div className='mt-5'>
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reserve
                </button>
                <div className='text-tiny font-bold pt-2 text-gray-500 text-center'>
                  <p>You won&apos;t be chanrged yet</p>
                  <p>Certain reservations may also require a security deposit.</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href='#'
            className='text-gray-500 text-xs flex justify-center items-center space-x-2 py-4'
          >
            <FlagIcon className='h-4 w-4 text-gray-500' aria-hidden="true" />
            <span>Report this listing</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails