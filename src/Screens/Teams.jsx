import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import FloatingBtn from '../Components/FloatingBtn';
import Footer from '../Components/Footer';
import axios from 'axios';

//

export default function Teams() {
  const [show, setShow] = React.useState(false);
  const [next, setNext] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);

  const text = ' We seek \n everything.'.split(' ');
  const [teamData, setTeamData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getTeam = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/team/'
      );
      setTeamData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getTeam();
  }, []);
  return (
    <>
      <Header show={show} />
      <motion.div
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
              We know
              <br />
              <span className=' font-MundoI'>nothing.</span>
            </motion.p>
          </>
        )}
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex justify-center scroll-smooth'>
        <motion.div className=' font-MundoBold w-[78%] border-t flex justify-end py-20  self-center '>
          <div className='flex justify-end sm:w-[50%] space-y-5'>
            <p className=' font-MundoRegular text-2xl sm:text-3xl  text-white'>
              Is it really possible to seek everything?
              <br /> <br />
              Alone, it seems impossible but together it doesn't. We all
              understand the level of expertise we have in our respective fields
              and we keep increasing it. Whatever we learn individually, we
              share with each other. And that's what makes 'Team Nerds' more
              powerful.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className='h-auto w-full  bg-black flex flex-wrap justify-center items-center scroll-smooth'>
        {
          teamData?.map((item, index) => {
            return (
              <motion.div className={` w-[68%]  flex flex-col ${index%2==0?"items-end ":"items-start"} self-center `}>
                <img src={item?.image}
                  className=' w-[18%] object-cover'
                />
                <p className=' font-MundoRegular text-2xl sm:text-3xl  text-white'>
                  {item?.name}
                </p>
                <p className=' font-MundoRegular text-xl sm:text-lg  text-white'>
                  {item?.description}
                </p>
              </motion.div>
            )
          })
        }
      </motion.div>
      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
