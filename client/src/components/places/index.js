import { useRouter } from 'next/router'
import PropTypes from 'prop-types'


const places = [
  {
    id: 1,
    title: 'Handbag Shopping',
    rent: 13361,
    currency: '$',
    description: "Step behind the scenes of Havana's theater and more ",
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      }
    ],
    location: {
      city: 'London',
      country: 'England'
    },
    guide: {
      name: 'Chanda Stacker',
      occupation: 'Food Blogger'
    },
    availableDates: [],
  },
  {
    id: 2,
    title: 'Where to see Comedy',
    rent: 13361,
    currency: '$',
    description: 'Dance your way into Cuban culture with an awesome journey',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1502700559166-5792585222ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      }
    ],
    location: {
      city: 'London',
      country: 'England'
    },
    guide: {
      name: 'Edgar Agbayani',
      occupation: 'Chef'
    },
    availableDates: [],
  },
  {
    id: 3,
    title: 'Scarf Shops',
    rent: 13361,
    currency: '$',
    description: 'Hunt for truffles in the countryside',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80'
      }
    ],
    location: {
      city: 'London',
      country: 'England'
    },
    guide: {
      name: 'Carlos Muela',
      occupation: 'SoMa StrEat Food Park'
    },
    availableDates: [],
  },
  {
    id: 4,
    title: 'Wine Bars',
    rent: 23204,
    currency: '$',
    description: 'Meet kenyan innovators with a Nairrobians angels and more',
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1509095660908-d9b1e7ffec62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
      }
    ],
    location: {
      city: 'London',
      country: 'England'
    },
    guide: {
      name: 'Apexer',
      occupation: 'Artist'
    },
    availableDates: [],
  },
  {
    id: 5,
    title: 'Vintage Decor',
    rent: 18232,
    currency: '$',
    description: "Explore Miami's Latin flavors with food and much more you get",
    pictures: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      }
    ],
    location: {
      city: 'London',
      country: 'England'
    },
    guide: {
      name: 'Andrew McClintock',
      occupation: 'Gallerist'
    },
    availableDates: [],
  },
]

function Places({
  title
}) {
  const router = useRouter()

  return (
    <div className='bg-white'>
      <div className='mx-auto px-4 max-w-7xl sm:px-0'>
        <h2 className='text-xl sm:text-2xl text-gray-700 font-medium'>{title}</h2>

        <div className="mt-3 sm:mt-5 space-y-4">
          <ul role="list" className="grid grid-cols-2 gap-x-3.25 gap-y-8 sm:grid-cols-3 sm:gap-x-3.25 lg:grid-cols-5">
            {places.map((place) => (
              <li key={place.id} className="relative">
                <div className="group block w-full aspect-w-8 aspect-h-8 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img src={place.pictures[0].imageUrl} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                  <button type="button" onClick={() => router.push('/properties/details')} className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {place.title}</span>
                  </button>
                </div>
                <div>
                  <p className="mt-2 block text-xs font-normal tracking-tight text-gray-800 pointer-events-none line-clamp-2">
                    <span className='inline-block pr-5'>By {place.guide.name}</span>
                    <span>{place.guide.occupation}</span>
                  </p>
                </div>
                <div className='absolute left-2 bottom-12 pointer-events-none'>
                  <p className='bg-white text-gray-700 inline-block rounded px-1 font-bold text-tiny uppercase font-serif'>Guide</p>
                  <p className='mt-0.5 text-white font-extrabold text-xl font-serif tracking-tighter uppercase leading-5'>{place.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Places.defaultProps = {
  title: 'Places in London'
}

Places.propTypes = {
  title: PropTypes.string.isRequired
}

export default Places