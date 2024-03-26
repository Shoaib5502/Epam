import { useEffect, useState } from 'react';
import { getLoggedInUserDetail } from '../js/Users';
import { getNumberOfBlogsPosted, getNumberOfBlogsLiked, getNumberOfCommentsPosted } from '../js/Blogs';


export default function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [numberOfBlogsPosted, setNumberOfBlogsPosted] = useState(0);
    const [numberOfBlogsLiked, setNumberOfBlogsLiked] = useState(0);
    const [numberOfCommentsPosted, setNumberOfCommentsPosted] = useState(0);
    
    useEffect(() => {
        setUserDetails(getLoggedInUserDetail());
        setNumberOfBlogsPosted(getNumberOfBlogsPosted());
        setNumberOfBlogsLiked(getNumberOfBlogsLiked());
        setNumberOfCommentsPosted(getNumberOfCommentsPosted());
    }, []);
    
    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog<sub>site</sub></span>
                    </a>
                    <div id="mega-menu-full-cta" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg></button>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* User details section */}
            <div className="container mx-auto px-4 py-8">
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto p-6">
                    {userDetails && (
                        <>
                            <div className="flex justify-center">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Profile" />
                            </div>
                            <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">{userDetails.username}</h2>
                            <p className="text-sm text-center text-gray-600 dark:text-gray-400">{userDetails.email}</p>
                            <div className="mt-4">
                                <p className="text-gray-700 dark:text-gray-300">Blogs Posted: {numberOfBlogsPosted}</p>
                                <p className="text-gray-700 dark:text-gray-300">Blogs Liked: {numberOfBlogsLiked}</p>
                                <p className="text-gray-700 dark:text-gray-300">Comments Posted: {numberOfCommentsPosted}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div> 
    );
}
