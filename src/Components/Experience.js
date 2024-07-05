import React from 'react';
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div id='experience'>
        <h1 className='text-3xl md:text-4xl p-2 m-4 font-bold '>EXPERIENCE</h1>
        <div className="flex flex-col justify-center items-center">
          {experience.map((Data) => (
            <div 
              key={Data.id} 
              className='bg-black w-full md:w-[620px] border-2 border-yellow-400 my-4 md:my-10 p-4 md:p-8 text-center flex flex-col items-center justify-around rounded-lg shadow-2xl shadow-yellow-300'
              data-aos="zoom-in" // animations
              data-aos-duration="1000"
            >
              {/* Image section */}
              <div className="mb-4">
                <img className='w-16 h-16 md:w-20 md:h-20 rounded-2xl border-4 border-yellow-300 text-center shadow-2xl shadow-yellow-300' src={`/assests/${Data.imageSrc}`} alt='experience' />
              </div>

              {/* Information section */}
              <div>
                <h2 className='text-lg md:text-xl font-bold text-white'>{Data.role}</h2>
                <h4 className='text-md md:text-lg font-semibold text-white'>
                  <span className='text-yellow-500'>{Data.startDate} - {Data.endDate}</span> {Data.location}
                </h4>
                {Data.experiences.map((exp, index) => (
                  <h5 key={index} className='text-yellow-300 font-bold text-sm md:text-base'>{exp}</h5>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience;


