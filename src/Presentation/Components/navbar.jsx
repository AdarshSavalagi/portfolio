import React, { useState } from 'react';

export default function Navbar() {

    const [isOpened, setIsOpened]=useState(false);
    const handleToggle=()=>{
        setIsOpened(!isOpened);
    };
    
    return (
        <nav className="border-gray-200 bg-white bg-opacity-75 fixed w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap z-20   justify-end mx-auto p-4 ">

                <button data-collapse-toggle="navbar-solid-bg" type="button" onClick={handleToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpened?'':'hidden'} w-full md:block md:w-auto `} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0 md:bg-transparent ">
                        <li>
                            <a href="#" onClick={handleToggle} className="block py-4 text-xl px-3 md:p-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#work" onClick={handleToggle} className="block py-4 text-xl px-3 md:p-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">Work</a>
                        </li>
                        <li>
                            <a href="#blog" onClick={handleToggle} className="block py-4 text-xl px-3 md:p-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">Blog</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleToggle} className="block py-4 text-xl px-3 md:p-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


