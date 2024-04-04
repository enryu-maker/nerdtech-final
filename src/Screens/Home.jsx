import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer';

export default function Home() {
    const text = "We’re a designing, branding & digital marketing agency.".split(" ");
    const [show, setShow] = React.useState(false)
    return (
        <>
            <Header show={show} />
            {/* Starting home section */}
            <motion.div
                // initial={{ opacity: 0 }}
                className='h-[100vh] w-full bg-white flex flex-col justify-evenly items-center'
            >
                <div className='w-[78%] font-poppins text-gray-900 font-black py-5 tracking-widest text-6xl'>
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10
                            }}
                            key={i}
                            className=''>
                            {el}{" "}
                        </motion.span >
                    ))}
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    className='h-[180px] w-[180px] bg-gray-900 rounded-full hover:border-2 border-gray-900 text-white font-semibold hover:text-gray-900 text-2xl hover:bg-transparent'
                >
                    <p className=' font-poppins '>
                        Start?
                    </p>
                </motion.button>
            </motion.div>
            <motion.div
                // initial={{ opacity: 0 }}
                className='h-[100vh] w-full bg-black flex flex-col justify-evenly items-center'
            >
                <p className=' font-poppins text-xl text-white '>
                    Video?
                </p>
            </motion.div>
            <motion.div
                // initial={{ opacity: 0 }}
                className='h-[100vh] w-full bg-white flex flex-col justify-evenly items-center'
            >
                <p className=' font-poppins text-xl text-black '>
                    Experties
                </p>
            </motion.div>
            {/* Contact section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileFocus={() => { setShow(!show) }}
                whileInView={{

                    opacity: 1,
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}

                viewport={{ once: true }}
                className='h-[100vh] bg-black w-full flex flex-col justify-evenly items-center'
            >
                <div>
                    <p className=' font-poppins text-white text-9xl font-light'>
                        Ready?
                    </p>
                    <p className=' font-poppins text-white text-9xl font-light'>
                        So are We?
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    className='h-[180px] w-[180px] font-poppins bg-white rounded-full  text-black font-bold  text-xl '
                >
                    <p className=' font-poppins'>
                        Start a Project?
                    </p>
                </motion.button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className='h-[100vh] bg-black w-full flex flex-row justify-evenly items-center px-40'
            >
                <div className='w-[48%]'>
                    <p className=' font-poppins text-white text-7xl font-bold'>
                        We connect
                        with you &
                        connect you
                        to people.
                        Better.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
                        whileTap={{ scale: 0.85 }}
                        className='font-poppins border-white border-[1px] px-4 py-1 font-bold  text-white text-3xl  mt-5'
                    >
                        <p className=' font-poppins'>
                            Meet Us
                        </p>
                    </motion.button>
                </div>
                <div className='w-[38%] bg-slate-50 h-[70vh]'>

                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className='h-[100vh] bg-white w-full flex flex-row justify-evenly items-start py-24 px-40'
            >
                <div className='flex justify-between items-center w-full'>
                    <p className=' font-poppins text-6xl font-bold'>
                        Updates
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
                        whileTap={{ scale: 0.85 }}
                        className='font-poppins border-black border-[1px] px-4 py-1 font-bold  text-black text-xl'
                    >
                        <p className=' font-poppins'>
                            Read All
                        </p>
                    </motion.button>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
