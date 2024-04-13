import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { Parser } from 'html-to-react';
import Footer from '../Components/Footer';
import FloatingBtn from '../Components/FloatingBtn';
export default function BlogInfo() {
  const [show, setShow] = React.useState(false);
  const { state } = useLocation();
  const htmlParser = new Parser();
  const navigate = useNavigate();
  return (
    <>
      <Header show={show} />
      <motion.div className=' bg-white flex  justify-center items-center self-center scroll-smooth w-[100vw] '>
        <motion.div className='bg-white flex flex-col items-center self-center scroll-smooth w-[78%] mt-[100px]'>
          <p className=' font-MundoBold text-4xl   w-full text-left  self-center '>
            {state?.title}
          </p>
          <p className=' font-MundoRegular text-lg self-start text-gray-700'>
            {state?.date} |{' '}
            <span className='font-MundoBold'>{state?.category}</span>
          </p>
          <img
            src={state?.image}
            className='w-[100%]  object-contain mt-5 self-center'
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=' bg-white flex  justify-center items-center self-center scroll-smooth w-[100vw] '
        // className=' bg-white flex  justify-center items-center self-center scroll-smooth w-full'
      >
        <motion.div className='bg-white flex font-MundoRegular flex-col items-start text-start self-center scroll-smooth w-[68%] mt-[100px]'>
          {htmlParser.parse(state?.description)}
        </motion.div>
      </motion.div>
      <motion.div
        className=' bg-white flex flex-col justify-center items-center self-center scroll-smooth w-[100vw] py-10 '
        // className=' bg-white flex  justify-center items-center self-center scroll-smooth w-full'
      >
        <p className=' font-MundoRegular text-8xl  py-10  w-full text-center  self-center '>
          Thank you for reading <br /> our content.
        </p>
        <motion.button
          onClick={() => {
            navigate('/contact-us');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          className='h-[200px] w-[200px] font-MundoBold bg-black rounded-full self-center  text-white  text-xl '>
          <p className=' font-MundoBold uppercase'>Want to get in Touch?</p>
        </motion.button>
      </motion.div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
