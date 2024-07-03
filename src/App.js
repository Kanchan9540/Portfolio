import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Experience from "./Components/Experience"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact";
import Aos from "aos"; // animation
import "aos/dist/aos.css"


const App = () => {

  // for animation on a experience 
  useEffect(() =>{
  Aos.init();
  }, [])

  return(

   <div className='bg-blue-950 text-white h-max w-full'>
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
   </div>
    
  );
};

export default App;