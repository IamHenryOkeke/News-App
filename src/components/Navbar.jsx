import { useState } from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as MenuOpenIcon} from "../assets/svg/menuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuClose.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navTexts = ["Home","About","Category","Contact"]
  return (
    <motion.nav initial = {{x : -1000}}
    animate = {{x : 0}} className="mx-4 mb-6 lg:mx-28">
      <div className='bg-[#C2DEDC] mt-6 px-3 py-3 lg:mt-8 flex justify-between items-center border rounded-3xl md:px-[42px] md:py-[28px]'>
        <a href="/" className='md:text-lg font-medium lg:w-1/4'>
            TechWatchDog
        </a>
        <div className="items-center justify-around flex-grow hidden lg:flex">
          <div className='flex flex-col gap-12 lg:flex-row lg:text-lg'>
            {
              navTexts.map((item, index) => {
                if(item === "Home") {
                  return <Link to = "/" key={index} className='hover:text-[#1BA9B5] cursor-pointer'>{item}</Link>
                }
                return <p key={index} className='hover:text-[#1BA9B5] cursor-pointer'>{item}</p>
              })
            }
          </div>
          <div className='font-medium'>
              <Link>
                  <button className='ml-4 px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5]'>Subscribe Now</button>
              </Link>
          </div>
        </div>
        <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
          {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
        </div>
      </div>
      <div
        className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-slate-200 mt-3 rounded-xl`}
      >
          <div className='flex flex-col items-center gap-5'>
            {
              navTexts.map((item, index) => {
                if(item === "Home") {
                  return <Link to = "/" key={index} className='hover:text-[#1BA9B5] cursor-pointer'>{item}</Link>
                }
                return <p key={index} className='hover:text-[#1BA9B5] cursor-pointer'>{item}</p>
              })
            }
          </div>
          <div className='flex gap-4 font-medium'>
              <a href="#signup">
                  <button className='ml-4 px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5]'>Subscribe Now</button>
              </a>
          </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

