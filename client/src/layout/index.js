import Footer from './Footer'
import Header from './Header'


function Layout({ children }) {
  return (
    <div className="bg-white">
      
      <Header />

      <main>
        <div className='mx-auto max-w-4xl my-7'>
          {children}
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Layout
