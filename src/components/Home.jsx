import React from 'react';
import { FaEye } from 'react-icons/fa'
const Home = () => {
  
    return (
        <div name='home' className='w-full h-[130vh] sm:h-screen pt-[100px] bg-[#9a9a9a]'>
            {/* Container */}
            <div className='max-w-[700px] md:max-w-[700px] lg:max-w-[850px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#141c06]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#BAFF39]'>
                    Hammad 
                </h1>
                <h2 className='text-2xl sm:text-4xl font-bold text-[#3c4825]'>
                    I'm a ReactJS Developer.
                </h2>
                <p className='text-[#141c06] py-4 max-w-[700px] code '>
                    // A ReactJS developer with a passion for
                    creating dynamic web interfaces. Self-
                    starter with hands-on project experience
                    and a commitment to continuous
                    learning. While I may not have formal
                    work experience, This is my portfolio of
                    projects that showcase my skills
                </p>
                <div>
                    <a href='/HammadCV.pdf' className=' w-[175px] text-lime-950 font-bold border-lime-950 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                       View Resume
                        <span style={{marginLeft:"5px"}}>
                            <FaEye  />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
