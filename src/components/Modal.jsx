import React from 'react'
import { ReactComponent as Emoji} from "../assets/svg/Emoji.svg"
import { useSelector, useDispatch } from 'react-redux'
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuClose.svg";
import { closeModal } from '../features/newsSlice';
import { motion } from 'framer-motion';

const Modal = () => {
  const { mail } = useSelector((state) => state.news);
  const dispatch = useDispatch()
  return (
    <motion.div initial = {{z : 0}} animate = {{z : 20}} className='fixed flex flex-col gap-4 items-center justify-center bg-[#000000e6] w-screen h-[30%] md:h-[50%] top-[20%] text-white font-bold rounded-2xl text-lg md:text-4xl'>
      <button onClick={() => {
        dispatch(closeModal())
      }}>
        <MenuCloseIcon className = "h-10 absolute fill-white top-5 md:top-10 right-5 md:right-20"/>
      </button>
      <Emoji className = "h-20 md:h-40"/>
      <p>You successfully subscribed</p>
      <p>Your email: {mail}</p>
    </motion.div>
  )
}

export default Modal
