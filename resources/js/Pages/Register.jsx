import Navbar from '../Components/Navbar'
import { router } from '@inertiajs/react'
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
        </>
    )
}

export default Home