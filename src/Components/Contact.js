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
      <div>
        <h1 className='text-4xl font-bold  p-2 m-4'>Contact Me</h1>

      {/*  contact form */}

      <section className="py-10 p-2 m-4 text-white ">
      <div className="max-w-2xl mx-auto p-6 rounded-lg bg-black border-2 border-yellow-300 shadow-2xl shadow-yellow-300"
        data-aos="zoom-in" data-aos-duration="1000">
        <span className='font-semibold text-lg text-center flex justify-center p-4 m-2 text-yellow-300'>
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className='flex flex-col p-2 m-4 space-y-4'>
          <input 
            type='text' 
            placeholder='Your Name' 
            className='p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 transition duration-300'
            required 
          />
          <input 
            type='email' 
            placeholder='Your Email'
            className='p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 transition duration-300'
            required 
          />
          <textarea 
            name='message' 
            placeholder='Your Message'
            className='p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 transition duration-300 h-32'
            required 
          />
          <button 
            type='submit' 
            className='bg-yellow-300 shadow-2xl shadow-yellow-300 text-black font-bold p-4 rounded-md hover:bg-yellow-400 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </section>


    {/* Icon-section */}
        <div className='flex justify-center items-center p-6 m-2 text-2xl'
          // data-aos="flip"
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















