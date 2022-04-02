import Properties from 'components/properties'
import Reviews from 'components/reviews'

function Home() {
  return (
    <div className='mt-8 space-y-12 sm:space-y-18'>
      <Reviews />
      <Properties />
    </div>
  )
}

export default Home