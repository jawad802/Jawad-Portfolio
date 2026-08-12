import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6"
    >
      {/* Profile Image with subtle accent border */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        <Image
          src={assets.profile_img}
          alt="Syed Jawad"
          className="rounded-full w-32 h-32 md:w-36 md:h-36 object-cover border-2 border-blue-500/30 shadow-lg shadow-blue-500/10"
        />
      </motion.div>

      {/* Greeting */}
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-Ovo text-slate-800 dark:text-slate-200">
        Hi, I'm Syed Jawad
        <Image src={assets.hand_icon} alt="wave" className="w-6 inline-block" />
      </h3>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold font-Ovo text-gray-900 dark:text-white leading-tight tracking-tight">
        Full-Stack Web Developer
      </h1>

      {/* Structured Subtitle */}
      <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-Ovo leading-relaxed">
        Specializing in building modern web applications with Next.js, React, Node.js, REST APIs, WordPress, and pixel-perfect Figma conversions.
      </p>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-2"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium flex items-center gap-3 shadow-lg shadow-blue-500/25 transition-all duration-300"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Header;