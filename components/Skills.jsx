import React from 'react';
import SkillItem from './SkillItem';
import html_logo from '../public/assets/skills/html.png';
import css_logo from '../public/assets/skills/css.png';
import javascript_logo from '../public/assets/skills/javascript.png';
import react_logo from '../public/assets/skills/react.png';
import tailwind_logo from '../public/assets/skills/tailwind.png';
import node_logo from '../public/assets/skills/node.png';
import github_logo from '../public/assets/skills/github1.png';
import mongo_logo from '../public/assets/skills/mongo.png';
import python_logo from '../public/assets/skills/python.png';
import java_logo from '../public/assets/skills/java.png';
import flask_logo from '../public/assets/skills/flask.png';
import linux_logo from '../public/assets/skills/linux.png';
import mysql_logo from '../public/assets/skills/mysql.png';
import perforce_logo from '../public/assets/skills/perforce.png'
import teamcity_logo from '../public/assets/skills/teamcity.png';
import csharp_logo from '../public/assets/skills/cshp.png';
import cplusplus_logo from '../public/assets/skills/cpp.png';
import jenkins_logo from '../public/assets/skills/jenkins.png';
import docker_logo from '../public/assets/skills/docker.png';
import postman_logo from '../public/assets/skills/postman.png';
import nextjs_logo from '../public/assets/skills/nextjs.png';
import vercel_logo from '../public/assets/skills/vercel.png';
import qt_logo from '../public/assets/skills/qt.png';




export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What can I do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <SkillItem logo={html_logo} name="HTML"/>
                <SkillItem logo={css_logo} name="CSS"/>
                <SkillItem logo={javascript_logo} name="Javascript"/>
                <SkillItem logo={react_logo} name="React JS"/>
                <SkillItem logo={nextjs_logo} name="Next JS"/>
                <SkillItem logo={tailwind_logo} name="Tailwind"/>
                <SkillItem logo={github_logo} name="GitHub"/>
                <SkillItem logo={node_logo} name="Node JS"/>
                <SkillItem logo={mongo_logo} name="MongoDB"/>
                <SkillItem logo={python_logo} name="Python"/>
                <SkillItem logo={cplusplus_logo} name="C++"/>
                <SkillItem logo={csharp_logo} name="C#"/>
                <SkillItem logo={java_logo} name="Java"/>
                <SkillItem logo={flask_logo} name="Flask"/>
                <SkillItem logo={teamcity_logo} name="Team-City"/>
                <SkillItem logo={vercel_logo} name="Vercel"/>
                <SkillItem logo={linux_logo} name="Linux"/>
                <SkillItem logo={mysql_logo} name="MySQL"/>
                <SkillItem logo={perforce_logo} name="Perforce"/>
                <SkillItem logo={jenkins_logo} name="Jenkins"/>
                <SkillItem logo={docker_logo} name="Docker"/>
                <SkillItem logo={postman_logo} name="Postman"/>
                <SkillItem logo={qt_logo} name="QT"/>
            </div>
        </div>

    </div>
  )
}

export default Skills;