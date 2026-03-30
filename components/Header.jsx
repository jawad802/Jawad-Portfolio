import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
const Header = () => {
  return (
    <motion.div    initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}  className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-5">
      <div>
        <Image src={assets.profile_img} alt="image"    
   className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-900 dark:text-white">
        Hi I'm Syed Jawad <Image src={assets.hand_icon} className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-5xl lg:text-[55px] font-Ovo text-gray-900 dark:text-white">
       Full-Stack Web Developer | WordPress | React | Node.js | API & Figma Conversion
      </h1>
      <motion.div   initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.5 }} className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <motion.a href="#contact"   whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }} className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
          Contact Me <Image src={assets.right_arrow_white} className="w-5" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
