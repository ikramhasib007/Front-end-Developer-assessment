import PropTypes from 'prop-types'
import { StarIcon } from '@heroicons/react/solid'
import { classNames } from 'src/utils'

function ReviewItem({ review }) {
  return (
    <div className="space-y-3">
      <div className="aspect-w-3 aspect-h-2">
        <img className="object-cover shadow rounded" src={review.resort.imageUrl} alt="" />
      </div>
      <div className="flex text-sm text-gray-500">
        <div className="flex-1">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  review.rating > rating ? 'text-cyan-700' : 'text-gray-300',
                  'h-4 w-4 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{review.rating} out of 5 stars</p>
          <div
            className="mt-2 prose prose-sm text-xs max-w-none text-gray-500"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
          <div className='py-3.5 flex space-x-4 items-center'>
            <div className="flex-none">
              <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
            </div>
            <div className='flex-1'>
              <h3 className="text-sm font-medium text-gray-700">{review.author}</h3>
              <p className='text-xs'>{review.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired
}

export default ReviewItem