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
                className=' cursor-pointer flex transition justify-center items-center font-MundoBold sm:w-full mt-[100px]  text-white bg-black self-center text-center  font-bold'>
                <img
                    src={Images.slogan}
                    className='object-contain w-[92%] sm:w-1/2'
                />
            </motion.div>
            <img className='w-[250px] h-auto self-center' src={Images.foot}/>
        </div>
    )

}
