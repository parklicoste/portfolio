import React from 'react';
import Image from 'next/image';
import khush_img from '../public/assets/Khush_chemistry_pic.jpg';

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[]1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>

                <p className='uppercase text-xl tracking-widest text-[#5651e5]' >About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>&lt;// I am not your normal developer</p>
                <p>As a Full Stack Developer with expertise in secure communication, 
I am passionate about building, deploying, and maintaining web applications, databases, 
and user accounts that enhance user experience and data efficiency. 
I have a Bachelor's degree in Computer Science from Carleton University, where I learned 
various programming languages, frameworks, and data structures.</p>

                <p className='py-2 text-gray-600'>I have recently worked as a Software Engineer at Motorola Solutions, 
where I remodeled the existing software UI using Angular typescript and Material library, 
implemented white-source scans in testing pipelines, extracted and verified data from 
PostgreSQL database, and developed test jobs using C# and XML. I also have experience 
as a Web Developer at Carleton University, where I designed, implemented, and tested a 
distributed application system using Vue.js, React.js, Flask-PyMongo, and Axios API. 
I love to explore new technologies, solve coding challenges, and help others with coding 
tasks.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={khush_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;
