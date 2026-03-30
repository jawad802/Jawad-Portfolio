import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import image1 from '../assets/screenshot1.png';
import ecommerce from '../assets/ecommerce frontend.png';
import design from '../assets/screenshot.png'
import { motion } from "motion/react"
const Work = () => {
  return (
    <div  id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-300">what I Build</h4>
      <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">My Projects</h2>
     <motion.div   className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-10 '>
     <div  className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-pink-100 dark:hover:bg-gray-700 hover:-translate-y-1 duration-500 mt-30 ">
       <Image src={image1} alt='image' className='w-10'/>
       
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Online Shopping Website</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>Built full-stack e-commerce platform Implemented authentication & authorizationCreated admin dashboard for product management Integrated REST APIs</p>
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Tech:</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>React, Node.js, Express, MongoDB,Redux Toolkit</p>
     <a className="text-green-500 text-2xl hover:text-green-700" href="https://online-shopping-frontend-seven.vercel.app/">Live Preview</a>
     </div>
     <div  className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-pink-100 dark:hover:bg-gray-700 hover:-translate-y-1 duration-500 mt-30 ">
       <Image src={ecommerce} alt='image' className='w-10'/>
       
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Frontend Of E-Commerce Website</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>Created a responsive eCommerce frontend UI with product pages, cart interface, and mobile-friendly design.</p>
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Tech:</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>HTML5 ,CSS3 ,Javascript(ES6)</p>
     <a className="text-green-500 text-2xl hover:text-green-700"  href="https://ecommerce-frontend-part.vercel.app/">Live Preview</a>
     </div>
     <div  className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-pink-100 dark:hover:bg-gray-700 hover:-translate-y-1 duration-500 mt-30 ">
       <Image src={design} alt='image' className='w-10'/>
       
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Figma Design to HTML Css Js</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>Converted Simple  Figma designs into responsive HTML, CSS, and JavaScript code.</p>
     <h3 className='text-lg my-4 text-gray-700 dark:text-gray-300'>Tech:</h3>
     <p className='text-sm text-gray-100 dark:text-gray-100  leading-5 '>HTML5, CSS3, JavaScript (ES6)</p>
     <a className="text-green-500 text-2xl hover:text-green-700"  href="https://figma-to-html-css-nine.vercel.app/">Live Preview</a>
     </div>
     
     </motion.div>
     
    </div>
  );
};

export default Work;
