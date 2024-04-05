import { motion } from 'framer-motion'
import React from 'react'
export default function Footer() {
    const [show, setShow] = React.useState(false)
    return (
        <div
            className='bg-black w-full h-[100vh] flex flex-col justify-evenly '
        >
            {
                !show ?
                    <motion.div
                        // whileInView={() => { setView(false) }}
                        onHoverStart={() => {
                            setShow(!show)
                        }
                        }
                        onHoverEnd={() => {
                            setShow(!show)
                        }}
                        // animate={{ opacity: show? 0 :  1 }}
                        transition={{ duration: 1, delay: .5 }}
                        className='cursor-pointer transition font-MundoBold text-black bg-white w-full py-16 text-center text-6xl font-bold'>
                        Let's grow together.
                    </motion.div> :
                    <motion.div
                        onHoverStart={() => {
                            setShow(!show)
                            // setView(true)
                        }}
                        // onHoverEnd={() => setView(false)}
                        // animate={{ opacity: show? 0 :  1 }}
                        transition={{ duration: 1, delay: .5 }}
                        className=' cursor-pointer transition font-MundoBold w-full text-white bg-black self-center py-16 text-center text-6xl font-bold'>
                        We love your company<span className='font-light'>&#174;</span>.
                    </motion.div>
            }
        </div>
    )
}
