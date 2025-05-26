'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Skills from '@/data/skill'
import { motion, useInView } from 'framer-motion'

function Skill() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: i * 0.1,
            },
        }),
    }

    return (
        <section ref={ref} className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-20">
                    {/* Animated heading */}
                    <motion.h2
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: 'easeOut' },
                            },
                        }}
                        className="main_heading masked-text"
                    >
                        My Skills
                    </motion.h2>

                    {/* Skills Grid */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                        {Skills.map((items, index) => (
                            <motion.li
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={fadeUp}
                            >
                                <div className="group relative overflow-hidden bg-black h-[150px] transition duration-500 shadow-md p-10 border-2 border-[#1e1e2f] rounded-lg hover:transform hover:-skew-2">
                                    <Image
                                        src={items.src}
                                        alt={items.alt || 'Skill'}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain masked-text"
                                    />
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skill
