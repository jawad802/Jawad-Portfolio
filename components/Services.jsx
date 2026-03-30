import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-300'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>My Services</h2>
      <motion.p  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }} className=' max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'>
           Frontend Development (HTML, CSS, JavaScript, React, Next.js),Responsive & Mobile-Friendly Website Design, Figma to HTML / React Conversion, Full-Stack Web Development (MERN Stack),  Backend Development (Node.js, Express, MongoDB),  API Development & Integration, WordPress Website Development , WordPress Theme Customization & Elementor Design , E-commerce Website Development ,Website Optimization & Performance Improvement, Bug Fixing, Maintenance & Support. 
      </motion.p>
      <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
        hidden: {},
        visible: {
        transition: {
        staggerChildren: 0.2
      }
    }
  }} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 '>
        {serviceData.map(({icon,title,description,link},index)=>(
            <motion.div key={index}    
        variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }} className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-pink-100 dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
                <Image src={icon} alt='image' className='w-20'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>{title}</h3>
                <p className='text-sm text-gray-400 dark:text-gray-400 hover:text-gray-200 leading-5 '>{description}</p>
            </motion.div>
        )

        )}

      </motion.div>
    </div>
  
  )
}

export default Services
