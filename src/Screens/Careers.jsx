import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Footer from '../Components/Footer';
import RolesToggle from '../Components/RolesToggle';
import axios from 'axios';
import CareersForm from '../Components/CareersForm';

export default function Careers() {
  const [show, setShow] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [Roles, setRoles] = React.useState([]);
  const [IsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);

  const toggleRoles = (index) => {
    setIsOpen(
      Roles.map((Role, i) => {
        if (i === index) {
          Role.open = !Role.open;
        } else {
          Role.open = false;
        }

        return Role;
      })
    );
  };

  const getRoles = async (index) => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://nerdtech.pythonanywhere.com/career/jobs/'
      );

      console.log(response.data);
      setRoles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getRoles();
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
        className={`h-[100vh] w-full bg-black flex flex-col ${next ? ' items-end justify-end ' : 'items-center justify-center  '
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
              <motion.button
                onClick={() => {
                  document.getElementById("container").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                whileHover={{ backgroundColor: 'white', x: 5 }}
                className=' border-white text-base border-[1px] px-5 w-[250px] py-5 cursor-pointer flex justify-center items-center uppercase hover:text-black text-white font-MundoI '>
                See Openings
              </motion.button>
            </div>
          </div>
        ) : (
          <>
          <motion.p className=' font-MundoBold w-[78%] self-center text-start text-[80px] sm:text-[160px] font-bold text-white '>
              We love
              <br />
              <span className=' font-MundoI'>people.</span>
            </motion.p>
          </>
        )}
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex justify-center scroll-smooth'>
        <motion.div className=' font-MundoBold w-[78%] border-t flex justify-end py-20  self-center '>
          <div className='flex justify-end sm:w-[50%] space-y-5'>
            <p className=' font-MundoRegular text-4xl sm:text-5xl  text-white'>
              Fortunate are those who do what they love to do. And when it comes
              to advertising, we love to be that place where all of us can be
              fortunate together and create something that we'd be proud of.
              <br /> <br />
              What are you waiting for?
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div id='container' className=' w-full  bg-white font-MundoRegular flex flex-col items-center justify-center scroll-smooth'>
        <div className='Roles w-[78%]  flex flex-wrap mt-[60px]'>
          {Roles.map((Role, index) => (
            <RolesToggle
              Role={Role}
              index={index}
              key={index}
            // setIsopen={setIsOpen}
            // toggleRoles={toggleRoles}
            // IsOpen={IsOpen}
            />
          ))}
        </div>
      </motion.div>
      <CareersForm />
      <motion.div className='flex items-center flex-col justify-center h-screen'>
        <h1 className='font-MundoBold text-[60px] px-10'>
          Work. Play. Enjoy. Live.
        </h1>
        <h1 className=' font-MundoBold text-[170px]'>Together.</h1>
      </motion.div>
      <motion.div className='flex items-center flex-col justify-center h-screen'>
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.85 }}
          className='h-[180px] w-[180px] bg-gray-900 rounded-full  text-white font-semibold hover:text-white text2 '>
          <p className=' font-MundoRegular text-md '>Who We are</p>
        </motion.button>
      </motion.div>
      <Footer />
    </>
  );
}
