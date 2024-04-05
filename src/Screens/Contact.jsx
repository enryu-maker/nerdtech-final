import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
export default function Contact() {
    const [show, setShow] = React.useState(false);
    const [next, setNext] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            setNext(true)
        }, 2500)
    }, [])
    const text = "There's so much to be done.".split(" ")
    return (
        <>
            <Header show={show} />
            <motion.div
                initial={{ opacity: 0 }}
                whileFocus={() => { setShow(!show) }}
                whileInView={{
                    // scale: [.75, .95, 1],
                    // rotate: [-20, 20, 0],
                    transition: { duration: .7, ease: "linear" },
                    opacity: 1,
                    transition: {
                        type: "spring",
                        duration: 1.2 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className={`h-[100vh] w-full bg-black flex flex-col ${next ? " items-end justify-end " : "items-center justify-center  "}  scroll-smooth`}
            >
                {
                    next ?
                        <motion.p className=' font-MundoBold self-start p-10 text-start text-6xl font-bold text-white '>

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
                        </motion.p>
                        :
                        <motion.p className=' font-MundoBold w-[78%] self-center text-start text-[160px] font-bold text-white '>
                            Come,
                            <br />
                            say hello.
                        </motion.p>
                }
            </motion.div>
            <motion.div
                className='h-auto w-full  bg-black flex justify-center scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] border-t flex justify-between py-20  self-center '>

                    <p className=' font-MundoRegular text-5xl tracking-wide  text-white'>
                        Are you the best brand in India? Or in the world?
                        Difficult to answer, right?
                        We feel the same when someone asks, "are you the best software agency in India? Or in the world?"
                        hmmm.... We can get there. We are sure. But not without you. <br /> <br />
                        Let's talk.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                className='h-[100vh] w-full  bg-black flex justify-center scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] flex justify-between py-20  self-center '>
                    
                </motion.div>
            </motion.div>
        </>
    )
}
