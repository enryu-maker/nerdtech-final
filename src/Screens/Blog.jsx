import { motion } from 'framer-motion';
import React from 'react';

import Header from '../Components/Header';
import BlogCard from '../Components/BlogCard';
import axios from 'axios';
import Footer from '../Components/Footer';
import FloatingBtn from '../Components/FloatingBtn';
export default function Blog() {
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getBlogs = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/blog/blogposts/'
      );
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[50vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-20'
      >
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] pt-10 max-w-7xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h1 className='font-outfit text-6xl sm:text-9xl font-black text-white leading-none tracking-tighter uppercase'>
              INSIGHTS <br />
              <span className='text-gradient italic'>& IDEAS.</span>
            </h1>
            <p className='text-slate-400 font-inter text-xl max-w-2xl mx-auto leading-relaxed'>
              Exploring the intersection of technology, design, and business. Sharing our thoughts on the future of digital.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className='bg-slate-950 pt-10 pb-5 border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6'>
          <div className='bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 flex items-center w-full sm:w-[300px] group focus-within:border-primary/50 transition-colors'>
            <input
              className='bg-transparent border-none focus:outline-none font-inter !text-white placeholder:text-slate-500 w-full'
              placeholder='Search blogs...'
            />
            <svg className='h-5 w-5 text-slate-500 group-focus-within:text-primary transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className='py-20 bg-slate-950 min-h-[60vh]'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          {loading ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[1, 2, 3].map((n) => (
                <div key={n} className='glass-card aspect-[4/5] animate-pulse bg-slate-900/50' />
              ))}
            </div>
          ) : data?.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard item={item} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <p className='text-slate-500 font-inter text-xl'>No blogs found.</p>
            </div>
          )}
        </div>
      </section>

      <div className=' flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
