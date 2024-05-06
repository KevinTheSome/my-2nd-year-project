import Navbar from '../Components/Navbar'
import { router , Link, usePage } from '@inertiajs/react'
import { useState } from 'react'
const Home = () => {

    const {errors} = usePage().props;
    const [values, setValues] = useState({
        name: "",
        password: "",
        password_confirmation: "",
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
        router.post('/register', values)
    }

    console.log(errors);

    return (
        <>
            <Navbar />
            <section className='grid justify-center content-center w-screen h-screen'>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                        Name:
                        <input type="text" placeholder="name" name="name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                    </label>

                    <label htmlFor="email">
                        Email:
                        <input type="text" placeholder="email" name="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input type="password" placeholder="password" name="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </label>

                    <label htmlFor="password_confirmation">
                        Password confirmation:
                        <input type="password" placeholder="password confirmation" name="password_confirmation" value={values.password_confirmation} onChange={(e) => setValues({ ...values, password_confirmation: e.target.value })} />
                    </label>

                    <p className='text-red-500'>{errors.name ?? ''}</p>
                    <p className='text-red-500'>{errors.email ?? ''}</p>
                    <p className='text-red-500'>{errors.password ?? ''}</p>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Register</button>
                </form>
                <Link href="/login" method="get" className="text-lg no-underline text-blue-700 hover:text-blue-900 ml-2">Already have an account?</Link>
            </section>
        </>
    )
}

export default Home