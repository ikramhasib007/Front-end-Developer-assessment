import {
  StarIcon
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
                <div className="space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="sm:col-span-3 aspect-w-10 aspect-h-7">
                    <img className="object-cover shadow rounded" src={property.pictures[i].path} alt="" />
                  </div>
                  <div className="sm:col-span-5">
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
                      {/* <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{property.name}</h3>
                        <p className="text-indigo-600">{property.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{property.bio}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={property.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={property.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul> */}
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