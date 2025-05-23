import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <section>
            <div className='container'>
                <div className='relative flex items-center justify-center gap-20'>
                    <div className='masked-text  w-3/4 p-8 bgGradient shadow-[var(--secondary-color)] rounded-bl-[40px] rounded-tr-[40px]'>
                        <Image src="/about.webp" alt="About Me" width={500} height={665} className='rounded-bl-[40px] rounded-tr-[40px]' />
                    </div>
                    <div className='w-auto'>
                        {/* <span className='main_subHeading '>Visit my portfolio & Hire me</span> */}
                        <h2 className='main_heading masked-text'>About Me</h2>
                        <p className='main_paragraph masked-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos earum eius harum! Laborum et cum quaerat maiores sit, distinctio deserunt quas minima odit. Beatae accusamus natus ducimus molestias facilis minus?</p>
                        <button className='main_btn masked-text'>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About