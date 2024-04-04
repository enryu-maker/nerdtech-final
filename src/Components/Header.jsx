import { motion } from 'framer-motion';
import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Images } from '../Assets/Images';
import { RxCross1 } from "react-icons/rx";
export default function Header({
    show
}) {
    const [menu, setMenu] = React.useState(false)
    return (
        <>
            <div
                className=' font-poppins bg-white h-[50px] fixed w-full top-0 z-1 flex justify-between items-center px-40'
            >
                <motion.button className=' font-poppins font-semibold text-3xl'>
                    <img
                        src={show ? Images.logo2 : Images.logo1}
                        className='h-10'
                    />
                </motion.button >
                <motion.button
                    onClick={() => { setMenu(!menu) }}
                    whileTap={{ scale: 0.85 }}
                    className={`font-poppins text-lg flex space-x-2 items-center ${show ? "text-white" : "text-black"}`}>
                    <span>Menu</span> <HiOutlineMenuAlt4 />
                </motion.button >
            </div>
            {
                menu ?
                    <div
                        className="justify-center space-x-1 items-center font-poppins flex fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className='w-full h-[100vh]  flex flex-col justify-between bg-black '>
                            <div
                                className=' font-poppins bg-transparent h-[50px] fixed w-full top-0 z-1 flex justify-between items-center px-40'
                            >
                                <motion.button className=' font-poppins font-semibold text-3xl'>
                                    <img
                                        src={Images.logo2}
                                        className='h-10'
                                    />
                                </motion.button >
                                <motion.button
                                    onClick={() => { setMenu(!menu) }}
                                    whileTap={{ scale: 0.85 }}
                                    whileHover={{
                                        rotate : -90,
                                    }}
                                    className={`font-poppins text-xl flex space-x-2 items-center ${"text-white"}`}>
                                    <RxCross1 />
                                </motion.button >
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
