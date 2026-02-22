import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Images } from '../Assets/Images';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { ContactData } from '../data';
export default function Header({ show }) {
  const [menu, setMenu] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className='fixed top-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] max-w-7xl z-50'>
        <div className='glass-nav rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl'>
          <motion.a
            href='#/'
            className='flex items-center space-x-3 group'
            whileHover={{ scale: 1.02 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity' />
              <img
                className='h-10 w-auto relative z-10'
                src={Images.nerdtech}
                alt='logo'
              />
            </div>
            <p className='font-outfit font-bold text-2xl tracking-tight text-white'>
              nerd<span className='text-primary'>tech</span>
            </p>
          </motion.a>

          <div className='hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300'>
            <a href='#/about' className='hover:text-primary transition-colors'>About</a>
            <a href='#/expertise' className='hover:text-primary transition-colors'>Expertise</a>
            <a href='#/clients' className='hover:text-primary transition-colors'>Clients</a>
            <a href='#/blogs' className='hover:text-primary transition-colors'>Insights</a>
          </div>

          <motion.button
            onClick={() => {
              setMenu(!menu);
            }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/10'
          >
            <span className='font-outfit text-sm text-slate-200'>Menu</span>
            <HiOutlineMenuAlt4 className='text-primary text-xl' />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className='fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col pt-32 pb-12 px-6 sm:px-12 overflow-y-auto'
          >
            {/* Background Glows */}
            <div className='absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none' />
            <div className='absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[120px] pointer-events-none' />

            {/* Close Button */}
            <div className='absolute top-6 right-[5%] z-[110]'>
              <motion.button
                onClick={() => setMenu(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors'
              >
                <RxCross1 size={24} />
              </motion.button>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-16'>
              {/* Main Navigation */}
              <nav className='flex flex-col space-y-4 w-full lg:w-2/3'>
                <p className='text-slate-500 font-outfit font-bold uppercase tracking-[0.2em] text-xs mb-4'>Navigation</p>
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Expertise', path: '/expertise' },
                  { name: 'Clients', path: '/clients' },
                  { name: 'Insights', path: '/blogs' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Teams', path: '/teams' },
                  { name: 'Stories', path: '/stories' },
                  { name: 'Contact', path: '/contact-us' },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={`#${item.path}`}
                      onClick={() => setMenu(false)}
                      className='group flex items-center gap-6'
                    >
                      <span className='text-slate-700 font-outfit font-bold text-lg group-hover:text-primary transition-colors'>0{i + 1}</span>
                      <h2 className='text-5xl sm:text-7xl font-outfit font-black text-white uppercase tracking-tighter leading-none group-hover:text-gradient transition-all duration-300'>
                        {item.name}.
                      </h2>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Info */}
              <div className='w-full lg:w-1/3 flex flex-col space-y-12 h-full'>
                <div className='space-y-6'>
                  <p className='text-slate-500 font-outfit font-bold uppercase tracking-[0.2em] text-xs'>Get in touch</p>
                  <div className='space-y-4'>
                    <a href="mailto:contact@nerdtech.in" className='block text-xl sm:text-2xl font-inter text-slate-300 hover:text-white transition-colors underline-offset-8 hover:underline'>
                      contact@nerdtech.in
                    </a>
                    <a href="tel:9405649047" className='block text-xl sm:text-2xl font-inter text-slate-300 hover:text-white transition-colors'>
                      +91 9405649047
                    </a>
                  </div>
                </div>

                <div className='space-y-6'>
                  <p className='text-slate-500 font-outfit font-bold uppercase tracking-[0.2em] text-xs'>Follow us</p>
                  <div className='flex flex-wrap gap-4'>
                    {ContactData.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        whileHover={{ y: -5 }}
                        className='px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-outfit font-bold text-sm tracking-widest uppercase hover:bg-primary/20 hover:border-primary/50 transition-all'
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className='pt-12 border-t border-white/5'>
                  <p className='text-slate-400 font-inter text-sm italic'>
                    "Designing the future of digital ecosystems."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
