import React from 'react'
import Image from 'next/image';
import Skills from '@/data/skill';
function Skill() {
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center justify-center gap-20'>
                    <h2 className='main_heading animate-bounce masked-text'>My Skills</h2>
                    <ul className='grid grid-cols-3 justify-center gap-5 w-full'>
                        {Skills.map((items, index) => (
                            <li key={index}>
                                <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border-2 border-[#1e1e2f] rounded-lg'>
                                    <Image src={items.src} alt="Skill" width={100} height={100} className='masked-text w-full h-full object-contain ' />
                                    {/* <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                                    </div> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Skill