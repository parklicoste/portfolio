import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () =>{
    return(
        <div id='home' className="w-full h-screeen text-center">
            <div className="max-w-[1240px] h-dvh w-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Hello... !!!, I'm glad that you landed here on my page</p>
                    <h1 className="py-4 text-gray-700"> 
                        Hi, I'm <span className="text-[#5651e5]"> Khushal</span>
                    </h1>
                    <h1 className="py-4 text-gray-700"> 
                        A Full-Stack Software Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a full-Stack software developer with skills in React, Python, C#, C++, NodeJS including databases like 
                        MongoDB, MySQL. This portfolio is built using Next JS, and Tailwind, Deployed on vercel app. In my leisure time I like to read books, play Football, Chess, Badminton, Snowboarding, Table Tennis,
                        Swimming and many more adventure Activities.
                    </p>
                    <div className="flex items-center justify-between max-w-[380px] m-auto py-4">
                        <a href="https://www.linkedin.com/in/khushalksingh"  target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://github.com/parklicoste/"  target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </a>
                        <a href="mailto:Khushalkumar0102@gmail.com"  target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a  href="https://leetcode.com/parklicoste/" target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <svg fill="#000000" height="20" width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                                </svg>
                            </div>
                        </a>
                        <a  href="/resume/">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
