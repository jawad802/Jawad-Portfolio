import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex flex-col items-center my-20 text-center">
        {/* Paragraph centered with auto margins */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl font-Ovo mx-auto text-base text-justify"
        >
          Hi I'm Syed Jawad a website developer with a strong understanding of
          both frontend and backend development, along with practical
          experience in WordPress. I build responsive and user-friendly
          websites using HTML, CSS, JavaScript, and React. On the backend, I
          work with Node.js, Express, and MongoDB to create APIs and manage
          data efficiently. I also develop and customize WordPress websites
          using Elementor and can convert Figma designs into fully functional,
          responsive sites. I focus on clean code, performance, and simple,
          effective solutions. I enjoy solving problems and continuously
          improving my skills to deliver reliable and high-quality work.
        </motion.p>

        {/* Info list cards centered */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full mx-auto"
        >
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-700 hover:-translate-y-1 duration-500 flex flex-col items-center text-center"
              key={index}
            >
              <Image src={icon} alt={title} className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-200">{title}</h3>
              <p className="text-gray-100 text-sm">{description}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Tools Section centered */}
        <h4 className="my-6 text-gray-200 font-Ovo text-center">Tools I Used</h4>
        <ul className="flex items-center justify-center gap-3 sm:gap-5">
          {toolsData.map((tool, index) => (
            <li
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              key={index}
            >
              <Image src={tool} alt="tool" className="w-5 sm:w-8" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;