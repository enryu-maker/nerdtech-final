import { motion } from 'framer-motion';
import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Images } from '../Assets/Images';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
export default function Header({ show }) {
  const [menu, setMenu] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className=' font-poppins bg-black h-[70px] sm:h-[50px] fixed w-[100vw] top-0 z-10 flex  justify-between items-center px-4 sm:px-40'>
        <motion.a
          href='#/'
          className=' flex justify-center items-center space-x-2 font-MundoI text-white text-3xl'>
          <img
            className='h-auto w-12'
            src={Images.nerdtech}
            alt=''
          />
          <p>nerdtech</p>
        </motion.a>
        <motion.button
          onClick={() => {
            setMenu(!menu);
          }}
          whileTap={{ scale: 0.85 }}
          className={` font-MundoI text-lg flex space-x-2 items-center ${
            show ? 'text-white' : 'text-white'
          }`}>
          <span>menu</span> <HiOutlineMenuAlt4 />
        </motion.button>
      </div>
      {menu ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          className='justify-center space-x-1 items-center font-poppins flex fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='w-full h-[100vh]   flex flex-col bg-black '>
            <div className=' font-poppins bg-black h-[70px] sm:h-[50px] fixed w-[100vw] top-0 z-10 flex  justify-between items-center px-4 sm:px-40'>
              <motion.a
                href='#/'
                className=' flex justify-center items-center space-x-2 font-MundoI text-white text-3xl'>
                <img
                  className='h-auto w-12'
                  src={Images.nerdtech}
                />
                <p>nerdtech</p>
              </motion.a>
              <motion.button
                onClick={() => {
                  setMenu(!menu);
                }}
                whileTap={{ scale: 0.85 }}
                whileHover={{
                  rotate: -180,
                }}
                className={`font-poppins text-xl flex space-x-2 items-center ${'text-white'}`}>
                <RxCross1 />
              </motion.button>
            </div>
            <div className='flex flex-col items-center justify-between sm:h-[100vh] mt-[80px] sm:mt-10 sm:py-10 w-[78%] self-center '>
              <div className=' w-[100%] sm:w-[50%]  flex flex-wrap self-start items-center justify-between'>
                <motion.a
                  href='#/about'
                  className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  About
                </motion.a>
                <motion.a className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Projects
                </motion.a>
                <motion.a className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Team
                </motion.a>
                <motion.a
                  href='#/expertise'
                  onClick={() => {
                    setMenu(!menu);
                  }}
                  className='hover:text-blue-500 py-2  cursor-pointer font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Expertise
                </motion.a>
                <motion.a
                  href='#/stories'
                  className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Stories
                </motion.a>
                <motion.a
                  href='#/clients'
                  className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Clients
                </motion.a>
                <motion.a
                  href='#/careers'
                  className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Career
                </motion.a>
                <motion.a
                  href='#/blogs'
                  className='hover:text-blue-500 py-2  font-MundoBold sm:text-7xl text-4xl font-black text-white '>
                  Blogs
                </motion.a>
              </div>
              <div className='w-[100%] flex flex-col sm:flex-row items-start sm:space-x-6 space-x-0 sm:justify-start space-y-4  sm:mt-0 mt-8 '>
                <button className=' font-MundoBold hover:text-blue-500 sm:text-7xl text-4xl font-black text-white '>
                  Contact
                </button>
                <div className='flex sm:w-[60%] flex-col items-start space-y-3'>
                  <button className=' font-MundoRegular hover:text-blue-500 text-xl font-black text-white '>
                    +91 9405649047
                  </button>
                  <button className=' font-MundoRegular hover:text-blue-500 text-xl font-black text-white '>
                    contact@nerdtech.in
                  </button>
                  <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-4'>
                    <button className=' font-MundoRegular hover:text-blue-500 text-base  text-gray-500 '>
                      Instagram
                    </button>
                    <button className=' font-MundoRegular hover:text-blue-500 text-base  text-gray-500 '>
                      Facebook
                    </button>
                    <button className=' font-MundoRegular hover:text-blue-500 text-base  text-gray-500 '>
                      Youtube
                    </button>
                    <button className=' font-MundoRegular hover:text-blue-500 text-base  text-gray-500 '>
                      Linkedin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
