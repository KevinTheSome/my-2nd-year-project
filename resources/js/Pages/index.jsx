import Navbar from '../Components/Navbar'
import { Head } from '@inertiajs/react'
const Home = () => {

    return (
      <>
        <Head title="Home" />
        <Navbar />
        <p className='text-xl text-red-500'>Hello welcome to your first Inertia app!</p>
        <p className='text-xl text-black-500'>Welcome to Your next people manigment app Manegy</p>
      </>
    )
  }
  
export default Home