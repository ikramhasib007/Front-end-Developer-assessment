import { SparklesIcon } from '@heroicons/react/outline'
import ReviewItem from './ReviewItem'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out there...</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Nicky',
    country: 'China',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    resort: {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    }
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Great flat in a super location. Exactly what was advertised and we had a lovely stay. Thanks!</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Shanna',
    country: 'United Kingdom',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    resort: {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    }
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>My wife and I spent four nights at Tim and Clare's charming home. The experience was excellent. Clare and Tim welcomed us warmly...</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Debra',
    country: 'United States',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    resort: {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    }
  },
]

function Reviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 max-w-7xl sm:px-0 lg:py-0">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl text-gray-900 font-bold">What guests are saying about homes in the United Kingdom</h2>
            <div className='flex items-center py-2'>
              <span className='-ml-1 relative inline-block pr-2'>
                <SparklesIcon className='h-6 w-6 rotate-135 text-yellow-400' aria-hidden="true" />
              </span>
              <p className="text-gray-500 font-medium text-sm">
                United Kingdom homes were rated {' '}
                <span className='text-gray-700 font-bold'>4.7 out of 5 stars</span>
                {' '} with {' '}
                <span className='text-gray-700 font-bold'>10,500,000+ reviews</span>
              </p>
            </div>
          </div>
          
          <ul
            role="list"
            className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-3.5 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-3.5"
          >
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewItem review={review} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Reviews
