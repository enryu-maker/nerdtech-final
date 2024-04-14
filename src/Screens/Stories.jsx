import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import FloatingBtn from '../Components/FloatingBtn';
import Footer from '../Components/Footer';

export default function Stories() {
  const [show, setShow] = React.useState(false);
  const [next, setNext] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);

  const text = ' It`s the reason of \n our existence.'.split(' ');

  return (
    <>
      <Header show={show} />
      <motion.div
        viewport={{ once: true }}
        className={`h-[100vh] w-full bg-black flex flex-col ${
          next ? ' items-end justify-end ' : 'items-center justify-center  '
        }  scroll-smooth`}>
        {next ? (
          <div className='grid md:grid-cols-2 md:px-10 items-center  '>
            <motion.p className='  font-MundoBold self-start p-10 text-start text-6xl font-bold text-white '>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                  className=''>
                  {el}{' '}
                </motion.span>
              ))}
            </motion.p>
          </div>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileFocus={() => {
                setShow(!show);
              }}
              whileInView={{
                transition: { duration: 0.7, ease: 'linear' },
                opacity: 1,
                x: 0,
              }}
              className=' font-MundoBold w-[78%] self-center text-start text-[80px] sm:text-[160px] font-bold text-white '>
              This isn't
              <br />
              <span className=' font-MundoI'>just a story .</span>
            </motion.p>
          </>
        )}
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex justify-center scroll-smooth'>
        <motion.div className=' font-MundoBold w-[78%] border-t flex justify-end py-20  self-center '>
          <div className='flex justify-end sm:w-[50%] space-y-5'>
            <p className=' font-MundoRegular text-4xl sm:text-5xl  text-white'>
              We love doing what we
              <br />
              were meant to do.
              <br /> <br />
              <span className='border-t w-full inline-block mt-44'></span>
              <span className=' font-MundoRegular text-2xl'>
                We keep working. We keep falling in love with what we have been
                doing. We keep enjoying the process. During this process, we
                keep adding new skills, we keep evolving and we keep taking
                risks. Sometimes, we get stuck. Sometimes, we move ahead. And
                sometimes, we feel that 'Astitva' is helping us. All through
                these years, we have learnt so many things and unlearnt some
                too. This is our story. And honestly, we are enjoying it to the
                fullest.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        id='container'
        className=' w-full h-screen  bg-white font-MundoRegular flex flex-col items-center justify-center scroll-smooth'>
        <h1 className=' text-6xl font-MundoBold'>You'd love to have a look.</h1>
      </motion.div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
