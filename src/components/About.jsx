import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-[145vh] sm:h-screen bg-[#9a9a9a] text-[#141c06]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[700px] md:max-w-[700px] lg:max-w-[850px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#BAFF39]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-[#BAFF39]'>
              <p>Hi. I'm Hammad Ahmed, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='code'> // I am a current BSCS student at Karachi University, on a journey of continuous learning and growth in the tech world since 2020.In 2022, I completed a web design course with Aptech. In 2023, I successfully completed a MERN stack development program with Bano Qabil - Alkhidmat, further enhancing my capabilities.I'm ready to apply my diverse skills to bring your projects to life. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
