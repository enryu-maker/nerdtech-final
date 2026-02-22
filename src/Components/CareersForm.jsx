import React from 'react';
import { motion } from 'framer-motion';
import { IoDocumentAttach } from 'react-icons/io5';

export default function CareersForm() {
  const [data, setData] = React.useState({});
  return (
    <>
      <section id='careers-form' className='py-24 bg-slate-950 px-4'>
        <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='glass-card p-8 sm:p-16 border-white/5 relative bg-slate-900/40'
          >
            <div className='absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full' />

            <div className='space-y-12'>
              <div className='space-y-4 text-center sm:text-left'>
                <h2 className='font-outfit text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter'>
                  APPLY <span className='text-gradient'>NOW.</span>
                </h2>
                <p className='text-slate-400 font-inter text-lg max-w-2xl'>
                  Fill out the form below and attach your resume. We'll review your application and get back to you if there's a match.
                </p>
              </div>

              <form className='space-y-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Resume / CV*</label>
                    <label
                      htmlFor='cv-upload'
                      className='flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-300 cursor-pointer hover:border-primary/50 transition-all font-inter'
                    >
                      <span>Attach your resume</span>
                      <IoDocumentAttach size={24} className='text-primary' />
                    </label>
                    <input type='file' id='cv-upload' className='hidden' />
                    <p className='text-slate-600 font-inter text-[10px] uppercase tracking-widest px-2'>PDF, DOC, DOCX up to 10MB</p>
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Applied For*</label>
                    <input
                      type='text'
                      placeholder='Project Manager / Developer / etc.'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Full Name*</label>
                    <input
                      type='text'
                      placeholder='Your legal name'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Phone*</label>
                    <input
                      type='text'
                      placeholder='Contact number'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Email Address*</label>
                    <input
                      type='email'
                      placeholder='Professional email'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Current Company*</label>
                    <input
                      type='text'
                      placeholder='Where do you work now?'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>LinkedIn URL*</label>
                    <input
                      type='text'
                      placeholder='linkedin.com/in/username'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Portfolio URL*</label>
                    <input
                      type='text'
                      placeholder='github.com / behance.net / personal'
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-slate-500 font-bold text-xs uppercase tracking-widest px-2'>Additional Information</label>
                  <textarea
                    placeholder='Cover letter or any other details you want to share.'
                    rows='4'
                    className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter'
                  />
                </div>

                <div className='flex justify-center sm:justify-start'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-12 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-outfit font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all'
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
