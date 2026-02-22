import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ item }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className='glass-card group h-full overflow-hidden flex flex-col'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={item?.image}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          alt={item?.title}
        />
        <div className='absolute top-4 left-4'>
          <span className='px-3 py-1 rounded-lg bg-primary/20 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest border border-primary/20'>
            {item?.category}
          </span>
        </div>
      </div>

      <div className='p-6 flex flex-col flex-grow justify-between'>
        <div className='space-y-3'>
          <p className='text-slate-500 text-xs font-inter font-medium uppercase tracking-widest'>
            {item?.date}
          </p>
          <h3 className='font-outfit text-xl font-bold text-white line-clamp-2 leading-tight group-hover:text-primary transition-colors'>
            {item?.title}
          </h3>
        </div>

        <motion.button
          onClick={() => {
            navigate('/blog/' + item.title, {
              state: item,
            });
          }}
          className='mt-6 flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-widest group/btn'
        >
          <span>Read More</span>
          <IoIosArrowRoundForward className='text-2xl group-hover/btn:translate-x-2 transition-transform' />
        </motion.button>
      </div>
    </motion.div>

  );
}
