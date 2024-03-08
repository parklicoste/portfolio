import React from 'react';
import aceuniImg from '../public/assets/projects/aceuni_pic.png';
import shoppiesImg from '../public/assets/projects/shoppies.PNG';
import webcatImg from '../public/assets/projects/webcat.png';
import sapportalImg from '../public/assets/projects/crypto.jpg';
import ProjectItem from './ProjectItem';

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Shopify Challenge - Frontend' tech='Next JS' backgroundImg={shoppiesImg} projectUrl='/shoppies'/>
                <ProjectItem title='AceUni - Platform for students' tech='Next JS' backgroundImg={aceuniImg} projectUrl='/aceuni'/>
                <ProjectItem title='Web-CAT - Automated Grading Tool' tech='Apache Tomcat' backgroundImg={webcatImg} projectUrl='/webcat'/>
                <ProjectItem title='Self-Assessment Portal' tech='React JS' backgroundImg={sapportalImg} projectUrl='/sapportal'/>
            </div>
        </div>
    </div>
  )
}

export default Projects;
