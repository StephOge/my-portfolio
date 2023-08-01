import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div>
        S/N
       </div>

       {/* Menu */}
       <div>
        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer'><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='px-4 cursor-pointer'><Link to='work' smooth={true} duration={500}>Works</Link></li>
            <li className='px-4 cursor-pointer'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
       </div>

       {/* Hamburgers */}
       <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
       </div>

       {/* Mobile View */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='px-4 py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='px-4 py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li className='px-4 py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='px-4 py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Works</Link></li>
            <li className='px-4 py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>

      {/* Socials */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300 px-5' href="mailto:nwachukwustephenie0@gmail.com">Email <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px' }} /></a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300 px-5' href='https://github.com/StephOge'>GitHub <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }} /></a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300 px-5' href='https://www.linkedin.com/in/stephenie-nwachukwu/'>LinkedIn <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} /></a>
            </li>
            <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300 px-5' href='/'>Resume <BsFillPersonLinesFill style={{ fontSize: '30px' }} /></a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar