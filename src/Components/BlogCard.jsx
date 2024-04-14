import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className=' w-[350px] h-[300px]  mb-5 space-y-2 '>
      <img
        src={item?.image}
        className='w-[100%] h-[60%] '
      />
      <p className=' font-MundoBold font-bold text-xl text-black text-ellipsis h-[15%] '>
        {item?.title}
      </p>
      <div className='flex space-x-2 items-center'>
        <p className=' font-MundoRegular font-semibold text-black'>
          {item?.date} |
        </p>
        <motion.a className=' font-MundoBold hover:text-blue-500 cursor-pointer'>
          {item?.category}
        </motion.a>
      </div>
      <motion.button
        onClick={() => {
          navigate('/blog/' + item.title, {
            state: item,
          });
        }}
        className='flex space-x-2 items-center hover:text-blue-500 text-black'>
        <p className=' font-MundoRegular font-bold '>READ MORE </p>
        <IoIosArrowRoundForward size={25} />
      </motion.button>
    </div>
  );
}
