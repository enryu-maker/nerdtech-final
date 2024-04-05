import React from 'react'
import Header from '../Components/Header'
import { motion, useDragControls } from 'framer-motion'
import Footer from '../Components/Footer';
import { Carousel, IconButton } from "@material-tailwind/react";
import ReactPlayer from 'react-player'
import BlogCard from '../Components/BlogCard';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const text = "We’re a designing, developing, branding & digital marketing agency.".split(" ");
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate();
    return (
        <>
            <Header show={show} />
            {/* Starting home section */}
            <motion.div
                // initial={{ opacity: 0 }}
                className='h-[100vh] w-full bg-white flex flex-col justify-evenly items-center scroll-smooth'
            >
                <div className='w-[78%] font-MundoBold text-gray-900 font-black py-5 tracking-wide text-7xl'>
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
                    onClick={() => {
                        document.getElementById("container").scrollIntoView({

                        });
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    className='h-[180px] w-[180px] bg-gray-900 rounded-full hover:border-2 border-gray-900 text-white font-semibold hover:text-gray-900 text-4xl hover:bg-transparent'
                >
                    <p className=' font-MundoBold '>
                        Push?
                    </p>
                </motion.button>
            </motion.div>
            <motion.div
                id='container'
                className='h-[100vh] w-full bg-black flex flex-col justify-evenly items-center scroll-smooth'
            >
                <ReactPlayer
                    width='100%'
                    height='100%'
                    playing={true}
                    loop={true}
                    url='https://www.litmusbranding.com/upload_data/homepage/video/6363542acc33b_IGNITE_IDEAS-new.mp4' />

            </motion.div>
            <motion.div
                className='h-[100vh] w-full bg-white/60 flex flex-col justify-evenly items-center'
            >
                <p className=' font-MundoBold w-[78%] text-4xl font-bold text-black '>
                    Experties
                </p>
                <Carousel
                    autoplay
                    transition={{ duration: 2 }}
                    className="h-[70%] w-[78%] flex z-0 "
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute top-0 left-2/4 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray-200"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="tranparent"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 z-10 bg-tranparent -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="tranparent"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 bg-tranparent -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Brand
                                <br />
                                Strategy
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                Nobody can tell a brand's story better than the ones who live it. As your branding company, we tell your story by asking you questions that help us rewind your story. We pick up milestones from your story and tell them to your audience on relevant platforms in an interesting, appealing manner.
                                <br />
                                <br />
                                The art of storytelling helps us create an impression about your brand in your audience's minds. Just like you are reading our story this moment and building a perception.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Brand
                                <br />
                                Storytelling
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                Nobody can tell a brand's story better than the ones who live it. As your branding company, we tell your story by asking you questions that help us rewind your story. We pick up milestones from your story and tell them to your audience on relevant platforms in an interesting, appealing manner.
                                <br />
                                <br />
                                The art of storytelling helps us create an impression about your brand in your audience's minds. Just like you are reading our story this moment and building a perception.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Brand
                                <br />
                                Identity
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                Your brand identity i.e the name, logo, tagline, packaging etc., has to be simple, timeless and a reflection of your brand's vision. It does not matter whether you work with a freelancer or the best branding agency in India or the world as long as your identity serves its purpose.
                                <br />
                                <br />
                                No matter what kind of a name you choose in what language or length, what colours you choose for the logo, what words you use for the tagline or what shape your packaging takes, your brand identity should, we repeat, serve its purpose.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Web Design &
                                <br />
                                Development
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                Your website's design and the way it has been developed determines how it looks, how it functions and what kind of experience it gives people, on the world wide web. The layout, the flow, the design adopted, the fonts, the responsiveness and the navigation, are all accessories that make it effective and functional.
                                <br />
                                <br />
                                Whether an Ecommerce website or an informative one, it should give the people a good experience and ease of access. That way they are more likely to spend time on your website and make the next move, whether that is making a purchase or just getting in touch with you.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>

                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Mobile App &
                                <br />
                                Development
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                Mobile app design and development are crucial for user experience. A well-designed app enhances engagement and prompts users to take desired actions, like making purchases or connecting with others. Prioritizing user experience is essential for success in the competitive app market.
                                <br />
                                <br />
                                User experience is paramount in mobile app development. A well-designed app attracts and retains users, driving engagement and desired actions. Prioritizing UX is key for business success and user satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                Social Media
                                <br />
                                Marketing
                            </p>
                            <p
                                className='font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                To make your brand repetitively visible in front of your audience, social media marketing followed by strategy creation & execution by a digital branding agency is a must. This activity decides whether your brand will reach from the 6-inch screen to the minds of your consumer. Or not.
                                <br />
                                <br />
                                Once it does, half the job is done. The next part is to ensure that this placement is recurring and worth watching each time. Your brand's impression on social media is a result of your social media marketing
                            </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100%] justify-end items-end '>
                        <div className='flex w-[60%] h-[100%] self-end justify-evenly flex-col items-end px-16 '>
                            <p className=' font-MundoBold text-end text-6xl font-bold text-black '>
                                API
                                <br />
                                Development
                            </p>
                            <p
                                className=' font-MundoRegular text-justify text-gray-700 text-xl'
                            >
                                API development services are fundamental for businesses seeking to streamline processes, enhance connectivity, and drive innovation. These services focus on designing and implementing robust, efficient, and secure APIs that facilitate seamless communication between different software systems and platforms.
                                <br />
                                <br />
                                With a focus on reliability, scalability, and flexibility, these services empower businesses to adapt to evolving technological landscapes and meet the ever-changing needs of their customers and partners.
                            </p>
                        </div>
                    </div>
                </Carousel>
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
                    <p className=' font-MundoRegular text-white text-9xl font-light'>
                        Ready?
                    </p>
                    <p className=' font-MundoRegular text-white text-9xl font-light'>
                        So are We?
                    </p>
                </div>

                <motion.button
                    onClick={()=>{
                        navigate('/contact-us')
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    className='h-[180px] w-[180px] font-MundoBold bg-white rounded-full  text-black font-bold  text-2xl '
                >
                    <p className=' font-MundoBold'>
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
                    <p className=' font-MundoBold text-white text-7xl font-bold'>
                        We connect
                        with you &
                        connect you
                        to people.
                        Better.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        className=' border-white border-[1px] py-1 px-4 w-[150px] flex justify-center items-center  hover:bg-blue-500  text-white MundoRegular  mt-5'
                    >
                        <p className=' font-MundoBold uppercase pt-1 text-xl   '>
                            Meet Us
                        </p>
                    </motion.a>
                </div>
                <div className='w-[38%] bg-white h-[70vh]'>

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
                className='h-[100vh] bg-white w-full flex flex-col justify-evenly items-start py-24 px-40'
            >
                <div className='flex justify-between items-center w-full'>
                    <p className=' font-MundoBold text-6xl font-bold'>
                        Blogs
                    </p>
                    <motion.a
                        href='#/blogs'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        className=' border-black border-[1px] py-1 px-4 flex justify-center hover:bg-blue-500 hover:text-white items-center text-black  MundoRegular  mt-5'
                    >
                        <p className=' font-MundoBold uppercase pt-1 text-xl   '>
                            Read All
                        </p>
                    </motion.a>
                </div>
                <div className='flex flex-wrap items-start justify-between  w-[100%] py-5 '>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
