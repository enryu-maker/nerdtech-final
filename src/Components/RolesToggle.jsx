import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { IoIosPin } from 'react-icons/io';

export default function RolesToggle({ Role, index, toggleRoles, IsOpen }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={
        'role hover:bg-black hover:text-white border-t-2 border-b-2 ' +
        (Role.open ? 'open bg-black text-white' : '')
      }
      key={index}
      onClick={() => toggleRoles(index)}>
      <div className='role-question  items-center  text-2xl grid grid-cols-3  '>
        <h1 className='font-MundoBold text-2xl'>{Role.title}</h1>
        <p className='font-MundoRegular  text-end'>(1 Open Roles)</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, easing: 'linear' }}
        className='role-answer flex flex-col  px-10'>
        <p className='font-MundoBold text-2xl text-white mt-5'>
          {Role.description}
        </p>
        <p className='text-md text-gray-400'>
          <span className='uppercase text-sm text-cyan-300'>Role: </span>
          {Role.requirements}
        </p>
        <div className=' px-10'>
          <h1 className=' font-MundoBold text-2xl text-start text-white mt-5'>
            Responsibilities:
          </h1>
          <p className='font-MundoRegular text-2xl text-center text-white'>
            {Role.responsibilities}
          </p>
        </div>
        <div className='px-10'>
          <h1 className=' font-MundoBold text-2xl text-start text-white mt-5'>
            Salary:
            <span className='font-MundoRegular text-2xl px-10 text-center text-white'>
              {Role.salary} &#x20B9;
            </span>
          </h1>
          <h1 className=' font-MundoBold text-2xl flex items-center gap-2 text-start text-white mt-5'>
            Location:
            <span className='font-MundoRegular text-2xl text-center text-white'>
              <IoIosPin className=' inline-block text-cyan-500 w-5 h-5' />
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
    </motion.div>
  );
}
