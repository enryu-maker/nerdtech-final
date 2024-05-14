import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { IoChevronDownSharp } from 'react-icons/io5';
import FloatingBtn from '../Components/FloatingBtn';
import Footer from '../Components/Footer';
import axios from 'axios';

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

export default function Projects() {
  const [show, setShow] = React.useState(false);
  const [Open, setOpen] = React.useState(false);
  const [ProjectsData, setProjectsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getProjects = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/projects/'
      );
      setProjectsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <Header show={show} />

      <motion.div
        initial={{ opacity: 0 }}
        whileFocus={() => {
          setShow(!show);
        }}
        whileInView={{
          transition: { duration: 0.7, delay: 0.25, ease: 'linear' },
          opacity: 1,
        }}
        viewport={{ once: true }}
        className={`h-[50vh] flex flex-wrap items-center justify-center md:justify-between scroll-smooth overflow-hidden`}>
        <div
          onClick={() => {
            setOpen(!Open);
          }}
          className='flex flex-wrap md:justify-end justify-center items-center absolute top-44 md:right-44 cursor-pointer '>
          <h2 className=' border-b text-black border-black border-spacing-5 text-3xl font-MundoI flex md:gap-14 gap-44 items-end md:px-2 px-8 py-2 hover:border-blue-300  '>
            Projects
            <IoChevronDownSharp className=' inline-block text-sm  ' />
          </h2>
        </div>
      </motion.div>

      {/* Category Element */}
      {/* <div>
        {Open && (
          <motion.div className='grid md:grid-cols-3 grid-cols-2 gap-5 w-full h-full md:mx-44 mb-10 '>
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
                    className={`text-xl ${i === 0 ? 'text-red-500' : ''
                      } font-MundoRegular text-left cursor-pointer hover:text-red-500`}>
                    {el.title}
                  </li>
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div> */}
      <motion.div className='h-auto w-full  bg-white flex justify-center items-center scroll-smooth'>
        {
          ProjectsData?.map((item, index) => {
            return (
              <motion.div className={` w-[88%] pb-5 flex  ${index % 2 == 0 ? " flex-row-reverse" : "flex-row"} items-start  justify-evenly self-center `}>
                <img src={item?.image}
                  className=' h-[30%] w-[60%] object-contain'
                />
                <div className=' flex flex-col w-[15%] '>
                  <p className=' font-MundoI text-2xl sm:text-3xl  text-black'>
                    {item?.name}
                  </p>
                  <p className=' font-MundoBold text-xl sm:text-base  text-justify text-black'>
                    {item?.location}
                  </p>
                  <p className=' font-MundoRegular text-xl sm:text-sm  text-justify text-black'>
                    {item?.descrption}
                  </p>
                </div>

              </motion.div>
            )
          })
        }
      </motion.div>
      <div className='flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
