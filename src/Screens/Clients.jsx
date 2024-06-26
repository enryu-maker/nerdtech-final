import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { IoChevronDownSharp } from 'react-icons/io5';
import axios from 'axios';
import Footer from '../Components/Footer';
import FloatingBtn from '../Components/FloatingBtn';

const CategoryData = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'E-Commerce',
  },
  {
    id: 3,
    title: 'Services',
  },
  {
    id: 4,
    title: 'Travel',
  },
  {
    id: 5,
    title: 'Food & Entertainment',
  },
  {
    id: 6,
    title: 'Education ',
  },
  {
    id: 7,
    title: 'Beauty & Wellness',
  },
  {
    id: 8,
    title: 'Healthcare',
  },
  {
    id: 9,
    title: 'Fashion',
  },
  {
    id: 10,
    title: 'FMCG',
  },
  {
    id: 11,
    title: 'IT & Technology',
  },
  {
    id: 12,
    title: 'Agriculture',
  },
  {
    id: 13,
    title: 'Building & construction',
  },
  {
    id: 14,
    title: 'Automotive',
  },
  {
    id: 15,
    title: 'Industrial',
  },
];

export default function Clients() {
  const [show, setShow] = React.useState(false);
  const [Open, setOpen] = React.useState(false);
  const [ClientData, setClientData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getClient = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/client/view/'
      );
      setClientData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getClient();
  }, []);

  return (
    <>
      <Header show={show} />
      <motion.div
        className={`h-[50vh] flex flex-wrap items-center justify-center md:justify-between scroll-smooth overflow-hidden`}>
        <motion.div
          initial={{ x: -200 }}
          whileFocus={() => {
            setShow(!show);
          }}
          whileInView={{
            transition: { duration: 0.7, delay: 0.25, ease: 'linear' },
            x: 0,
          }}
          viewport={{ once: true }}
          className='md:ml-40 md:text-6xl text-3xl text-center font-MundoBold'>
          <h1>We learn from them.</h1>
          <h1>We grow with them.</h1>
        </motion.div>
        {/* <div
          onClick={() => {
            setOpen(!Open);
          }}
          className='flex flex-wrap md:justify-end justify-center items-center absolute top-96 md:top-44 md:right-44 cursor-pointer '>
          <h2 className=' border-b text-black border-black border-spacing-5 md:text-3xl text-2xl font-MundoI flex md:gap-14 gap-32 items-end md:px-2 px-8 py-2 hover:border-blue-300  '>
            Category
            <IoChevronDownSharp className=' inline-block text-sm  ' />
          </h2>
        </div> */}
      </motion.div>
      {/* Category Element */}
      {Open && (
        <motion.div className='grid md:grid-cols-3 grid-cols-2 gap-5 md:px-0 px-10 w-full md:mx-44  '>
          {CategoryData.map((el, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
              className=''>
              <ul className=''>
                <li
                  className={`text-xl ${
                    i === 0 ? 'text-red-500' : ''
                  } font-MundoRegular text-left cursor-pointer hover:text-red-500`}>
                  {el.title}
                </li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* Client Element */}
      <div className='grid md:grid-cols-3 grid-cols-2 place-items-center px-5 gap-10'>
        {ClientData.map((el, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
            className='mt-10'>
            <img
              src={el.image}
              alt={el.name}
              className={`md:w-44 rounded-full md:h-44 w-28 h-28  ${
                i % 2 === 0 ? 'mb-40' : ''
              } `}
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center h-screen gap-20'>
        <h1 className=' md:text-7xl text-4xl font-MundoRegular'>
          Thanks for being with us.
        </h1>
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.85 }}
          className='h-[180px] w-[180px] bg-gray-900 rounded-full  text-white font-semibold hover:text-white text-2xl '>
          <p className=' font-MundoRegular text-md uppercase p-5 '>
            Want To Be With Us
          </p>
        </motion.button>
      </div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
