import { motion } from 'framer-motion';
import React from 'react';
import { Images } from '../Assets/Images';
export default function Footer() {
    return (
        <div
            className='bg-black w-full h-[100vh] flex flex-col justify-between '
        >
            <motion.div
                transition={{ duration: 1, delay: .5 }}
                className=' cursor-pointer flex transition justify-center items-center font-MundoBold w-full mt-[100px]  text-white bg-black self-center text-center text-6xl font-bold'>
                <img
                    src={Images.slogan}
                    className='object-contain'
                />
                &#174;.
            </motion.div>
            <img className='w-[250px] h-auto self-center' src={Images.foot}/>
        </div>
    )

}
