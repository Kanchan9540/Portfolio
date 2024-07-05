// import React from 'react';
// import projects from './Data/projects.json';

// const Projects = () => {
//   return (
//    <>
//     <div>
//       <h1 className='text-4xl font-bold  p-2 m-4 '>PROJECTS</h1>
//       <div className='flex p-2 m-2 justify-center items-center'>
//         {
//             projects.map((Data)=>(
//                 <>
//                    <div key={Data.id} className='flex my-5 m-4 p-4' id='projects'>
//                    <div className=' border-2 border-yellow-300 shadow-2xl rounded-lg shadow-yellow-300  bg-black w-60 h-96'
//                    data-aos="flip-right"  // animation
//                    data-aos-duration="1000"
//                    >
//                    <div className='flex justify-center items-center p-2 m-2'>
//                    <img className='w-48 h-48 rounded-lg border-2 border-yellow-300 shadow-2xl shadow-yellow-300  p-2 m-2' src={Data.imageSrc} alt='' />
//                    </div>
//                     <div className='text-center '> 
//                         <h5 className='font-bold text-lg'>{Data.title}</h5>
//                         <p>{Data.description}</p>
                        
//                        <div className='flex justify-between p-2 mx-12 text-center'>
//                        <a href={Data.demo} className='border-2 border-yellow-300  rounded-md  hover:bg-yellow-300 hover:text-black p-1'>Demo</a>
//                        <a href={Data.source} className='border-2 border-yellow-300 rounded-md  hover:bg-yellow-300 hover:text-black p-1'>Code</a>
//                        </div>

//                     </div>
//                    </div>

//                    </div> 
//                 </>

//             ))}
//       </div>
//     </div>
//    </>
//   );
// };

// export default Projects;





import React from 'react';
import projects from './Data/projects.json';

const Projects = () => {
  return (
    <>
      <div id='projects'>
        <h1 className='text-3xl md:text-4xl font-bold p-2 m-4'>PROJECTS</h1>
        <div className='flex flex-wrap justify-center items-center'>
          {projects.map((Data) => (
            <div key={Data.id} className='flex flex-col my-5 mx-4 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <div className='border-2 border-yellow-300 shadow-2xl rounded-lg shadow-yellow-300 bg-black'
                data-aos="flip-right"  // animation
                data-aos-duration="1000"
              >
                <div className='flex justify-center items-center p-2 m-2'>
                  <img className='w-48 h-48 rounded-lg border-2 border-yellow-300 shadow-2xl shadow-yellow-300 p-2 m-2' src={Data.imageSrc} alt='' />
                </div>
                <div className='text-center text-white p-2'>
                  <h5 className='font-bold text-lg'>{Data.title}</h5>
                  <p>{Data.description}</p>
                  <div className='flex justify-between p-2 mx-12 text-center'>
                    <a href={Data.demo} className='border-2 border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black p-1'>Demo</a>
                    <a href={Data.source} className='border-2 border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black p-1'>Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
