import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleSubscribe, openModal } from '../features/newsSlice';

const SignUp = () => {
  const [mail, setMail] = useState("")
  const dispatch = useDispatch()
  return (
    <div id = "signup" className='bg-[#109BE9] text-white py-10'>
      <div className='mx-4 mb-4'>
        <h2 className='font-bold text-2xl md:text-4xl mb-3'>Sign Up for Our Newletters</h2>
        <p className='md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde porro amet excepturi, nisi quae nostrum quibusdam nemo corrupti voluptate corporis distinctio, molestiae at! Numquam perferendis cupiditate consequuntur voluptate modi?
        </p>
      </div>
      <form className='mx-4 flex flex-col items-center md:flex-row gap-5' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(handleSubscribe(mail))
            dispatch(openModal())
        }}
      >
        <input onChange={(e) => {setMail(e.target.value)}} className='h-12 w-full md:w-1/2 rounded-lg text-black pl-3' type="email" required name="" id="" placeholder='Input your email address here'/>
        <button className='bg-[#F36326] px-6 py-3 self-center rounded-lg' type="submit">Subscribe Now</button>
      </form>
    </div>
  )
}

export default SignUp
