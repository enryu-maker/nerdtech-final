import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { IoChevronDownSharp } from 'react-icons/io5';
import FloatingBtn from '../Components/FloatingBtn';
import Footer from '../Components/Footer';
import axios from 'axios';
import Seo from '../Components/Seo';

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

export default function Projects() {
  const [show, setShow] = React.useState(false);
  const [Open, setOpen] = React.useState(false);
  const [ProjectsData, setProjectsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getProjects = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/projects/'
      );
      setProjectsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <Seo
        title="Our Projects"
        description="Explore NerdTech's portfolio of innovative digital projects, from custom e-commerce platforms to high-performance mobile applications."
        keywords="software projects, web development portfolio, mobile app showcase, nerdtech projects, digital solutions"
      />
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[70vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40'
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
              Featured Work
            </div>

            <h1 className='font-outfit text-5xl sm:text-[100px] lg:text-[140px] font-black text-white leading-none tracking-tighter uppercase'>
              OUR <br />
              <span className='text-gradient italic'>IMPACT.</span>
            </h1>

            <div className='max-w-3xl'>
              <p className='text-slate-400 font-inter text-xl sm:text-2xl leading-relaxed'>
                We build digital ecosystems that don't just exist—they dominate. Explore our latest collaborations with world-class brands.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <section className='py-24 bg-slate-950 px-4 sm:px-12'>
        <div className='max-w-7xl mx-auto space-y-32'>
          {loading ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {[1, 2, 3, 4].map(n => (
                <div key={n} className='h-[400px] bg-white/5 rounded-3xl animate-pulse' />
              ))}
            </div>
          ) : ProjectsData?.length > 0 ? (
            ProjectsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className='w-full lg:w-3/5 group relative'>
                  <div className='absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900'>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={item?.image}
                      alt={item?.name}
                      className='w-full h-auto object-cover min-h-[300px] lg:min-h-[500px]'
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className='w-full lg:w-2/5 space-y-8'>
                  <div className='space-y-4'>
                    <p className='text-primary font-bold font-outfit uppercase tracking-[0.3em] text-xs'>
                      {item?.location || 'Digital Ecosystem'}
                    </p>
                    <h2 className='text-4xl sm:text-5xl font-outfit font-black text-white uppercase tracking-tighter leading-none'>
                      {item?.name}
                    </h2>
                  </div>

                  <div className='h-px w-20 bg-gradient-to-r from-primary to-transparent' />

                  <p className='text-slate-400 font-inter text-lg leading-relaxed'>
                    {item?.descrption}
                  </p>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className='flex items-center gap-4 text-white font-outfit font-bold uppercase tracking-widest text-sm group'
                  >
                    View Project
                    <span className='h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all'>
                      →
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className='py-20 text-center'>
              <p className='text-slate-500 font-inter text-xl italic'>Exploring new horizons... Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className='py-32 bg-slate-950 relative overflow-hidden border-t border-white/5'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[120px] rounded-full' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl mx-auto text-center space-y-12'>
          <h2 className='font-outfit text-5xl sm:text-8xl font-black text-white leading-none tracking-tighter'>
            YOUR PROJECT <br /> <span className='text-gradient'>IS NEXT.</span>
          </h2>
          <p className='text-slate-400 font-inter text-xl max-w-2xl mx-auto leading-relaxed'>
            We don't just build websites. We build legacies. Ready to start yours?
          </p>

          <motion.a
            href='#/contact-us'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block px-12 py-5 bg-white text-black font-outfit font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-white/10'
          >
            Start a Collaboration
          </motion.a>
        </div>
      </section>

      <div className='flex items-center justify-end z-50 p-10 fixed bottom-0 right-0'>
        <FloatingBtn />
      </div>
      <Footer />
    </>
  );
}
