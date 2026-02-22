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
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-screen w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-20'
      >
        <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h1 className='font-outfit text-6xl sm:text-[120px] font-black text-white leading-none tracking-tighter'>
              THIS ISN'T <br />
              <span className='text-gradient font-MundoI'>JUST A STORY.</span>
            </h1>
            <p className='text-slate-400 font-inter text-xl sm:text-2xl max-w-3xl leading-relaxed'>
              It's the reason for our existence. A path paved with curiosity, risks, and an unwavering love for the craft.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Narrative Section */}
      <section className='py-24 sm:py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div>
              <h2 className='font-outfit text-4xl sm:text-7xl font-black text-white leading-tight tracking-tighter'>
                WE LOVE DOING <br />
                <span className='text-secondary italic'>WHAT WE WERE <br /> MEANT TO DO.</span>
              </h2>
            </div>

            <div className='glass-card p-8 sm:p-12 border-primary/10 space-y-8'>
              <p className='text-slate-300 font-inter text-xl leading-relaxed'>
                We keep working. We keep falling in love with what we do. We keep enjoying the process of evolving, taking risks, and smashing boundaries.
              </p>
              <div className='h-px w-full bg-gradient-to-r from-primary/50 to-transparent' />
              <p className='text-slate-400 font-inter text-lg leading-relaxed italic'>
                "All through these years, we have learnt so many things and unlearnt some too. This is our story, and we are enjoying it to the fullest."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Look Section */}
      <section className='py-48 bg-white flex flex-col items-center justify-center text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='space-y-8'
        >
          <h2 className='font-outfit text-5xl sm:text-8xl font-black text-slate-950 uppercase tracking-tighter'>
            YOU'D LOVE <br />
            <span className='text-primary'>TO HAVE A LOOK.</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='h-2 w-32 bg-slate-950 mx-auto rounded-full'
          />
        </motion.div>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </>
  );
}
