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
                        MongoDB, MySQL. In my leisure time I like to read books, play Football, Chess, Badminton, Snowboarding, Table Tennis,
                        Swimming and many more adventure Activities.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
