'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref}>
            <div className='container'>
                <div className='relative flex flex-col lg:flex-row items-center justify-center gap-20'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='masked-text w-3/4 p-2 bgGradient shadow-[var(--secondary-color)] rounded-bl-[300px] rounded-tr-[300px]'
                    >
                        <Image
                            src="/about.webp"
                            alt="About Me"
                            width={500}
                            height={665}
                            className='rounded-bl-[300px] rounded-tr-[300px]'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className='w-auto'
                    >
                        <h2 className='main_heading masked-text'>About Me</h2>
                        <p className='main_paragraph masked-text mt-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos earum eius harum! Laborum et cum quaerat maiores sit, distinctio deserunt quas minima odit. Beatae accusamus natus ducimus molestias facilis minus?
                        </p>
                        <button className='main_btn masked-text mt-6'>Download CV</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
