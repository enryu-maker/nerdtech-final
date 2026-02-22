import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { IoIosPin } from 'react-icons/io';
import { Parser } from 'html-to-react';

export default function RolesToggle({ Role, index }) {
  const ref = useRef(null);
  const htmlParser = new Parser();
  const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-full'
    >
      <button
        onClick={() => setIsOpen(!IsOpen)}
        className='group w-full py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left transition-all'
      >
        <div className='space-y-2'>
          <h3 className='font-outfit text-3xl sm:text-4xl font-black text-white group-hover:text-primary transition-colors'>
            {Role.title}
          </h3>
          <div className='flex items-center gap-4 text-slate-500 font-bold text-xs uppercase tracking-widest'>
            <span className='flex items-center gap-1'><IoIosPin className='text-primary' /> {Role.location}</span>
            <div className='h-1 w-1 rounded-full bg-slate-800' />
            <span className='text-secondary'>1 Open Role</span>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <motion.div
            animate={{ rotate: IsOpen ? 45 : 0 }}
            className={`h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-primary transition-colors ${IsOpen ? 'bg-primary border-primary' : 'bg-white/5'}`}
          >
            <span className='text-2xl font-light'>+</span>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {IsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className='overflow-hidden'
          >
            <div className='pb-12 pt-4 space-y-12'>
              <div className='glass-card p-8 sm:p-12 border-white/5 bg-slate-900/40 relative'>
                <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full' />

                <div className='prose prose-invert prose-lg max-w-none font-inter text-slate-300 space-y-8'>
                  <div className='space-y-4'>
                    <h4 className='text-white font-outfit font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2 inline-block'>Description</h4>
                    <p>{htmlParser.parse(Role?.description)}</p>
                  </div>

                  <div className='space-y-4'>
                    <h4 className='text-white font-outfit font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2 inline-block'>Requirements</h4>
                    <p>{htmlParser.parse(Role?.requirements)}</p>
                  </div>

                  <div className='space-y-4'>
                    <h4 className='text-white font-outfit font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2 inline-block'>Responsibilities</h4>
                    <p>{htmlParser.parse(Role?.responsibilities)}</p>
                  </div>
                </div>

                <div className='mt-12'>
                  <motion.button
                    onClick={() => document.getElementById('careers-form').scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-outfit font-black uppercase tracking-widest text-sm'
                  >
                    Apply for this position
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
