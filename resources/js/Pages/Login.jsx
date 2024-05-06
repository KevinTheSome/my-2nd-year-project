import Navbar from '../Components/Navbar'
import { router , Link, usePage } from '@inertiajs/react'
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
            <Navbar />
            <section className='grid justify-center content-center w-screen h-screen'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email:
                        <input type="email" placeholder="email" name="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input type="password" placeholder="password" name="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </label>

                    <p className='text-red-500'>{errors.email ?? ''}</p>

                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
                </form>

                <Link href="/register" method="get" className="text-lg no-underline text-blue-700 hover:text-blue-900 ml-2">Don't have an account?</Link>
            </section>
        </>
    )
}


export default Home