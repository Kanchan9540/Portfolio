import React from 'react';
import skills from './Data/skills.json';

const Skills = () => {
  return (
    <>
      <div id='skills'>
        <h1 className="text-4xl font-bold  p-2 m-4">SKILLS</h1>
        <div className=" w-[650px] mx-auto flex-col grid grid-cols-3 gap-0 justify-items-center">
        {skills.map((Data) => (
          <div key={Data.id} className='flex flex-col items-center m-4'
           data-aos="flip-left"
           data-aos-duration="1000"
          >
           
            <div className='p-10 m-5 w-36 h-36 rounded-lg items-center justify-center flex flex-col border-2 border-yellow-300 shadow-2xl shadow-yellow-300 bg-black'>
              <img className='flex w-20 h-20 mb-2' src={`/assests/${Data.imageSrc}`} alt="" />
              <h3 className='text-lg font-semibold'>{Data.title}</h3>
            </div>
          </div>
         
        ))}
      </div>
      </div>
    </>
  );
};

export default Skills;


