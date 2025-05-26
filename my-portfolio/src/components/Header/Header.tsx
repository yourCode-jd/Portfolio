'use client'
import React from 'react'
import Navigation from '@/components/Navigation/nav'
import Image from 'next/image';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className='main-header fixed w-full left-0 right-0 z-50'>
            <div className='fluid-container'>
                {/* Desktop normal navigation */}
                {/* <div className=' bg-opacity-60 backdrop-blur-xs rounded-full flex justify-between items-center gap-2.5 py-8 '>
                    <h1 className='text-3xl font-bold masked-text'>LOGO</h1>
                    <Navigation />
                </div> */}

                <div className=' bg-opacity-60 backdrop-blur-xs rounded-full flex justify-between items-center gap-2.5 py-6 '>
                    <h1 className='masked-text text-3xl font-extrabold text-[#ec4899]'>LOGO</h1>
                    <Image src="hamBurger1.svg" alt="humBurger" width={45} height={45} className=' masked-text' onClick={toggleMenu} />
                </div>

                {/* Desktop Toggle Navigation */}

                <div className={`fixed top-0 right-0 backdrop-blur-3xl bg-opacity-60 w-full h-screen flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex flex-col items-center'>

                        {/* navigation */}
                        <Navigation />

                        {/* Cross icon */}
                        <Image src="close.svg" alt="close" width={50} height={50} className='absolute top-8 right-8 animate-ping' onClick={toggleMenu} />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header