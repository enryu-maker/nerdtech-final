import React from 'react';
import { motion } from 'framer-motion';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FloatingBtn() {
  const navigate = useNavigate()
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.85 }}
      onClick={()=>{
        navigate('/contact-us')
      }}
      className=' bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center '>
      <FaPen className=' text-xl text-white ' />
    </motion.button>
  );
}
