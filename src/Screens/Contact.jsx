import React from 'react';
import { IoDocumentAttach } from 'react-icons/io5';
import Header from '../Components/Header';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import Footer from '../Components/Footer';
import { Images } from '../Assets/Images';
import FloatingBtn from '../Components/FloatingBtn';
import Seo from '../Components/Seo';
export default function Contact() {
  const [show, setShow] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [Message, setMessage] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [City, setCity] = React.useState("");
  const [Projects, setProjects] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [Sucess, setSucess] = React.useState(false);
  async function sendEmail() {
    setLoading(true);
    const data = {
      fullname: Name,
      phone: Phone,
      project: Projects,
      city: City,
      email: Email,
      message: Message,
    };
    await fetch(
      "https://formspree.io/f/xbjvrwqp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data);
        setSucess(true);
        setMsg("Thanks, We will contact you soon!!!:-)");
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);

        setSucess(false);
        setMsg("Something went wrong");
        setLoading(false);
      });
  }

  React.useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 2500);
  }, []);
  const text = "There's so much to be done.".split(' ');
  return (
    <>
      <Seo
        title="Contact Us | Start a Project"
        description="Ready to build something extraordinary? Contact NerdTech Softwares LLC for custom software development, design, and branding inquiries."
        keywords="contact digital agency, hire software developers, web design inquiry, branding consultation, nerdtech contact"
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
              Contact Us
            </div>

            <h1 className='font-outfit text-5xl sm:text-[120px] font-black text-white leading-none tracking-tighter uppercase'>
              COME, SAY <br />
              <span className='text-gradient italic'>HELLO.</span>
            </h1>

            <div className='max-w-3xl'>
              <p className='text-slate-400 font-inter text-xl sm:text-2xl leading-relaxed'>
                Are you the best brand in the world? We feel the same when someone asks if we're the best agency. Let's talk and build something that proves it.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className='py-24 bg-slate-950 px-4'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'>

            {/* Info Card */}
            <div className='space-y-12 order-2 lg:order-1'>
              <div className='space-y-6'>
                <h3 className='font-outfit text-3xl font-bold text-white'>Let's define the <span className='text-primary'>future</span>.</h3>
                <p className='text-slate-400 font-inter text-lg'>
                  Whether you have a specific project in mind or just want to explore possibilities, our team of experts is ready to help you navigate the digital landscape.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='glass-card p-8 border-white/5 space-y-4'>
                  <p className='text-primary font-bold font-outfit uppercase tracking-widest text-xs'>Office</p>
                  <p className='text-white font-inter text-lg'>Nashik, India <br /></p>
                </div>
                <div className='glass-card p-8 border-white/5 space-y-4'>
                  <p className='text-secondary font-bold font-outfit uppercase tracking-widest text-xs'>Email</p>
                  <p className='text-white font-inter text-lg'>contact@nerdtech.in</p>
                </div>
              </div>

              {msg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-2xl border ${Sucess ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'} font-outfit font-bold`}
                >
                  {msg}
                </motion.div>
              )}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='glass-card p-8 sm:p-12 border-white/5 order-1 lg:order-2 relative'
            >
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full' />

              <div className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Name*</label>
                    <input
                      type='text'
                      placeholder='Full Name'
                      onChange={(e) => setName(e.target.value)}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Email*</label>
                    <input
                      type='email'
                      placeholder='Email Address'
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Phone*</label>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      onChange={(e) => setPhone(e.target.value)}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>City*</label>
                    <input
                      type='text'
                      placeholder='Your City'
                      onChange={(e) => setCity(e.target.value)}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Project*</label>
                  <input
                    type='text'
                    placeholder='What are you building?'
                    onChange={(e) => setProjects(e.target.value)}
                    className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Message*</label>
                  <textarea
                    placeholder='Tell us more about your goals'
                    rows='4'
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                  />
                </div>

                <motion.button
                  onClick={sendEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className='w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-outfit font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all disabled:opacity-50'
                >
                  {loading ? 'Sending...' : Sucess ? 'Message Sent' : 'Send Message'}
                </motion.button>
              </div>
            </motion.div>
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
