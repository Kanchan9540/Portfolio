import React from 'react'
import experience from "./Data/experience.json"

const Experience = () => {
  return (
    <>
    <div id='experience'>
      <h1 className='text-4xl p-2 m-4 font-bold'>EXPERIENCE</h1>
      <div  className=" flex flex-col justify-center items-center">
      {
        experience.map((Data)=>{
          return(
            <>
            <div key={Data.id} className='bg-black w-[620px] border-2 border-yellow-400 m-10 p-8 text-center flex flex-col items-center justify-around rounded-lg shadow-2xl shadow-yellow-300'
            data-aos="zoom-in"  // animations
            data-aos-duration="1000"
            >
            
            {/* left section */}
             <div>
             <img className='w-20 h-20 rounded-2xl border-4 border-yellow-300 text-center shadow-2xl shadow-yellow-300 ' src={`/assests/${Data.imageSrc}`} alt='' />
            </div>

            {/* right section */}
            <div>
              <h2 className='text-xl font-bold'>{Data.role}</h2>
              <h4 className='text-lg font-semibold'>
              <span className='text-yellow-500'>{Data.startDate}{" "} {Data.endDate} </span> {Data.location}
              </h4>
              
              <h5 className='text-yellow-300 font-bold text-sm'>{Data.experiences[0]}</h5>
              <h5 className='text-yellow-300 font-bold text-sm'>{Data.experiences[1]}</h5>
            </div>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
    </>
  )
}


export default Experience;




