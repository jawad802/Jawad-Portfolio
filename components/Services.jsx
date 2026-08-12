import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-300'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>My Services</h2>

      {/* Cleaned up subtitle paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='max-w-2xl mx-auto mt-4 mb-12 font-Ovo text-center text-slate-300 leading-relaxed'
      >
        I offer comprehensive web development services ranging from responsive frontend interfaces to scalable backend APIs, WordPress customization, and Figma design conversions.
      </motion.p>

      {/* Grid of Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="border border-slate-700/60 rounded-xl p-6 bg-slate-900/40 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 flex flex-col justify-between h-full group"
          >
            <div>
              {/* Icon Wrapper with subtle rounded frame */}
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                <Image src={icon} alt={title} className='w-8 h-8 object-contain' />
              </div>

              <h3 className='text-xl font-semibold mb-3 text-white font-Ovo'>{title}</h3>
              <p className='text-sm text-slate-300 leading-relaxed font-Ovo'>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;