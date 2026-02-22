import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Footer from '../Components/Footer';
import RolesToggle from '../Components/RolesToggle';
import axios from 'axios';
import CareersForm from '../Components/CareersForm';
import FloatingBtn from '../Components/FloatingBtn';
import Seo from '../Components/Seo';

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
      <Seo
        title="Careers | Join the Pack"
        description="Build the future of digital ecosystems with NerdTech. Explore open roles in design, development, and digital marketing."
        keywords="careers, job openings, software engineer jobs, designer jobs, digital agency careers, join nerdtech"
      />
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[80vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40'
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
            <div className='inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-widest'>
              Careers
            </div>

            <h1 className='font-outfit text-5xl sm:text-[100px] lg:text-[140px] font-black text-white leading-none tracking-tighter uppercase'>
              WE LOVE <br />
              <span className='text-gradient italic'>PEOPLE.</span>
            </h1>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-8'>
              <p className='text-slate-400 font-inter text-xl sm:text-2xl max-w-2xl leading-relaxed'>
                We're looking for individuals who don't just work, but who create, innovate, and obsess over excellence. Join the nerdpack.
              </p>

              <motion.button
                onClick={() => {
                  document.getElementById('openings').scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-white text-black font-outfit font-black uppercase tracking-widest text-sm rounded-full'
              >
                See Openings
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <section className='py-24 bg-slate-950 border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto flex justify-end'>
          <div className='max-w-3xl space-y-12'>
            <p className='font-outfit text-3xl sm:text-5xl font-bold text-white leading-tight'>
              Fortunate are those who do <span className='text-secondary'>what they love</span>. We want to be the place where we can all be fortunate together.
            </p>
            <div className='h-px w-20 bg-primary' />
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id='openings' className='py-24 bg-slate-950'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='space-y-12'>
            <div className='flex flex-col space-y-4'>
              <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter'>
                CURRENT <span className='text-gradient'>OPENINGS.</span>
              </h2>
              <p className='text-slate-500 font-inter uppercase tracking-widest text-sm font-bold'>
                Join our growing team of visionaries
              </p>
            </div>

            <div className='divide-y divide-white/5 border-t border-b border-white/5'>
              {loading ? (
                <div className='py-12 space-y-6'>
                  {[1, 2, 3].map(n => <div key={n} className='h-24 bg-white/5 rounded-2xl animate-pulse' />)}
                </div>
              ) : Roles.length > 0 ? (
                Roles.map((Role, index) => (
                  <RolesToggle
                    Role={Role}
                    index={index}
                    key={index}
                  />
                ))
              ) : (
                <div className='py-20 text-center'>
                  <p className='text-slate-500 font-inter text-xl italic'>Currently no open roles. Follow us for updates.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <CareersForm />

      {/* Bottom CTA */}
      <section className='py-32 bg-slate-950 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl mx-auto text-center space-y-8'>
          <h2 className='font-outfit text-5xl sm:text-8xl font-black text-white leading-none tracking-tighter'>
            WORK. PLAY. <span className='text-gradient'>TOGETHER.</span>
          </h2>
          <p className='text-slate-400 font-inter text-xl max-w-2xl mx-auto leading-relaxed'>
            We believe that the best work happens when everyone is enjoying the process. Join a culture that celebrates life.
          </p>
        </div>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
