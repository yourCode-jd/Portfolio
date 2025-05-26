'use client'
import { motion, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

export default function FollowCursorImage() {
    const x = useSpring(0, { stiffness: 100, damping: 10 })
    const y = useSpring(0, { stiffness: 100, damping: 10 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX - 50)
            y.set(e.clientY - 50)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <motion.div style={{ position: 'fixed', left: 30, top: 30, x, y, zIndex: 1000 }} className="pointer-events-none">
            {/* <svg height="30" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 30" className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <text x="25" y="25" fill="#fff" fontStyle={"italic"} fontSize="30" fontWeight="bold" >Zarin Nes</text>
            </svg> */}
            <Image src="/micky.png" height={40} alt={""} width={35} className="appearance-none" />
        </motion.div>
    )
}
