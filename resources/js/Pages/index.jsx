import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Head , Link } from '@inertiajs/react'
const Home = () => {

    return (
      <>
        <Head title="Home" />
        <Navbar />
        <section className='h-screen w-screen'>
          <div className='p-4 h-1/3'>
            <h1 className='text-3xl text-black-500'>Welcome to Your next people manigment app "Manegy"</h1>
            <h2 className='text-2xl text-black-500'>With Manegy you can manage people like never before</h2>
            <Link href="/register" method="get" as='button' className="w-1/4 h-2/5 bg-indigo-500 text-lg no-underline rounded text-indigo-50 hover:text-indigo-200 ml-2">Get started</Link>
          </div>
          <div className='p-4 h-1/3 bg-gray-200'>
            <ul className='gap-4 grid'>
              <li>
                <h3 className='text-2xl'>It has no ads</h3>
              </li>
              <li>
                <h3 className='text-2xl'>It has History of people who left and who stayed in the building</h3>
              </li>
              <li>
                <h3 className='text-2xl'>It has search</h3>
              </li>
              <li>
                <h3 className='text-2xl'>It free if you steal it from my github</h3>
              </li>
            </ul>
          </div>
          <div className='p-4 h-1/3'>
            <p>use this program / app at your own risk the apps creater is not responsible for any damage</p>
          </div>
        </section>
        <Footer />
      </>
    )
  }
  
export default Home