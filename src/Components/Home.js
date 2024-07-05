import React, { useEffect, useRef } from 'react';
import Pdf from "../Pdf/Updated_Resume.pdf";
import mine from "./Data/mine.json";
import Typed from "typed.js";

const Home = () => {
  // useRef initialize for animation
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My Name is Kanchan",
        "I'm a Frontend Developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Hide the cursor
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='flex flex-col md:flex-row justify-around items-center h-auto md:h-96 p-2 m-2' id='home'>

        {/* left section */}
        <div className='w-full md:w-[620px] p-6 m-1 h-auto md:h-52 border-2 border-yellow-300 rounded-md text-center shadow-2xl shadow-yellow-300 bg-black'
          data-aos="fade-up-right" // animation
          data-aos-duration="1000"
          style={{ width: '620px', minHeight: '200px', maxHeight: '300px' }} // Fixed width and min/max height
        >
          <h1 className='m-6 p-2 text-xl md:text-2xl font-bold text-white' ref={typedRef}></h1>

          <a href={Pdf} download="Resume.pdf" className='border-2 border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black m-2 p-2 inline-block'>Download Resume</a>
        </div>

        {/* right section */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className='flex justify-center items-center mt-4 md:mt-0 min'
          style={{ width: '300px', minHeight: '300px', maxHeight: '300px' }} // Fixed width and min/max height
        >
          <img className='p-1 m-6 h-64 w-64 w md:h-80 md:w-80 rounded-full border-2 border-yellow-300 animate-superman' src={`/assests/${mine.imgSrc}`} alt='mine' />
        </div>

      </div>
    </>
  );
}

export default Home;
