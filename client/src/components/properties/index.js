import PropTypes from 'prop-types'
import { StarIcon } from '@heroicons/react/solid'
import { classNames } from 'src/utils'

const properties = [
  {
    id: 1,
    title: 'title here',
    rent: 7956,
    currency: '$',
    description: "Step behind the scenes of Havana's theater and more ",
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
      }
    ],
    location: {
      city: 'Paris',
      country: 'France'
    },
    availableDates: [],
    type: 'Single',
    rating: 5,
    reviews: 84
  },
  {
    id: 2,
    title: 'title here',
    rent: 7956,
    currency: '$',
    description: 'Dance your way into Cuban culture with an awesome journey',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      }
    ],
    location: {
      city: 'Paris',
      country: 'France'
    },
    availableDates: [],
    type: 'Single',
    rating: 5,
    reviews: 84
  },
  {
    id: 3,
    title: 'title here',
    rent: 13361,
    currency: '$',
    description: 'Hunt for truffles in the countryside',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
      }
    ],
    location: {
      city: 'Paris',
      country: 'France'
    },
    availableDates: [],
    type: 'Single',
    rating: 5,
    reviews: 84
  },
  {
    id: 4,
    title: 'title here',
    rent: 23204,
    currency: '$',
    description: 'Meet kenyan innovators with a Nairrobians angels and more',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1552437408-c9187c1c8775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ],
    location: {
      city: 'Paris',
      country: 'France'
    },
    availableDates: [],
    type: 'Single',
    rating: 5,
    reviews: 84
  },
  {
    id: 5,
    title: 'title here',
    rent: 18232,
    currency: '$',
    description: "Explore Miami's Latin flavors with food and much more you get",
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ],
    location: {
      city: 'Paris',
      country: 'France'
    },
    availableDates: [],
    type: 'Single',
    rating: 5,
    reviews: 84
  },
]

function Properties({
  title
}) {
  return (
    <div className='bg-white'>
      <div className='mx-auto px-4 max-w-7xl sm:px-0'>
        <h2 className='text-xl sm:text-2xl text-gray-700 font-medium'>{title}</h2>

        <div className="mt-3 sm:mt-5 space-y-4">
          <ul role="list" className="grid grid-cols-2 gap-x-3.25 gap-y-8 sm:grid-cols-3 sm:gap-x-3.25 lg:grid-cols-5">
            {properties.map((property) => (
              <li key={property.id} className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-15 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img src={property.pictures[0].imageUrl} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {property.title}</span>
                  </button>
                </div>
                <div>
                  <p className="mt-2 block text-xs font-normal tracking-tight text-gray-800 pointer-events-none line-clamp-2">
                    <span className='pr-3'>{property.currency}{property.rent}</span>
                    {property.description}
                  </p>
                  <div className="mt-1.5 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          property.rating > rating ? 'text-emerald-600' : 'text-gray-300',
                          'h-3.25 w-3.25 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                    <p className='text-gray-900 font-medium text-tiny pl-0.5'>
                      {property.reviews} <span>reviews</span>
                    </p>
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

Properties.defaultProps = {
  title: 'Just Booked'
}

Properties.propTypes = {
  title: PropTypes.string.isRequired
}

export default Properties