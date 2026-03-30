
import { assets } from "@/assets/assets";
import Image from "next/image";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const[isscroll,SetIsScroll]=useState(false);
    const sideMenuRef=useRef();
    const openMenu=()=>{
        sideMenuRef.current.style.transform='translateX(-16rem)'
    }
    const closeMenu=()=>{
        sideMenuRef.current.style.transform='translateX(16rem)'
    }
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY>50){
         SetIsScroll(true)
        }else{
          SetIsScroll(false)
        }
      })
    },[]);
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isscroll ? "bg-white dark:bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-sm":"bg-white dark:bg-gray-900"}`}>
        <a href="#top">
           <h2 className="text-center text-gray-800 text-2xl dark:text-white font-Ovo">My Portfolio</h2>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isscroll ? "" :"bg-white dark:bg-gray-900  dark:text-white shadow-sm bg-opacity-50"} text-gray-900 dark:text-white`}>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
           
            <a href="#contact" className="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-400 rounded-full ml-4 hover:bg-gray-800 dark:hover:bg-transparent hover:text-white dark:hover:text-white dark:text-white">Contact </a>
            <button className="block md:hidden ml-3  " onClick={openMenu}>
               
                <AiOutlineMenuFold  className="w-10 text-3xl "/>
            </button>
        </div>

        {/* Mobile Menu  ---- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-during-500  dark:bg-gray-900 text-black dark:text-white">
            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <RiCloseLargeLine className="text-3xl"/>
            </div>
             <li>
            <a onClick={closeMenu} href="#top">Home</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">About Me</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">Services</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">My Work</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
