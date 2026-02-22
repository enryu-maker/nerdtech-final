import { motion } from "framer-motion";
import React from "react";
import { Images } from "../Assets/Images";
import { AboutData, ContactData } from "../data";
export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 overflow-hidden">
      <div className='w-[90%] sm:w-[80%] max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24"
        >
          <div className='max-w-md space-y-8'>
            <div className='flex items-center space-x-3'>
              <img src={Images.nerdtech} alt='logo' className='h-10 w-auto' />
              <p className='font-outfit font-bold text-3xl tracking-tight text-white'>nerd<span className='text-primary'>tech</span></p>
            </div>
            <p className='text-slate-400 font-inter text-lg leading-relaxed'>
              We are a collective of designers and developers pushing the boundaries of what's possible in the digital realm.
            </p>
            <div className='flex space-x-4'>
              {ContactData.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -3, color: 'var(--primary)' }}
                  className="bg-white/5 p-3 rounded-xl border border-white/10 text-slate-400 transition-colors"
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-12'>
            <div className='space-y-6'>
              <h4 className='font-outfit font-bold text-white uppercase tracking-widest text-sm'>Company</h4>
              <nav className='flex flex-col space-y-4'>
                <a href='#/about' className='text-slate-400 hover:text-primary transition-colors font-inter'>About Us</a>
                <a href='#/expertise' className='text-slate-400 hover:text-primary transition-colors font-inter'>Expertise</a>
                <a href='#/clients' className='text-slate-400 hover:text-primary transition-colors font-inter'>Clients</a>
                <a href='#/careers' className='text-slate-400 hover:text-primary transition-colors font-inter'>Careers</a>
              </nav>
            </div>
            <div className='space-y-6'>
              <h4 className='font-outfit font-bold text-white uppercase tracking-widest text-sm'>Connect</h4>
              <nav className='flex flex-col space-y-4'>
                <a href="mailto:contact@nerdtech.in" className='text-slate-400 hover:text-primary transition-colors font-inter'>Email Us</a>
                <a href="tel:9405649047" className='text-slate-400 hover:text-primary transition-colors font-inter'>+91 9405649047</a>
                <a href="https://g.page/r/CVVoVIFfbppEEBM/review" target="_blank" rel="noreferrer" className='text-slate-400 hover:text-primary transition-colors font-inter'>Google Map</a>
              </nav>
            </div>
          </div>
        </motion.div>

        <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-inter text-sm'>
          <p>© 2026 NerdTech Softwares LLC. All rights reserved.</p>
          <div className='flex space-x-8'>
            <a href='/' className='hover:text-primary transition-colors'>Privacy Policy</a>
            <a href='/' className='hover:text-primary transition-colors'>Terms of Service</a>
            <a href='/' className='hover:text-primary transition-colors'>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
