import React from 'react'
import contact_pic from '../public/assets/contact.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp, HiOutlineNewspaper } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[5651e5]'> Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left*/ }
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'> 
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact_pic} alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Khushal Kumar Singh</h2>
                            <p>Full-Stack Software Developer</p>
                            <p className='py-4'> I am available for freelance or full-time positions. Contact me and let's talk</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'> 
                                <a href='https://www.linkedin.com/in/khushalksingh/' target='_blank'rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href="https://github.com/parklicoste/" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="mailto:khushalkumar0102@gmail.com" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <a href="https://leetcode.com/parklicoste/" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <svg fill="#000000" height="20" width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                                        </svg>
                                    </div>
                                </a>
                                <a href="/resume">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* Right*/ }

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label  className='uppercase text-sm py-2'>Name</label>
                                <input type="text"   className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input type="text"  className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email"  className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                    </form>
                </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href=''>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact