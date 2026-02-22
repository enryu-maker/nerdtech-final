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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[70vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-20'
      >
        <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h1 className='font-outfit text-6xl sm:text-9xl font-black text-white leading-none tracking-tighter'>
              WE SEEK <br />
              <span className='text-gradient italic'>EVERYTHING.</span>
            </h1>
            <p className='text-slate-400 font-inter text-xl max-w-2xl leading-relaxed'>
              Alone, it seems impossible. Together, we are limitless. We combine our expertise to push the boundaries of technology.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Grid */}
      <section className='py-24 sm:py-32 bg-slate-950 relative border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='flex flex-col mb-16'>
            <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white mb-4 uppercase tracking-tighter'>
              THE <span className='text-gradient'>NERDS</span>
            </h2>
            <p className='text-slate-400 font-inter text-lg max-w-2xl'>
              The minds behind the magic. A diverse group of specialists driven by curiosity and a passion for excellence.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamData?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className='glass-card group overflow-hidden flex flex-col'
              >
                <div className='relative h-72 overflow-hidden bg-slate-900'>
                  {item?.image && (
                    <img
                      src={item?.image}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      alt={item?.name}
                    />
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60' />
                </div>

                <div className='p-8 space-y-4'>
                  <h3 className='font-outfit text-2xl font-bold text-white group-hover:text-primary transition-colors'>
                    {item?.name}
                  </h3>
                  <p className='text-slate-400 font-inter text-sm leading-relaxed'>
                    {item?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </>
  );
}
