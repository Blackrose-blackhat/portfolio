"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsArrowUpRightSquare} from "react-icons/bs"
import SlideUp from './SlideUp'
const projects = [
  {
    name:"Fintelligent",
    description:"Fintelligent is a finance blog page made with react and firebase ",
    image:`/fintelligent.jpg`,
    github:"https://github.com/Blackrose-blackhat/fintelligent",
    link:"https://fintelligent-adfce.web.app/"
  },
  {
    name:"Academia Hub",
    description:"Academia Hub is a web app where all academics material are present. It even has a doubt section to ask a doubt. Currently it has 150+ users registered ",
    image:`/academia.jpg`,
    github:"https://github.com/Blackrose-blackhat/Academia_hub",
    link:"https://academia-hub.web.app/"
  },
  {
    name:"Scorekeeper",
    description:"Scorekeeper is a simple app made with flutter to take a track of scores ",
    image:`/scorekeeper1.jpeg`,
    github:"https://github.com/Blackrose-blackhat/scoreKeeper",
    link:""
  },
  
  

]

const ProjectSection = () => {
  return (
    
    <section id = "projects">
      <h1 className='text-center font-bold text-4xl'> Projects</h1>
      <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0' />
      <div className='flex flex-col space-y-20'>
        {projects.map((project,idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px '>
              <div className='  animate-slideUpCubiBezier animation-delay-2 flex flex-col md:flex-row md:space-x-12'>
                <div className=' mt-8 md:w-1/2'>
                  <Link href={project.link}>
                  <Image src={project.image} alt={project.name} width={1000} height={100} className='rounded-xl shadow-xl hover:opacity-70' />
                  </Link>
                </div>
                <div className=' mt-12 md:w-1/2'>
                  <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                  <p
                  className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'
                  >{project.description}</p>
                  <div className='flex flex-row align-bottom space-x-6'>
                    <Link href={project.github} target='_blank'>
                      <BsGithub 
                      size={30} 
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                       />
                    </Link>
                    <Link href={project.link} target='_blank'>
                    <BsArrowUpRightSquare
                      size={30} 
                      className='hover:-translate-y-1 transition-transform cursor-pointer'
                       />
                    </Link>

                  </div>
                </div>
              </div>
              </SlideUp>
            </div>
            
          )
        })}
      </div>
      
    </section>
    
    
  )
}

export default ProjectSection