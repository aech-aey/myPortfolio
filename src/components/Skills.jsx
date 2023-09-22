import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import MUI from '../assets/mui.png';


const Skills = () => {
      // bg-[#6E6E6E] text-[#BAFF39]
  return (
    <div name='skills' className='w-full h[140vh] md:h-[110vh] bg-[#9a9a9a] text-[#141c06]'>
      {/* Container */}
      <div className='max-w-[1000px] lg:max-w-[1000px] md:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#BAFF39] '>Skills</p>
              <p className='py-5 md:text-2xl code'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#8e8d8d]'>
                  <img className='w-20 mx-auto my-4' src={MUI} alt="HTML icon" />
                  <p className='my-4'>Material UI</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
