import React from 'react';
import Header from '../Components/Header';
import { motion, useDragControls } from 'framer-motion';
import Footer from '../Components/Footer';
import { Carousel, IconButton } from '@material-tailwind/react';
import ReactPlayer from 'react-player';
import BlogCard from '../Components/BlogCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Images } from '../Assets/Images';
import FloatingBtn from '../Components/FloatingBtn';
import Seo from '../Components/Seo';

export default function Home() {
  const text =
    'We’re a designing, developing, branding & digital marketing agency.'.split(
      ' '
    );
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [push, setPush] = React.useState(false);

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
      <Seo
        title="Design, Development & Branding Agency"
        description="NerdTech Softwares LLC is a premier digital agency specializing in cinematic design, custom software development, and strategic branding ecosystems."
        keywords="digital agency, software development, web design, branding, marketing, mobile apps, custom software, nerdtech"
      />
      <Header show={show} />
      {/* Starting home section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-screen w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40'>
        {/* Background Decorative Elements */}
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px]' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-6xl text-center flex flex-col items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm'
          >
            <span className='text-primary text-sm font-semibold tracking-wider uppercase'>Innovation Meets Excellence</span>
          </motion.div>

          <h1 className='font-outfit text-4xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-8'>
            <span className='inline-block'>We’re a</span>{' '}
            <span className='text-gradient inline-block'>Designing, Developing</span>{' '}
            <span className='inline-block'>& Digital Marketing Agency.</span>
          </h1>

          <div className='w-full flex flex-col items-center mt-8'>
            <motion.button
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPush(!push)}
              className='relative group'
            >
              <div className='absolute inset-0 bg-primary/40 rounded-full blur-2xl group-hover:bg-primary/60 transition-all duration-300 opacity-0 group-hover:opacity-100' />
              <div className='h-32 w-32 sm:h-40 sm:w-40 bg-slate-900 border border-white/20 rounded-full flex items-center justify-center relative z-10 btn-glow'>
                <p className='font-outfit font-bold text-white text-xl sm:text-2xl'>Push?</p>
              </div>
            </motion.button>

            {push && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-12 glass-card p-8 sm:p-12 max-w-2xl text-left border-primary/20 bg-slate-900/40'
              >
                <p className='text-primary font-outfit text-2xl sm:text-3xl font-bold mb-4'>
                  We generate momentum.
                </p>
                <div className='text-slate-300 font-inter text-lg space-y-4 leading-relaxed'>
                  <p>With the right push, we maintain it. With the wrong push, we may lose it.</p>
                  <p>And we believe, that good results come from right actions and right actions come from the right push. Always.</p>
                  <div className='flex gap-4 mt-8'>
                    <a href='#/contact-us' className='text-primary hover:text-white transition-colors underline decoration-2 underline-offset-4'>Give us a push →</a>
                    <a href='#/careers' className='text-secondary hover:text-white transition-colors underline decoration-2 underline-offset-4'>Join the team →</a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        id='container'
        className='sm:h-[100vh] my-5 sm:py-0 w-full bg-black flex flex-col justify-evenly items-center scroll-smooth'>
        <ReactPlayer
          width='100%'
          height='100%'
          playing={true}
          loop={true}
          url='https://www.litmusbranding.com/upload_data/homepage/video/6363542acc33b_IGNITE_IDEAS-new.mp4'
        />
      </motion.div>
      <section id='expertise' className='py-24 sm:py-32 bg-slate-950 relative overflow-hidden'>
        <div className='absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]' />

        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto relative z-10'>
          <div className='flex flex-col mb-16'>
            <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white mb-4 uppercase tracking-tighter'>
              Our <span className='text-gradient'>Expertise</span>
            </h2>
            <p className='text-slate-400 font-inter text-lg max-w-2xl'>
              We combine artistic vision with technical precision to deliver digital solutions that redefine industry standards.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
            <motion.div
              whileHover={{ y: -5 }}
              className='md:col-span-8 glass-card p-8 sm:p-12 border-primary/10 group overflow-hidden relative'
            >
              <div className='absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity'>
                <svg className='w-32 h-32' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5' /></svg>
              </div>
              <div className='flex flex-col h-full justify-between relative z-10'>
                <div>
                  <h3 className='font-outfit text-3xl sm:text-4xl font-bold text-white mb-4'>Brand Strategy & Identity</h3>
                  <p className='text-slate-400 font-inter text-lg leading-relaxed max-w-xl'>
                    Your brand is a story waiting to be told. We craft identities that resonate, from naming and logos to comprehensive strategic positioning that commands attention.
                  </p>
                </div>
                <div className='mt-8 flex gap-2 flex-wrap'>
                  {['Positioning', 'Vision', 'Voice', 'Guidelines'].map(tag => (
                    <span key={tag} className='px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-400 border border-white/10 uppercase tracking-widest'>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className='md:col-span-4 glass-card p-8 border-secondary/10 group'
            >
              <h3 className='font-outfit text-2xl font-bold text-white mb-4'>Technical Architecture</h3>
              <p className='text-slate-400 font-inter leading-relaxed'>
                Building robust API ecosystems and scalable infrastructures that power the modern web with 99.9% reliability.
              </p>
              <div onClick={() => navigate('/expertise')} className='mt-6 text-primary cursor-pointer text-sm font-bold uppercase tracking-widest'>Explore Tech →</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className='md:col-span-6 glass-card p-8 border-accent/10 group'
            >
              <h3 className='font-outfit text-2xl font-bold text-white mb-4'>Product Development</h3>
              <p className='text-slate-400 font-inter leading-relaxed'>
                Crafting intuitive web and mobile experiences that users love. We focus on performance, accessibility, and delight across all platforms.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className='md:col-span-6 glass-card p-8 border-primary/10 group'
            >
              <h3 className='font-outfit text-2xl font-bold text-white mb-4'>Digital Growth</h3>
              <p className='text-slate-400 font-inter leading-relaxed'>
                Data-driven marketing strategies that amplify your reach and convert audiences into loyal communities through precision targeting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact section */}
      {/* CTA Section */}
      <section className='relative min-h-screen bg-slate-950 flex flex-col justify-center items-center py-20'>
        <div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px]' />

        <div className='relative z-10 text-center flex flex-col items-center gap-12 px-6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h2 className='font-outfit text-6xl sm:text-9xl font-black text-white leading-none tracking-tighter'>
              READY? <br />
              <span className='text-gradient italic'>SO ARE WE.</span>
            </h2>
          </motion.div>

          <motion.button
            onClick={() => navigate('/contact-us')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='h-48 w-48 sm:h-56 sm:w-56 glass-card border-primary/30 flex items-center justify-center btn-glow group transition-all'
          >
            <p className='font-outfit font-bold text-white text-xl sm:text-2xl text-center group-hover:scale-110 transition-transform p-4 leading-tight'>START A <br /> PROJECT</p>
          </motion.button>
        </div>
      </section>

      {/* Blogs Section */}
      <section className='min-h-screen bg-slate-950 py-24 sm:py-32'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='flex justify-between items-end mb-16'>
            <div className='space-y-4'>
              <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter'>
                Latest <span className='text-gradient'>Insights</span>
              </h2>
              <p className='text-slate-400 font-inter text-lg'>Exploring the intersection of tech, design, and business.</p>
            </div>
            <motion.a
              href='#/blogs'
              whileHover={{ x: 5 }}
              className='text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 border-b-2 border-primary/20 pb-1'
            >
              All Articles →
            </motion.a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data.slice(0, 3)?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className='flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />

    </>
  );
}
