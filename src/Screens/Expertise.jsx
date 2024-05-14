import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { ExpertiseData } from '../data';
import FloatingBtn from '../Components/FloatingBtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Expertise() {
  const [show, setShow] = React.useState(false);
  const [expertData, setExpertData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const getExpertise = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/expertise/'
      );
      setExpertData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getExpertise();
  }, []);
  return (
    <>
      <Header show={show} />
      <motion.div
        whileFocus={() => {
          setShow(!show);
        }}
        // viewport={{ once: true }}
        className={`h-screen w-full bg-black flex flex-col 
           items-center justify-center scroll-smooth overflow-hidden`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='grid md:grid-cols-3 grid-cols-2 p-5 gap-5 md:mt-10 mt-20 h-screen'>
          {expertData.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='flex flex-col justify-center items-start'>
              <h1 className=' text-2xl font-MundoBold text-white '>
                {el.name}
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='flex flex-col justify-center ml-2 text-gray-500'>
                {el.expertise.map((el, i) => (
                  <motion.p
                    key={i}
                    onClick={() => {
                      // navigate('/expertise/' + i, {
                      //   state: el,
                      // });
                    }}
                    className=' cursor-pointer hover:text-white delay-75'>
                    {el}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
    </>
  );
}
