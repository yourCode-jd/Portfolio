import React from 'react'
import Image from 'next/image';
function Skill() {
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center justify-center gap-20'>
                    <h2 className='main_heading animate-bounce'>My Skills</h2>
                    <div className='grid grid-cols-3 justify-center gap-5 w-full'>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/react.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/figma.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/js.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/photoshop.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/Ae.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                        <div className='hover:transform hover:-skew-2 bg-black h-[150px] relative overflow-hidden transition duration-500 shadow-md group p-10  border border-white/20'>
                            <Image src="/In.webp" alt="Skill" width={100} height={100} className=' w-full h-full object-contain ' />
                            <div className='text-white! text-5xl font-bold absolute top-0 opacity-100 group-hover:opacity-0 transition duration-500 left-0 w-full h-full borderGradient flex items-center justify-center'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill