import React from 'react';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { ExpertiseData } from '../data';
import FloatingBtn from '../Components/FloatingBtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import Seo from '../Components/Seo';

export default function Expertise() {
  const [show, setShow] = React.useState(false);
  const [expertData, setExpertData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const getExpertise = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://nerdtech.pythonanywhere.com/expertise/'
      );
      setExpertData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getExpertise();
  }, []);
  return (
    <>
      <Seo
        title="Our Expertise | Tech & Design Solutions"
        description="Discover NerdTech's core competencies in Cloud Computing, AI, Full-Stack Development, and UI/UX Design. We turn complex problems into elegant solutions."
        keywords="cloud computing, artificial intelligence, software design, UI/UX expert, react developers, nerdtech expertise"
      />
      <Header show={show} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative min-h-[50vh] w-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40'
      >
        <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow' />
        <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow' />

        <div className='relative z-10 w-[90%] sm:w-[80%] max-w-7xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h1 className='font-outfit text-5xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter uppercase'>
              OUR <span className='text-gradient'>EXPERTISE.</span>
            </h1>
            <p className='text-slate-400 font-inter text-xl max-w-2xl mx-auto leading-relaxed'>
              We combine deep technical mastery with high-end creative design to build the future of digital ecosystems.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Grid */}
      <section className='py-24 sm:py-32 bg-slate-950 relative border-t border-white/5'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          {loading ? (
            <div className='flex justify-center items-center h-64'>
              <div className='h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin' />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {expertData.map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 6) * 0.1 }}
                  viewport={{ once: true }}
                  className='glass-card p-8 sm:p-10 border-white/5 group hover:border-primary/30 transition-all flex flex-col'
                >
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='h-10 w-1 bg-gradient-to-b from-primary to-secondary rounded-full group-hover:h-12 transition-all duration-300' />
                    <h2 className='font-outfit text-2xl sm:text-3xl font-bold text-white uppercase tracking-tighter'>
                      {el.name}
                    </h2>
                  </div>

                  <div className='flex flex-col space-y-3'>
                    {el.expertise.map((item, idx) => (
                      <motion.div
                        key={idx}
                        onClick={() => {
                          navigate('/expertise/' + idx, {
                            state: item,
                          });
                        }}
                        whileHover={{ x: 10 }}
                        className='flex items-center gap-3 cursor-pointer group/item'
                      >
                        <div className='h-1.5 w-1.5 rounded-full bg-slate-700 group-hover/item:bg-primary transition-colors' />
                        <span className='text-slate-400 font-inter text-lg group-hover/item:text-white transition-colors'>
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
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
