import React, {useState, useEffect} from "react";
import {useRouter} from 'next/router'
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import navLogo from "../public/assets/Navlogofinal.png"
import {FaGithub ,FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();


    useEffect(()=> {
        
            if(router.asPath === '/property'
            || router.asPath === '/twitch'
            || router.asPath === '/netflix'
            || router.asPath === '/crypto'){
                setNavBg('transparent')
                setLinkColor('#ecf0f3')
            } else {
                setNavBg('#fcfcfc')
                setLinkColor('#1f2937')
            }
       
        
    }, [router]);
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >=90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow );
        
    }, []);

    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'> 
                <Link href='/'><Image src={navLogo}  alt='/' width='125' height='20' /></Link>

                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/resume'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contacts</li>
                        </Link>
                        
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
                                    :    "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href=''><Image src={navLogo} width='87' height='35' alt='/' /></Link>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4"> Let's Build something Legendary together</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/#home">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> Home</li>
                            </Link>
                            <Link href="/resume">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> Resume</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> About</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={()=> setNav(false)} className="py-4 text-sm"> Contact</li>
                            </Link>
                            
                        </ul>

                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Lets's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                
                                <a href='https://www.linkedin.com/in/khushalksingh/' target='_blank'rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                
                                <a href="https://github.com/parklicoste/" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="khushalkumar0102@gmail.com" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <a href="https://leetcode.com/parklicoste/" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        {/* <BsFillPersonLinesFill /> */}
                                        <svg fill="#000000" height="20" width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                                        </svg>
                                    </div>
                                </a>
                                <a href="/resume" >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                       
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                </div>

                    
                </div>
                
            </div>

        </div>
    )
}


export default Navbar