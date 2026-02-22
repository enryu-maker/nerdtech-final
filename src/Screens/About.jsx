import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Footer from '../Components/Footer';
import FloatingBtn from '../Components/FloatingBtn';
import Seo from '../Components/Seo';
export default function About() {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [next, setNext] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);
  const text = 'We set our \n Standards.'.split(' ');
  return (
    <>
      <Seo
        title="About Us | Our Story & Vision"
        description="Learn about NerdTech's journey to becoming a leader in digital transformation. We are a collective of designers and developers pushing the boundaries of what's possible."
        keywords="about nerdtech, company vision, digital agency history, nerdtech team, innovation agency"
      />
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-screen w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40'
      >
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h1 className='font-outfit text-5xl sm:text-[100px] lg:text-[120px] font-black text-white leading-none tracking-tighter uppercase'>
              WE ARE <br />
              <span className='text-gradient font-MundoI'>nerdtech.</span>
            </h1>
            <p className='text-slate-400 font-inter text-xl sm:text-2xl max-w-2xl leading-relaxed'>
              A collective of visionaries, designers, and engineers dedicated to redefining the digital landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Standards Section */}
      <section className='py-24 sm:py-32 bg-slate-950 border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            <div className='sticky top-32'>
              <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-8'>
                WE SET OUR <br />
                <span className='text-gradient'>STANDARDS.</span>
              </h2>
              <p className='text-primary font-bold text-xl font-outfit uppercase tracking-widest'>
                Your next best branding partner.
              </p>
            </div>

            <div className='space-y-12'>
              <div className='glass-card p-8 sm:p-12 border-primary/10'>
                <p className='text-slate-300 font-inter text-lg sm:text-xl leading-relaxed'>
                  Everyone has their own definition of standards. For us, it's about a personal benchmark every time we crack an idea, execute strategies, or build. We simply do not accept anything less than excellence.
                </p>
              </div>
              <div className='glass-card p-8 sm:p-12 border-secondary/10 bg-slate-900/40'>
                <p className='text-slate-400 font-inter text-xl leading-relaxed italic'>
                  "Simple yet significant."
                </p>
                <p className='mt-6 text-slate-300 font-inter text-lg leading-relaxed'>
                  We standardize the process before starting. We ask the hard questions to bring the right results, pushing us to become one of the premier branding companies in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equation Section */}
      <section className='py-24 bg-white overflow-hidden relative'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto flex flex-col items-center gap-4'>
          {['Strategy', 'Design', 'Experience'].map((item, i) => (
            <React.Fragment key={item}>
              <motion.span
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className='font-outfit text-5xl sm:text-9xl font-black text-slate-950 uppercase tracking-tighter hover:text-primary transition-colors cursor-default'
              >
                {item}
              </motion.span>
              {i < 2 && <span className='text-4xl text-slate-300'>+</span>}
            </React.Fragment>
          ))}
          <span className='text-4xl text-slate-300'>=</span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className='font-outfit text-6xl sm:text-[140px] font-black text-primary uppercase tracking-tighter'
          >
            BRAND
          </motion.span>
        </div>
      </section>

      {/* Execution Section */}
      <section className='py-24 sm:py-32 bg-slate-950'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='font-outfit text-5xl sm:text-7xl font-black text-white leading-tight tracking-tighter'>
              IDEAS ARE EVERYWHERE. <br />
              <span className='text-secondary italic'>EXECUTION IS RARE.</span>
            </h2>
          </div>
          <div className='glass-card p-8 sm:p-12 border-white/5'>
            <p className='text-slate-300 font-inter text-xl leading-relaxed'>
              We believe only the ideas that matter get executed. We generate these ideas through organic conversations, forgetting everything else until the "Nerd" spark happens.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className='py-24 bg-slate-900 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--border-glass)_1px,_transparent_1px)] bg-[length:40px_40px] opacity-20' />
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto relative z-10'>
          <div className='flex flex-col md:flex-row gap-16'>
            <div className='md:w-1/3'>
              <div className='bg-primary/20 text-primary px-6 py-2 rounded-full border border-primary/20 inline-block font-bold text-sm uppercase tracking-widest mb-8'>
                ESTD. 2020
              </div>
              <h3 className='font-outfit text-4xl font-bold text-white mb-6'>A journey that started with a laptop and a dream.</h3>
            </div>
            <div className='md:w-2/3 space-y-8'>
              <p className='text-slate-300 font-inter text-xl leading-relaxed'>
                Our story began in a small room with one goal: to become a global software powerhouse. 4+ years later, we are 'nerds' who take pride in every line of code and every pixel designed.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {['We work together', 'We argue endlessly', 'We smash boundaries', 'We grow together'].map((val) => (
                  <div key={val} className='flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10'>
                    <div className='h-2 w-2 rounded-full bg-primary' />
                    <span className='text-slate-200 font-medium'>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className='bg-primary py-12'>
        <Marquee speed={120} gradient={false}>
          <p className='font-outfit text-6xl sm:text-9xl font-black text-white/20 uppercase tracking-tighter mx-8'>
            LIMITLESS <span className='text-white'>INNOVATIVE</span> NERDTECH <span className='italic font-light'>X</span>
          </p>
        </Marquee>
      </div>

      {/* Final CTA */}
      <section className='py-24 sm:py-32 bg-slate-950 flex flex-col items-center'>
        <div className='w-[90%] sm:w-[80%] max-w-4xl text-center mb-16'>
          <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white mb-8'>FOR 4+ YEARS, WE HAVE BUILT EXPERIENCES.</h2>
          <p className='text-slate-400 font-inter text-xl'>For our clients and their customers. Digital experiences that resonate.</p>
        </div>

        <motion.button
          onClick={() => window.location.hash = '#/contact-us'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='h-48 w-48 sm:h-56 sm:w-56 glass-card border-primary/30 flex items-center justify-center btn-glow group transition-all'
        >
          <p className='font-outfit font-bold text-white text-xl sm:text-2xl text-center group-hover:scale-110 transition-transform p-4 leading-tight'>START A <br /> PROJECT</p>
        </motion.button>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </>
  );
}
