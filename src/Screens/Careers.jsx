import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Footer from '../Components/Footer';

export default function Careers() {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [next, setNext] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);

  const text = ' Who love what \n they do.'.split(' ');
  return (
    <>
      <Header show={show} />
      <motion.div
        initial={{ opacity: 0 }}
        whileFocus={() => {
          setShow(!show);
        }}
        whileInView={{
          // scale: [.75, .95, 1],
          // rotate: [-20, 20, 0],
          transition: { duration: 0.7, ease: 'linear' },
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.2, // Animation duration
          },
        }}
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
            <div className='flex md:justify-end items-center justify-center mb-3 '>
              <motion.a
                whileHover={{ backgroundColor: 'white', x: 5, opacity: 0.85 }}
                className=' border-white text-md border-[1px] px-5 w-[250px] py-5 cursor-pointer flex justify-center items-center uppercase hover:text-black text-white MundoRegular mt-5'>
                See Openings
              </motion.a>
            </div>
          </div>
        ) : (
          <>
            <motion.p className=' font-MundoBold w-[78%] self-center text-start text-[160px] font-bold text-white '>
              We love
              <br />
              <span className=' font-MundoI'>people.</span>
            </motion.p>
          </>
        )}
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex justify-center scroll-smooth'>
        <motion.div className=' font-MundoBold w-[78%] border-t flex justify-end py-20  self-center '>
          <div className='flex justify-end w-[50%] space-y-5'>
            <p className=' font-MundoRegular font-extralight text-5xl  text-white'>
              Fortunate are those who do what they love to do. And when it comes
              to advertising, we love to be that place where all of us can be
              fortunate together and create something that we'd be proud of.
              <br /> <br />
              What are you waiting for?
            </p>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}
