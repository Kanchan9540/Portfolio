import React from 'react';
import skills from './Data/skills.json';

const Skills = () => {
  return (
    <>
      <div id='skills'>
        <h1 className="text-3xl md:text-4xl font-bold p-2 m-4">SKILLS</h1>
        <div className="w-full md:w-[650px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {skills.map((Data) => (
            <div 
              key={Data.id} 
              className='flex flex-col items-center m-4'
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className='p-6 md:p-10 m-5 w-28 h-28 md:w-36 md:h-36 rounded-lg flex flex-col items-center justify-center border-2 border-yellow-300 shadow-2xl shadow-yellow-300 bg-black'>
                <img className='w-12 h-12 md:w-20 md:h-20 mb-2' src={`/assests/${Data.imageSrc}`} alt="skills" />
                <h3 className='text-sm md:text-lg font-semibold text-white'>{Data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
