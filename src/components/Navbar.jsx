import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#8e8d8d] text-[#BAFF39] z-10'>
            <div className="logo">
                <h2 className='text-5xl px-10' style={{ fontFamily: 'Titillium Web', cursor: "pointer" }}>HA</h2>
            </div>
            {/* desktop */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li><Link to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li><Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* mobile */}
            <div onClick={handleNav} className="hamburger md:hidden z-10 px-2 cursor-pointer">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full flex justify-center items-center flex-col bg-[#6E6E6E]'}>
                <li className='py-6 text-2xl'><Link  onClick={handleNav} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-2xl'><Link onClick={handleNav}  to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-2xl'><Link  onClick={handleNav} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-2xl'><Link onClick={handleNav}  to="projects" smooth={true} duration={500}>
                    Projects
                </Link></li>
                <li className='py-6 text-2xl'><Link  onClick={handleNav} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
                <li className='py-6'>
                    <ul className='flex w-80 justify-evenly'>
                        <li className='w-[60px] h-[50px] flex justify-between items-center rounded-lg bg-blue-600  px-4'>
                            <a href='https://www.linkedin.com/in/hammad-ahmed-9aa7b2290/' className='flex justify-between items-center w-full text-white' target="_blank"> <FaLinkedin size={24} /> </a>
                        </li>

                        <li className='w-[60px] h-[50px] flex justify-between items-center rounded-lg  bg-[#333333]  px-4'>
                            <a href='https://github.com/aech-aey' className='flex justify-between items-center w-full text-white ' target="_blank"><FaGithub size={24} /> </a>
                        </li>

                        <li className='w-[60px] h-[50px] flex justify-between items-center rounded-lg  bg-[#25D366]  px-4'>
                            <a href='mailto:ha6443588@gmail.com' className='flex justify-between items-center w-full text-white' target="_blank"> <FaEnvelope size={24} /> </a>
                        </li>

                    </ul>
                </li>
            </ul>


            <div className="social hidden md:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] rounded-lg hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href='https://www.linkedin.com/in/hammad-ahmed-9aa7b2290/' className='flex justify-between items-center w-full text-white' target="_blank"> Linkedin <FaLinkedin size={30} /> </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-lg hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href='https://github.com/aech-aey' className='flex justify-between items-center w-full text-white' target="_blank"> Github <FaGithub size={30} /> </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-lg hover:ml-[-10px] duration-300 bg-[#25D366]'>
                        <a href='mailto:ha6443588@gmail.com' className='flex justify-between items-center w-full text-white' target="_blank"> Mail <FaEnvelope size={30} /> </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;
