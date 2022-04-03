import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import {
  StarIcon,
  SearchCircleIcon
} from '@heroicons/react/solid'

const propertyList = [
  {
    id: 1,
    name: 'Hotel Alborada Ocean Club',
    decription: 'Private Room- 1Double & 1Single Bed-Central London',
    rent: 38,
    currency: '€',
    location: {
      address: 'Costa del Silencio, Tenerife, Canary Islands',
      city: 'London',
      country: 'England'
    },
    rating: 4.61,
    reviews: 207,
    pictures: [
      { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    ],
    type: 'Double',
  },
  {
    id: 2,
    name: 'Hotel Alborada Ocean Club',
    decription: 'Stylish Spacious Double with Views of the City!!',
    rent: 33,
    currency: '€',
    location: {
      address: 'Costa del Silencio, Tenerife, Canary Islands',
      city: 'London',
      country: 'England'
    },
    rating: 4.58,
    reviews: 215,
    pictures: [
      { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    ],
    type: 'Double',
  },
  {
    id: 3,
    name: 'Hotel Alborada Ocean Club',
    decription: 'Nice Bedroom with Exclusive Bathroom Canary Wharf',
    rent: 46,
    currency: '€',
    location: {
      address: 'Costa del Silencio, Tenerife, Canary Islands',
      city: 'London',
      country: 'England'
    },
    rating: 4.23,
    reviews: 39,
    pictures: [
      { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    ],
    type: 'Double',
  },
  {
    id: 4,
    name: 'Hotel Alborada Ocean Club',
    decription: 'Room 1min walk from metro.(Single room)',
    rent: 27,
    currency: '€',
    location: {
      address: 'Costa del Silencio, Tenerife, Canary Islands',
      city: 'London',
      country: 'England'
    },
    rating: 3.88,
    reviews: 6,
    pictures: [
      { path: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      { path: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
      { path: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
    ],
    type: 'Double',
  }
]

function Properties() {
  return (
    <div className='mt-8 pb-16 sm:pb-32 space-y-12 sm:space-y-18 px-4 sm:px-0'>
      <div className="space-y-12 lg:space-y-0">
        <div className="pt-4">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
          >
            {propertyList.map((property, i) => (
              <li key={property.id} className="sm:py-7">
                <div className="relative space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="sm:col-span-3 aspect-w-10 aspect-h-7">
                    <img className="object-cover shadow rounded" src={property.pictures[i].path} alt="" />
                  </div>
                  <div className="sm:col-span-5 flex flex-col h-full justify-between">
                    <div className="space-y-3">
                      <div className='flex justify-between'>
                        <p className='text-base text-gray-400'>Private room</p>
                        <div className='flex items-center text-sm'>
                          <StarIcon className='h-4.5 w-4.5 text-pink-600' />
                          <span className='px-0.75'>{property.rating}</span>
                          <span className='text-gray-400 font-medium'>({property.reviews})</span>
                        </div>
                      </div>
                      <h2 className='text-xl text-warm-gray-700 tracking-tight'>{property.decription}</h2>

                      <div className='relative text-gray-500 text-sm'>
                        <p>
                          <span>3 guests</span>{' '}.{' '}
                          <span>1 bedroom</span>{' '}.{' '}
                          <span>2 beds</span>{' '}.{' '}
                          <span>1 shared bathroom</span>
                        </p>
                        <div className='relative'>
                          <span>Wifi</span>{' '}.{' '}
                          {/* <p className='relative inline-block px-1 bg-amber-200'><span className='absolute inset-0 top-1'>.</span></p> */}
                          <span>Kitchen</span>{' '}.{' '}
                          <span>Heating</span>{' '}.{' '}
                          <span>Washing machine</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div>
                        {i === 0 && <div className='px-2.5 py-0.5 inline-flex items-center rounded-full space-x-0.5 bg-gray-100'>
                          <SearchCircleIcon className='-ml-1 w-5 h-5 text-gray-500' aria-hidden="true" />
                          <span className='text-gray-900 font-semibold text-sm'>Rare find</span>
                        </div>}
                      </div>
                      <div>
                        <div className='flex space-x-1 text-gray-800 font-medium text-lg'>
                          <p className='font-bold'>{property.currency}{property.rent}</p>
                          <span>/</span>
                          <p>night</p>
                        </div>
                        <p className='flex items-center justify-end text-gray-400 text-sm font-medium'>
                          {property.currency}{property.rent} total
                          <QuestionMarkCircleIcon className='ml-0.5 h-4 w-4 text-gray-400' aria-hidden="true" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Properties