'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import features from '@/data/feature'
import { motion, useInView } from 'framer-motion'

export const Features = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const fadeBlurUp = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: i * 0.2,
            },
        }),
    }

    return (
        <section ref={ref} className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-20">
                    {/* Heading with masked reveal */}
                    <motion.h2
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                clipPath: 'inset(0 0 0 0)',
                                transition: { duration: 0.8, ease: 'easeOut' },
                            },
                        }}
                        className="main_heading masked-text"
                    >
                        What I Do
                    </motion.h2>

                    {/* Features Grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {features.map((items, index) => (
                            <motion.li
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={fadeBlurUp}
                            >
                                <div className="group relative h-full bg-[#0d0d0d] overflow-hidden p-10 border border-transparent rounded-xl shadow-xl transition-all duration-500 hover:border-gradient-to-r from-pink-500 to-purple-500">

                                    {/* Floating Icon with Parallax Effect */}
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        transition={{ type: 'spring', stiffness: 120 }}
                                    >
                                        <Image
                                            src={items.src}
                                            alt={items.title}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 mb-5 transition-all duration-300"
                                        />
                                    </motion.div>

                                    {/* Masked Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.2 + 0.2, duration: 0.4 }}
                                        className="main_medHeading textGradient mb-3 masked-text"
                                    >
                                        {items.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                                        className="main_paragraph text-gray-300"
                                    >
                                        {items.description}
                                    </motion.p>

                                    {/* Glow hover ring */}
                                    <div className="absolute -inset-px bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-lg rounded-xl transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
