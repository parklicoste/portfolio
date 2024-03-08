import React from 'react';
import Image from 'next/image';
import aceuniImg from '../public/assets/projects/aceuni_pic.png';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const aceuni = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={aceuniImg} layout='fill' objectFit='cover' alt='/' fill/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>AceUni - Platform for students </h2>
                    <h3 className='absolut'>Next JS / Bootstrap / Node JS</h3>

                </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='pt-4'>Project</p>
                <h2 className='pt-4'>Overview</h2>
                <p className='pt-4'> I led the development of a comprehensive full-stack web application designed to facilitate 
                    seamless collaboration among 
                    Carleton University students, significantly enhancing their access to and sharing of course materials. 
                    The project involved meticulous planning, with the creation of entity relationship diagrams, use-case diagrams, 
                    and Balsamiq sketches to model the system's architecture. <br /><br />

                    For the frontend, I employed Next.js, ensuring a dynamic and responsive user interface, 
                    while the backend was powered by Node.js, leveraging the robust capabilities of MongoDB as the database. 
                    To streamline the file upload process, I implemented the Multer middleware. <br /><br />

                    Ensuring the security of user data was a top priority, and to this end, I orchestrated a secure user authentication 
                    system using JWT (JSON Web Tokens), generating unique tokens for each user upon sign-in. Additionally, I incorporated 
                    advanced password hashing algorithms, including bcrypt and salted hashes, to fortify the application's security measures. 
                    This not only enhanced the overall data integrity but also safeguarded user passwords within the MongoDB database, 
                    underscoring our commitment to privacy and confidentiality. This holistic approach resulted in an innovative and secure 
                    platform that contributed to the improved academic performance of Carleton University students.
                </p>

                <a href='https://www.youtube.com/watch?v=onrSaU8AWNM&t=97s&ab_channel=KhushalSingh' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a  href='https://github.com/parklicoste/AceUniUpdated' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Next JS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MongoDB database</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Multer</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> JSON Web Token (JWT)</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Bcrypt Hashing Algorithm</p>
                    </div>
                </div>
            </div>
        <Link href='/#projects' className='underline cursor-pointer'>Back</Link>
        </div>
        
    </div>
 
  )
}

export default aceuni;