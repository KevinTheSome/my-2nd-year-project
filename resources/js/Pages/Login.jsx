import Navbar from '../Components/Navbar'
import { router , Link, usePage , Head } from '@inertiajs/react'
import { useState } from 'react'
const Home = () => {
    const {errors} = usePage().props;
    const [values, setValues] = useState({
        password: "",
        email: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/login', values)
    }

    console.log(errors)

    return (
        <>
            <Head title="Login" />
            <Navbar />
            <section className='grid justify-center content-center w-screen h-screen'>
                <div className="flex justify-center">
                    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
                        <h2 className="text-2xl font-bold pb-5">Sign In</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="my@mail.com" required value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                                <input type="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="*********" required value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto">Submit</button>
                                <div className="flex items-center text-sm">
                                <p>New here?</p>
                                <Link href="/register" method="get" className=" text-indigo-300 underline cursor-pointer ml-1">Register</Link>
                                <p className='text-red-500'>{errors.email ?? ''}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home