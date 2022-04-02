import Reviews from 'components/reviews'
import Properties from 'components/properties'
import Places from 'components/places'

function Home() {
  return (
    <div className='mt-8 pb-16 sm:pb-32 space-y-12 sm:space-y-18'>
      <Reviews />
      <Properties />
      <Places />
    </div>
  )
}

export default Home