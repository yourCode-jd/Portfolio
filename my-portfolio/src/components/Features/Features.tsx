import React from 'react'
import Image from 'next/image'
import features from '@/data/feature'

export const Features = () => {
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center justify-center gap-20'>
                    <h2 className='main_heading animate-bounce masked-text'>What I Do</h2>
                    <ul className='grid grid-cols-3 justify-center gap-5 w-full'>
                        {features.map((items, index) => (
                            <li key={index} className=''>
                                <div className='h-full  bg-black relative overflow-hidden transition duration-500 shadow-md group p-10  border-2 border-[#1e1e2f] rounded-lg'>
                                    <Image src={items.src} alt="Skill" width={24} height={24} className='masked-text w-12 h-12 mb-4 group-[:hover]:-translate-y-28 transition duration-300 ' />
                                    <h3 className='masked-text main_medHeading mb-5 textGradient  group-[:hover]:-translate-y-2 transition duration-500'>{items.title}</h3>
                                    <p className='masked-text main_paragraph group-[:hover]:-translate-y-2 transition duration-500'>{items.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
