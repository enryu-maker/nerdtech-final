import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { Parser } from 'html-to-react';
import Footer from '../Components/Footer';
import FloatingBtn from '../Components/FloatingBtn';
export default function BlogInfo() {
  const [show, setShow] = React.useState(false);
  const { state } = useLocation();
  const htmlParser = new Parser();
  const navigate = useNavigate();
  return (
    <>
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[70vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-20'
      >
        <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='flex items-center gap-4 text-primary font-bold text-sm uppercase tracking-widest'>
              <span>{state?.category}</span>
              <div className='h-1 w-1 rounded-full bg-slate-700' />
              <span className='text-slate-500'>{state?.date}</span>
            </div>

            <h1 className='font-outfit text-5xl sm:text-7xl font-black text-white leading-tight tracking-tighter'>
              {state?.title}
            </h1>

            <div className='flex items-center gap-6 pt-4'>
              <div className='h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5'>
                <div className='h-full w-full rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center font-bold text-white'>
                  NT
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold font-outfit uppercase tracking-wider text-xs'>Published By</span>
                <span className='text-slate-400 font-inter text-sm'>NerdTech Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <section className='bg-slate-950 px-4'>
        <div className='max-w-6xl mx-auto relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-primary/10'
          >
            <img
              src={state?.image}
              className='w-full h-auto object-cover max-h-[70vh]'
              alt={state?.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-24 bg-slate-950'>
        <div className='w-[90%] sm:w-[80%] max-w-4xl mx-auto'>
          <div className='glass-card p-8 sm:p-16 border-white/5 bg-slate-900/40 relative'>
            {/* Background Accent */}
            <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full' />

            <article className='prose prose-invert prose-lg max-w-none font-inter text-slate-300 leading-relaxed space-y-6'>
              {htmlParser.parse(state?.description)}
            </article>
          </div>

          <div className='mt-20 flex flex-col items-center justify-center text-center space-y-12'>
            <div className='space-y-4'>
              <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white leading-none tracking-tighter'>
                THANKS FOR <span className='text-gradient'>READING.</span>
              </h2>
              <p className='text-slate-500 font-inter text-xl'>We hope you found this content valuable.</p>
            </div>

            <motion.button
              onClick={() => navigate('/contact-us')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity' />
              <div className='relative h-48 w-48 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center gap-2 p-6 transition-all hover:border-primary/50'>
                <span className='font-outfit font-black text-white text-lg uppercase tracking-widest text-center'>Get In Touch</span>
                <div className='h-px w-8 bg-primary' />
              </div>
            </motion.button>
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
