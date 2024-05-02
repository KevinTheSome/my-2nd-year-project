import Navbar from '../Components/Navbar'
import { router , Link } from '@inertiajs/react'
import { useState } from 'react'
const Home = () => {

    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/users', values)
    }

    return (
        <>
            <Navbar />
            <section className='grid justify-center content-center w-screen h-screen'>
                <form onSubmit={handleSubmit}>

                <label for="name">
                        name:
                        <input type="text" placeholder="name" name="name" value={values.name} onChange={handleChange} />
                    </label>

                    <label for="email">
                        Email:
                        <input type="text" placeholder="email" name="email" value={values.email} onChange={handleChange} />
                    </label>

                    <label for="password">
                        Password:
                        <input type="text" placeholder="password" name="password" value={values.password} onChange={handleChange} />
                    </label>

                    <button type="submit">Login</button>
                </form>
                <Link href="/login" method="get" className="text-lg no-underline text-blue-700 hover:text-blue-900 ml-2">Already have an account?</Link>
            </section>
        </>
    )
}

export default Home