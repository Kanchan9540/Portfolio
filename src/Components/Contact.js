import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <h1 className='text-4xl font-bold  p-2 m-4' >Contact Me</h1>











        
        <div className='flex justify-center items-center p-2 m-2 text-2xl'
          // data-aos="zoom-in"
          // data-aos-duration="1000"
        >
          <a href='https://www.facebook.com/profile.php?id=100014761635009' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><CiFacebook/></a>
          <a href='https://www.instagram.com/ka.nchan207?igsh=MW9rMjJ2aXQ0c3V5MA==' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><FaInstagram/></a>
          <a href='https://www.linkedin.com/in/kanchan-761b95240/' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><CiLinkedin/></a>
          <a href='https://leetcode.com/u/K_anchan/' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><SiLeetcode/></a>
          <a href='https://github.com/Kanchan9540' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><FaGithubSquare/></a>
          <a href='mailto:kanch9990@gmail.com' target='_blank' className='bg-black m-4 w-16 h-16 flex justify-center items-center rounded-full border-2 border-yellow-300 shadow-2xl shadow-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-black hover:border-4'><SiGmail/></a>
        </div>
      </div>
    </>
  )
}

export default Contact;















