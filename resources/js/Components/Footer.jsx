import { Link } from '@inertiajs/react'
const Footer = () => {

    return (
        <>
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <p className="mr-4 md:mr-6 ">Made by Kevin, not in china</p>
                    </li>
                    <li>
                        <Link href="/login" method="get" className="mr-4 hover:underline md:mr-6 ">login</Link>
                    </li>
                    <li>
                        <Link href="/register" method="get" className="mr-4 hover:underline md:mr-6">Register</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer