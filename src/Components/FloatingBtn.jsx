import React from 'react';
import { motion } from 'framer-motion';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FloatingBtn() {
  const navigate = useNavigate()
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 30px rgba(14, 165, 233, 0.4)",
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/contact-us')}
      className='group relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] shadow-2xl shadow-primary/20'
    >
      <div className='flex h-full w-full items-center justify-center rounded-full bg-slate-950/80 backdrop-blur-xl transition-colors group-hover:bg-transparent'>
        <FaPen className='text-xl sm:text-2xl text-white group-hover:scale-110 transition-transform' />
      </div>

      {/* Subtle outward glow ring */}
      <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-lg group-hover:opacity-40 transition-opacity' />
    </motion.button>
  );
}
