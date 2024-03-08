import React from 'react';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import cryptoImg from '../public/assets/projects/crypto.jpg';
import Link from 'next/link';

const sapportal = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={cryptoImg} layout='fill' objectFit='cover' alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Self-Assessment Portal</h2>
                    <h3 className='absolut'> Python / React JS / Bootstrap </h3>

                </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='pt-4'>Project</p>
                <h2 className='pt-4' >Overview</h2>
                <p className='pt-4'> I actively participated in a collaborative effort to construct, deploy, and maintain web applications, 
                    databases, and user accounts within the Department of System and Computer Engineering. One notable achievement 
                    was the development of a Self-Assessment portal, a CRUD (Create, Read, Update, Delete) application tailored for 
                    4th-year engineering students. This platform served as a dynamic space for students to upload their capstone 
                    projects and receive valuable feedback. <br /> <br />

                    In another project milestone, I spearheaded the launch of a PyMongo-Flask application, utilizing React.js for the 
                    frontend and Python for the backend. The database functionality was powered by MongoDB. To ensure seamless communication
                    between the frontend and backend, I implemented Axios API, facilitating the efficient exchange of data. <br /><br />

                    These initiatives not only showcased my proficiency in building practical and functional solutions but also highlighted 
                    my ability to collaborate across various technical domains, contributing to the overall technological advancement within 
                    the Department of System and Computer Engineering.
                </p>

                <a href='https://sap-portal.vercel.app/' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a  href='https://github.com/parklicoste/self-assessment-portal-edit-delete' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> React JS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Pymongo Flask</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios API Requests</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> MongoDB Collection</p>
                    </div>
                </div>
            </div>
        <Link href='/#projects' className='underline cursor-pointer'>Back</Link>
        </div>
        
    </div>
  )
}

export default sapportal