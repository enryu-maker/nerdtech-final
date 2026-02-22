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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileFocus={() => setShow(!show)}
        animate={{ opacity: 1 }}
        className='relative min-h-[50vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-24'
      >
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]' />
        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='font-outfit text-5xl sm:text-8xl font-black text-white leading-tight tracking-tighter'>
              WE LEARN <span className='text-gradient'>FROM THEM.</span> <br />
              WE GROW <span className='text-secondary'>WITH THEM.</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Grid */}
      <section className='py-24 bg-slate-950 relative border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-12'>
            {ClientData.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 10) * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className='glass-card aspect-square flex items-center justify-center p-6 sm:p-10 group'
              >
                <div className='relative w-full h-full flex items-center justify-center'>
                  <div className='absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                  <img
                    src={el.image}
                    alt={el.name || 'Client Logo'}
                    className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className='py-32 bg-slate-950 flex flex-col items-center border-t border-white/5'>
        <div className='text-center mb-16'>
          <h2 className='font-outfit text-4xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter'>
            THANKS FOR <br />
            <span className='text-gradient italic'>BEING WITH US.</span>
          </h2>
        </div>

        <motion.button
          onClick={() => window.location.hash = '#/contact-us'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='h-48 w-48 sm:h-56 sm:w-56 glass-card border-secondary/30 flex items-center justify-center btn-glow group transition-all'
        >
          <div className='text-center p-4 space-y-2'>
            <p className='font-outfit font-bold text-white text-lg sm:text-xl leading-tight group-hover:scale-110 transition-transform'>BECOME A <br /> PARTNER</p>
            <p className='text-primary text-xs font-bold uppercase tracking-widest opacity-60'>Let's grow →</p>
          </div>
        </motion.button>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </>
  );
}
