import { Link , usePage } from '@inertiajs/react'

const Saidbar = () => {
    const {peopleCount} = usePage().props;
    const {peopleCountInBuilding} = usePage().props;

    return (
        <>
            <nav>
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 max-md:w-40 max-sm:w-16 w-64 text-gray-800">
                    <div className="fixed flex flex-col top-0 left-0 max-md:w-40 max-sm:w-16 w-64 bg-white h-full border-r">
                        <div className="grid items-center justify-center h-14 border-b">
                            <Link as='button' href="/" method='get'>
                                <h3 className='text-xl max-sm:text-xs'>Manegy</h3>
                                <p className='text-xs text-gray-500 max-sm:hidden'>The best people manager</p>
                            </Link>
                        </div>
                        <div className="overflow-y-auto overflow-x-hidden flex-grow">
                            <ul className="flex flex-col py-4 space-y-1">
                                <li className="px-5 max-sm:hidden">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide max-sm:hidden text-gray-500">Menu</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/dashboard" method='get' as='button' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate max-sm:hidden">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="px-5 max-sm:hidden">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-500">Tasks</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/dashboard/history" method='get' as='button' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate max-sm:hidden">History</span>
                                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-100 rounded-full">{peopleCount ?? 0 }</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/inbuilding" method='get' as='button' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate max-sm:hidden">In Building</span>
                                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-100 rounded-full">{peopleCountInBuilding ?? 0 }</span>
                                    </Link>
                                </li>
                                <li className="px-5 max-sm:hidden">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide  text-gray-500">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/logout" method="post" as='button' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate max-sm:hidden">Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Saidbar