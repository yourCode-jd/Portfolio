import React from 'react'
import Link from 'next/link';
import socialLinks from '@/data/socialLinks';
import Image from 'next/image';

function Banner() {
    return (
        <div className='flex items-center justify-start bg-[url("/hero-banner.jpg")] bg-cover bg-center h-screen'>
            <div className='container'>
                <div className='h-full'>
                    <h1 className='masked-text text-6xl font-bold text-white max-w-1/2 leading-[70px]'>Hi, I’m <b className='text-[var(--primary-color)]'>Zarin Nes</b> <br></br>
                        Photographer</h1>
                    <p className='masked-text text-base text-white mt-8 max-w-1/2 '>I’m a photographer based in New York City. I specialize in portrait and fashion photography. I also do wedding photography. </p>
                    <div className='absolute bottom-0 right-10 top-1/2 transform -translate-y-1/2 left-auto h-max w-max'>
                        <ul className="flex flex-col gap-6">
                            {socialLinks.map((item, index) => (
                                <li key={index}>
                                    <Link className='text-xs opacity-100 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 inline-block bg-background p-2 rounded-sm' href={item.href} >
                                        <Image src={item.src} alt={item.alt} width={20} height={20} className='inline-block animate-pulse' />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner