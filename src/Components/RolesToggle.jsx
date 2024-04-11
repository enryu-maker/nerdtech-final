import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { IoIosPin } from 'react-icons/io';
import { Parser } from "html-to-react";

export default function RolesToggle({ Role, index }) {
  const ref = useRef(null);
  const htmlParser = new Parser();
  const [IsOpen, setIsOpen] = React.useState(false);

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start('visible');
  //   }
  // }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      // initial='hidden'
      // animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={
        `py-2 border-t-2  border-b-2 w-full bg-black font-MundoRegular  ${IsOpen ? "bg-black text-white" : "bg-white text-black"} `

      }
      key={index}
    >
      <motion.button
        onClick={() => {
          setIsOpen(!IsOpen)
        }}
        className={` ${IsOpen ? "bg-black text-white" : ""} items-center  w-full text-2xl flex justify-between px-4 `}>
        <h1 className='font-MundoI text-2xl'>{Role.title}</h1>
        <p className='font-MundoI text-lg '>(1 Open Roles)</p>
        <p className=' font-MundoI  text-5xl '>+</p>
      </motion.button>
      {
        IsOpen ?
          (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, easing: 'linear' }}
              className='flex flex-col  px-10 py-5'>
              <p className='font-MundoRegular text-xl  text-white mt-5'>
                {htmlParser.parse(Role?.description)}
              </p>
              <div className=' px-10'>
                <h1 className=' font-MundoI text-2xl text-start text-white mt-5'>
                  Requirements :
                </h1>
                <p className='font-MundoRegular text-lg text-justify text-white'>
                  {htmlParser.parse(Role?.requirements)}
                </p>
              </div>
              <div className=' px-10'>
                <h1 className=' font-MundoI text-2xl text-start text-white mt-5'>
                  Responsibilities :
                </h1>
                <p className='font-MundoRegular text-lg text-justify text-white'>
                  {htmlParser.parse(Role?.responsibilities)}
                </p>
              </div>
              <div className='px-10'>
                {/* <h1 className=' font-MundoBold text-2xl text-start text-white mt-5'>
            Salary:
            <span className='font-MundoRegular text-2xl px-10 text-center text-white'>
              {Role.salary} &#x20B9;
            </span>
          </h1> */}
                <h1 className=' font-MundoI text-2xl flex items-center gap-2 text-start text-white mt-5'>
                  Location :
                  <span className=' font-MundoI text-lg flex justify-center text-blue-500 items-center space-x-2 text-center '>
                    <IoIosPin className=' inline-block text-blue-500 w-5 h-6' />
                    {Role.location}
                  </span>
                </h1>
              </div>
              <div className='px-10 mt-10'>
                <motion.a
                  whileHover={{ backgroundColor: 'white', x: 5 }}
                  className=' border-white text-base border-[1px] px-5 w-[250px] py-5 cursor-pointer flex justify-center items-center uppercase hover:text-black text-white font-MundoI '>
                  Apply Now
                </motion.a>
              </div>
            </motion.div>
          )
          :
          null
      }

    </motion.div>
  );
}
