import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { ExpertiseData } from '../data';
import FloatingBtn from '../Components/FloatingBtn';



export default function Expertise() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Header show={show} />
      <motion.div
        whileFocus={() => {
          setShow(!show);
        }}
        // viewport={{ once: true }}
        className={`h-[100vh] w-full bg-black flex flex-col 
           items-center justify-center scroll-smooth`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='grid grid-cols-3  gap-5 mt-10 '>
          {ExpertiseData.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='flex flex-col justify-center items-start'>
              <h1 className=' text-2xl font-MundoBold text-white '>
                {el.title}
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='flex flex-col justify-center ml-2 text-gray-500'>
                {el.expertise.map((el, i) => (
                  <motion.p
                    key={i}
                    className=' cursor-pointer hover:text-white delay-75'>
                    {el}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
    </>
  );
}
