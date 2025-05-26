'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import socialLinks from '@/data/socialLinks';


function Banner() {
    return (
        <div className='flex items-center justify-start h-screen '>
            <div className='container'>
                <div className='flex items-center justify-start gap-8 relative h-full masked-text'>
                    <div className='h-full masked-text'>
                        <h1 className='main_heading max-w-1/2 leading-[70px] textGradient'>Hi, I’m <b>Zarin Nes</b> <br></br>
                            Photographer</h1>
                        <p className='masked-text main_paragraph textGradient mt-8 max-w-1/2 '>I’m a photographer based in New York City. I specialize in portrait and fashion photography. I also do wedding photography. </p>
                    </div>
                    <div className='flex items-center justify-start gap-4 mt-8 masked-text bg-black rounded-bl-[300px] rounded-tr-[300px]'>
                        <Image src="/big.png" alt="camera" width={500} height={500} className='' />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-10 top-1/2 transform -translate-y-1/2 left-auto h-max w-max'>
                <ul className="flex flex-col gap-4 masked-text">
                    {socialLinks.map((item, index) => (
                        <li key={index}>
                            <Link className='text-xs inline-block bg-[var(--primary-color)] p-2 rounded-sm animate-pulse' href={item.href} >
                                <Image src={item.src} alt={item.alt} width={20} height={20} className='' />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Banner