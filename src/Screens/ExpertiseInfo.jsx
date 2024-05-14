import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
export default function ExpertiseInfo() {
  const params = useParams();
  const { state } = useLocation();
  const [show, setShow] = React.useState(false);
  console.log(state)

  return (
    <>
      <Header show={show} />
      <motion.div
        // initial={{ opacity: 0 }}
        className=' sm:h-[100vh] w-full bg-white flex flex-col sm:mt-0 mt-[80px] justify-center space-y-5 items-start scroll-smooth'>
        <p className=' font-MundoI w-[78%] self-center text-start md:text-6xl text-3xl text-black'>
          {state?.name}
        </p>
        <p className=' font-MundoRegular w-[78%] self-center text-start md:text-4xl text-2xl text-black'>
          {state?.description}
        </p>
      </motion.div>
      <Footer/>
    </>
  );
}
