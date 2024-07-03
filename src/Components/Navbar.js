import React from "react";

const Navbar = () => {
    return(
        <>
         <div className="flex justify-between p-2 m-2 sticky" 
         Data-aos= "fade-down"
         Data-aos-duration= "1000"
         >
            <div className="font-bold text-lg hover:border-b-4 hover:border-yellow-300 ">Portfolio</div>
            <div className="">
              <a href="#home" className="p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Home</a>
              <a href="#experience" className="p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Experience</a>
              <a href="#skills" className="p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Skills</a>
              <a href="#projects" className="p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Projects</a>
              <a href="#contact" className="p-4 font-bold hover:border-b-4 hover:border-yellow-300">Contact</a>  
            </div>
         </div>

        </>
    )
};

export default Navbar;