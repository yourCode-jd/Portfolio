import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <Image src="/about.jpg" alt="About Me" width={500} height={500} className='rounded-full' />
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default About