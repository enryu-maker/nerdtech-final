import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function BlogCard({
    icon,
    title,
    date,
    type
}) {
    return (
        <div
            className=' w-[350px] h-[300px]  mb-5 space-y-2 '
        >
            <div className='w-[100%] h-[60%] bg-gray-500 ' />
            <p
                className=' font-MundoBold font-bold text-xl text-black text-ellipsis h-[15%] '
            >
                Why Packaging Design is Important for Brand identified
            </p>
            <div className='flex space-x-2 items-center'>
                <p
                    className=' font-MundoRegular font-semibold text-black'
                >October 20, 2023 |</p>
                <motion.a
                    className=' font-MundoBold hover:text-blue-500 cursor-pointer'
                >
                    Packaging
                </motion.a>
            </div>
            <motion.button className='flex space-x-2 items-center hover:text-blue-500 text-black'>
                <p
                    className=' font-MundoRegular font-bold '
                >READ MORE </p>
                <IoIosArrowRoundForward size={25} />
            </motion.button>
        </div>
    )
}
