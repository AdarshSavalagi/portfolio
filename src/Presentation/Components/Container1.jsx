import React from 'react';
import profile from '../../assets/profile.jpg';

export default function Container1() {
    return (
        <section id='hero'>
        <div className=' flex items-center h-screen flex-col md:flex-row-reverse w-10/12 mx-auto'>
            <div className='text-center  md:text-start md:w-2/3'>
                <p className='text-4xl font-bold text-center md:text-5xl md:text-start md:mb-4'>Hi, I am Adarsh,<br /> Creative Technologist</p>
                <p className='text-center my-3 md:text-xl md:text-start md:mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt ab voluptas unde, asperiores modi quia veritatis vitae illum dolorum, nobis, excepturi.</p>
                <button type="button" className="z-20 focus:outline-none w-8/12 md:w-44 justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Download Resume</button>
            </div>
            <div className='rounded-full order-first md:w-1/3 z-20'>
                <img src={profile} className='rounded-full order-first my-10 w-40 h-40 md:w-80 md:h-80 md:mx-auto' alt="Profile" />
            </div>
        </div></section>
    );
}
