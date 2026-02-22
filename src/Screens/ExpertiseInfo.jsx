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
            className='space-y-8'
          >
            <div className='inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest'>
              Expertise
            </div>

            <h1 className='font-outfit text-6xl sm:text-[120px] font-black text-white leading-none tracking-tighter uppercase'>
              {state?.name?.split(' ').map((word, idx) => (
                <span key={idx} className={idx % 2 === 1 ? 'text-gradient' : ''}>{word} </span>
              ))}
            </h1>

            <div className='glass-card p-8 sm:p-12 border-white/5 max-w-4xl'>
              <p className='text-slate-300 font-inter text-xl sm:text-3xl leading-relaxed'>
                {state?.description}
              </p>
            </div>

            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ x: -10 }}
              className='flex items-center gap-4 text-slate-400 hover:text-white transition-colors group'
            >
              <div className='h-px w-12 bg-slate-700 group-hover:w-16 group-hover:bg-primary transition-all' />
              <span className='font-outfit font-bold uppercase tracking-widest'>Back to Expertise</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
