import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <section>
            <div className='container'>
                <div className='relative flex items-center justify-center gap-20'>
                    <div className='w-1/2'>
                        <Image src="/about.webp" alt="About Me" width={500} height={665} className='' />
                    </div>
                    <div className='w-auto'>
                        <span className='main_subHeading'>Visit my portfolio & Hire me</span>
                        <h2 className='main_heading'>About Me</h2>
                        <p className='main_paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos earum eius harum! Laborum et cum quaerat maiores sit, distinctio deserunt quas minima odit. Beatae accusamus natus ducimus molestias facilis minus?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About