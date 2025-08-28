import React from 'react'
import { Info, Skills } from '../mockData/Data'
import CV from '../../assets/BunSreyneth_CV.pdf'
import Profile from '../../assets/image/AboutProfile.png'
import { MdFileDownload } from "react-icons/md";


const About = () => {
  return (
    <div className=' md:mt-16 mt-30 mx-5 md:mx-25 space-y-5'>
      <h1 className='text-6xl py-10 font-Borel text-blue-001 text-center'>About Me</h1>
      
        <div className="grid md:grid-cols-2 grid-cols-1 px-2 md:px-15">
          <div className="p-4 text-left space-y-9">
            <p className='text-3xl font-Mozila text-blue-001'>Personal Information</p>
            {
              Info.map((item, index) =>(
                <div key={index} className="flex flex-col">
                  <p className='text-xl text-blue-001 font-normal'>{item.title}</p>
                </div>
              ))
            }
            <button className='bg-amber-600 rounded-2xl p-3'>
              <a href={CV} target='_blank' className='text-blue-001 hover:underline font-Mozila flex gap-2 hover:text-white'>
                Download CV <span ><MdFileDownload size={20}/></span>
              </a>
            </button>
          </div>
          <div className="flex items-start md:mt-0 md:justify-end mr-15">
                    <img src={Profile} alt="Profile Image" className='w-96 md:w-9/12 rounded-full'/>
                  </div>
        </div>

      <div className="flex flex-col md:justify-end items-start mb-10 space-y-10 ">
        <p className='text-3xl text-blue-001 font-Mozila'>My Skills</p>
          <div  className="grid md:grid-cols-2 gap-5">
            {
              Skills.map((item, index) =>(
                <div key={index} className="bg-white/10 backdrop-blur-sm border
                 border-gold-001/50 px-5 pb-5 cursor-pointer rounded-lg 
                 hover:shadow-2xl hover:-translate-x-1 duration-500 space-y-5">
                  <div className="flex space-x-5 items-center">
                    <img src={item.image} alt="Skills Image" 
                    className='relative w-20  md:h-20 rounded-full'/>
                    <div className="space-y-3 text-blue-001">
                      <p className='text-2xl pt-5 font-Mozila'>{item.title}</p>
                      <p className='text-left'>{item.description}</p>
                    </div>
                  </div>
                  
                </div>
                
              ))
            }
          </div>
      </div> 
  
    </div>
  )
}

export default About