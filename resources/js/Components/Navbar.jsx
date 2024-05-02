import { Link } from '@inertiajs/react'

const Navbar = () => {

    return (
        <>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <Link href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Manegy</Link>
                </div>
                <div>
                    <Link href="/login" method="get" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</Link>
                    <Link href="/register" method="get" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Register</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar