import React from 'react';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri';
import webcatImg from '../public/assets/projects/webcat.png';
import Link from 'next/link';

const webcat = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' src={webcatImg} layout='fill' objectFit='cover' alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Web-CAT - An Automated Grading Tool</h2>
                    <h3 className='absolut'>Docker / Apache Tomcat </h3>

                </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='pt-4'>Project</p> 
                <h2 className='pt-4'>Overview</h2>
                <p className='pt-4'> In a virtual machine environment, I orchestrated the installation of Docker and fine-tuned a Docker image to ensure optimal
                     performance, aligning with the specific requirements of the Web-CAT application. Taking the initiative further, 
                     I seamlessly deployed Web-CAT within Docker by integrating the Apache 
                     Tomcat Server with Java Version 8 and a MySQL database. <br /> <br />

                     To contribute to the broader community, I meticulously gathered data and information from diverse platforms, 
                     culminating in the creation of comprehensive installation and configuration guides. These guides were shared on 
                     Medium.com, serving as a valuable resource for others seeking to navigate the intricacies of Web-CAT deployment. <br /><br />

                    Demonstrating effective communication skills, I articulated detailed, step-by-step instructions and 
                    supplemented them with command-line examples. This not only facilitated the understanding of the installation 
                    process but also showcased my commitment to knowledge sharing within the community. <br /> <br />

                    Recognizing the diverse preferences for learning, I broadened the reach of this valuable content by 
                    publishing both textual and video documentation on Medium.com and YouTube. This multi-faceted approach 
                    aimed to cater to a wider audience, ensuring accessibility and clarity in comprehending the deployment 
                    process of Web-CAT within a Docker environment.
                </p>
                
                <a href='https://www.youtube.com/watch?v=dolWwg7n4u8&t=99s&ab_channel=KhushalSingh' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a  href='https://medium.com/installing-web-cat-documentation' target='_blank'rel='noreferrer'>
                    <button className='px-8 py-2 mt-4'>Blog Post</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Docker Image</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Apache Tomcat</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Java 8</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MySQL</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Web-CAT.war file</p>
                    </div>
                </div>
            </div>
        <Link href='/#projects' className='underline cursor-pointer'>Back</Link>
        </div>
        
    </div>
  )
}

export default webcat