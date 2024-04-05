import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";
import Footer from '../Components/Footer';
export default function About() {
    const [show, setShow] = React.useState(false)
    const [show1, setShow1] = React.useState(false)
    const [next, setNext] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            setNext(true)
        }, 2500)
    }, [])
    const text = "We set our \n Standards.".split(" ")
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
                            We are,
                            <br />
                            <span className=' font-MundoI'>nerdtech</span>
                        </motion.p>
                }
            </motion.div>
            <motion.div
                className='h-auto w-full  bg-black flex justify-center scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] border-t flex justify-between py-20  self-center '>
                    <p className=' font-MundoBold text-2xl text-white'>
                        We can be your next <br />
                        best branding company.
                    </p>
                    <div className="flex flex-col w-[50%] space-y-5">
                        <p className=' font-MundoRegular text-2xl  text-white'>
                            Everyone has their own definition of standards.
                            What do standards mean? How can someone set them?<br /> <br />
                            We set a personal benchmark every time we crack an idea, do research, execute strategies or typically everything else, and the next time we're at it, we simply do not accept anything less. That is how we keep setting our standards. That is how we keep building brands.
                        </p>
                        <hr className='h-[1px]' />
                        <p className=' font-MundoRegular text-4xl  text-white'>
                            We believe in standardizing the process before beginning to work on anything. We ask ourselves, how can this be made simple? Simple yet significant.<br /> <br />
                            What more do we need to know? What questions do we need to ask? What steps can be taken to reach the next level? The right answers to these questions help bring the right results. And this is what pushes us in our journey of becoming one of the best branding companies in India.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className='h-[100vh] w-full  bg-white flex flex-col items-center justify-center scroll-smooth'
            >
                <motion.p
                    whileHover={{ scale: 1.1 }}
                    className=' font-MundoBold pb-0 text-8xl text-center text-black'>
                    Strategy
                </motion.p>
                <motion.p
                    className=' font-MundoBold text-8xl text-black'>
                    +
                </motion.p>
                <motion.p whileHover={{ scale: 1.1 }}
                    className=' font-MundoBold text-8xl text-black'>
                    Design
                </motion.p>
                <motion.p className=' font-MundoBold text-8xl text-black'>
                    +
                </motion.p>
                <motion.p whileHover={{ scale: 1.1 }}
                    className=' font-MundoBold text-8xl text-black'>
                    Experience
                </motion.p>
                <motion.p className=' font-MundoBold text-8xl text-black'>
                    =
                </motion.p>
                <motion.p whileHover={{ scale: 1.1 }}
                    className=' font-MundoBold text-8xl text-black'>
                    Brand
                </motion.p>
            </motion.div>
            <motion.div
                className='h-[100vh] w-full  bg-white flex flex-col items-center justify-center scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] flex justify-between py-20  self-center '>
                    <p className=' font-MundoBold text-5xl text-black'>
                        Ideas are everywhere. <br />
                        Execution is rare.
                    </p>
                    <div className="flex flex-col w-[50%] space-y-5">
                        <p className=' font-MundoRegular text-4xl pt-20  text-black'>
                            We believe that the only ideas that get executed are ones that matter. Nothing else matters.
                            <br /> <br />
                            We generate ideas, just by बातचीत (conversations). Sometimes बातचीत becomes बकवास also, but we know when to stop. :) When in an intense बातचीत, we forget to drink, eat or take breaks.
                            <br /> <br />
                            And at the end, everything just happens.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className=' w-full  bg-white flex flex-col items-center justify-start scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] border-t self-center flex justify-between py-20'>
                    <p className=' font-MundoRegular text-2xl text-black'>
                        Estd. 2020
                    </p>
                    <div className="flex flex-col w-[50%] space-y-5">
                        <p className=' font-MundoRegular text-2xl  text-black'>
                            Our journey began from a small room  having an laptop facility. But the dream was huge-to become a sought-after, global software company. Over the last 4 years, we learnt a lot, enjoyed a lot and made our mark nationally & internationally. We take pride in calling ourselves <span className=' font-MundoI'>'nerd'</span> and this feeling fills us up & thrills us to keep going, keep hustling.
                        </p>
                        <hr className='h-[1px]' />
                        <p className=' font-MundoRegular text-4xl pt-20  text-black'>
                            Being a <span className=' font-MundoI'>nerd</span> is knowing what it feels like to have almost everyday filled with enthusiasm & excitement. We work together. We argue endlessly. We run marathons. We play games. We smash boundaries. We grow together. We do it all.
                            <br /> <br />
                            Ah, we really can't express in words what being a <span className=' font-MundoI'>nerd</span> is like!
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <div>
                <Marquee
                    speed={160}
                    className=' font-MundoRegular text-[180px] py-4'>
                    We are &nbsp; <span className=' font-MundoI'>nerdtech</span>. We are Limitless. We are Innovative.
                </Marquee>
            </div>
            <motion.div
                className=' w-full  bg-white flex flex-col items-center justify-start scroll-smooth py-5'
            >
                <motion.div className=' font-MundoBold w-[78%] border-t self-center flex justify-between py-20'>
                    <p className=' font-MundoRegular text-2xl text-black'>
                        Digital Experience
                    </p>
                    <div className="flex flex-col w-[50%] space-y-5">
                        <p className=' font-MundoRegular text-2xl  text-black'>
                            How many times a day do you open your browser? Or hit 'Ctrl+S'? Or transfer files? Or scroll?
                            <br />
                            <br />
                            Can't keep count, can you?
                            Look around you, the world is becoming digital and the pace at which the digital world is growing is unimaginable. And unstoppable.
                        </p>
                    </div>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    className='h-[180px] w-[180px] font-MundoBold bg-black rounded-full  text-white font-bold text-2xl '
                >
                    <p className=' font-MundoBold'>
                        Start a Project?
                    </p>
                </motion.button>
            </motion.div>
            <motion.div
                className=' w-full  bg-white flex flex-col items-center justify-start scroll-smooth'
            >
                <motion.div className=' font-MundoBold w-[78%] border-t self-center flex justify-between py-20'>
                    <p className=' font-MundoRegular text-6xl  text-black'>
                        For 4+ years, as a software & creative branding agency, we have built experiences. For our clients and their customers.
                    </p>
                </motion.div>
            </motion.div>
            <Footer />
        </>
    )
}
