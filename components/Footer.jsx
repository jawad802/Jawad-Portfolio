import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-center text-2xl font-Ovo text-gray-900 dark:text-white">My Portfolio</h2>
        <div className="w-max flex items-center gap-2 mx-auto text-gray-900 dark:text-white">
          <Image src={assets.mail_icon} alt="image" className="w-6" />
          jawadiftikhar003@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-600 mx-[10%] mt-12 py-6 text-gray-900 dark:text-white">
        <p>@ 2025 Syed Jawad.All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/jawad802">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/syed-jawad-972419286/">
              LinkdIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
