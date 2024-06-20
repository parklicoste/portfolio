import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaBriefcase } from 'react-icons/fa';



const resume = () => {
  return (
    <>
      <Head>
        <title>Khushal | Resume</title>
        <meta
          name='description'
          content='I’m a Full-Stack Software developer specializing in building (and occasionally designing) exceptional digital experiences.'/>
          <link rel="shortcut icon" href='assets/Navlogofinal.png' />
      </Head>

      <div className='max-w-[1240px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume <FaBriefcase className="mx-auto inline-block w-10 mb-3" /></h2>
        
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Khushal Kumar Singh</h2>
          <div className='flex'>
            <a href='https://www.linkedin.com/in/khushalksingh/' target='_blank' rel='noreferrer'>
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='https://github.com/parklicoste' target='_blank' rel='noreferrer'>
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>

      <section id="resume" className="text-gray-400 bg-gray-900 body-font max-w-[1240px] mx-auto p-2 pt-[120px]">
            
            <div className="container max-w-[1240px] px-5 py-10 mx-auto text-center lg:px-40">
              <embed  src='Khushal_Singh_Resume.pdf'  width="900px" height="800px" className='items-center'/>

            </div> 
        </section>
      
    </>
  );
};

export default resume;
