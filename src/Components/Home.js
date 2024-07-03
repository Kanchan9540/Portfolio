import React, { useEffect, useRef, useSyncExternalStore } from 'react';
import Pdf from "../Pdf/Updated_Resume.pdf";
import mine from "./Data/mine.json";
import Typed from "typed.js";


const Home = () => {

  //useRef initialize for animation
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

    const typed = new Typed(typedRef.current, options)

    return() => {
      typed.destroy();
    };
  }, [1])

  return (
    <>
      <div className='flex  justify-around items-center h-96 p-2 m-2'id='home'>

      {/* left section */}
      <div className='w-[620px] p-6  m-1 h-52 border-2 border-yellow-300 rounded-md text-center shadow-2xl shadow-yellow-300 bg-black'
       data-aos="fade-up-right" //animation
       data-aos-duration="1000"
      >
      
       <h1 className='m-6 p-2 text-2xl font-bold' ref={typedRef}></h1>

       <a href={Pdf} download="Resume.pdf" className='border-2 border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black m-2 p-1 my-3'>Download Resume</a>
      </div>

      {/* right section */}
      <div 
      data-aos="fade-up-left" 
      data-aos-duration="1000"
      >
         <img className='p-1 m-4 h-80 w-80 rounded-full border-2 border-yellow-300 animate-superman ' src={`/assests/${mine.imgSrc}`} alt='mine'/>
      </div>
      
      </div>
    </>
  )
}

export default Home



// import React, { useEffect, useRef } from 'react';
// import Pdf from "../Pdf/Updated_Resume.pdf";
// import mine from "./Data/mine.json";
// import Typed from "typed.js";

// const Home = () => {
//   const typedRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       strings: [
//         "Welcome to my Profile",
//         "My Name is Kanchan",
//         "I'm a Frontend Developer"
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//       showCursor: false,
//     };

//     const typed = new Typed(typedRef.current, options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className='flex flex-col md:flex-row justify-center items-center h-screen p-2' id='home'>

//       {/* Left Section */}
//       <div className='md:w-1/2 w-full p-6 m-2 md:m-1 border-2 border-yellow-300 rounded-md text-center shadow-2xl shadow-yellow-300 bg-black'
//         data-aos="fade-up-right" // Animation
//         data-aos-duration="1000"
//       >
//         <h1 className='m-6 p-2 text-2xl font-bold' ref={typedRef}></h1>
//         <a href={Pdf} download="Resume.pdf" className='border-2 border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black m-2 p-1 my-3'>Download Resume</a>
//       </div>

//       {/* Right Section */}
//       <div className='md:w-1/2 w-full'
//         data-aos="fade-up-left"
//         data-aos-duration="1000"
//       >
//         <img className='p-1 m-4 h-80 w-80 md:h-96 md:w-96 rounded-full border-2 border-yellow-300 animate-superman' src={`/assets/${mine.imgSrc}`} alt='mine' />
//       </div>

//     </div>
//   );
// };

// export default Home;
