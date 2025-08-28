import React from 'react'
import CV from '../../assets/BunSreyneth_CV.pdf'
import Profile from '../../assets/image/Profile2.png'


const Home = () => {
  return (
    <div className="p-10 mb-[-90px] md:px-28 md:pt-10 pt-34 mx-auto flex flex-col min-h-screen items-center justify-between md:mt-25">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center space-y-5 mb-20 mt:15 mt-2">
        <div className="space-y-8">
         
            <p className='md:text-9xl text-5xl hidden md:flex font-Borel hover:scale-110'>Portfolio</p>
            
              <span className='text-3xl text-white/80 font-Macondo leading-25'>Hello my name is Sreyneth</span>
              <p className='font-extralight text-2xl leading-10'>
                Motivated career changer with a growing
                skill set in Software Engineer. Skilled for self
                learing in Python, Django, React, TailwindCSS.
                . Eager to contribute as a junior
                software engineer, with strong problemsolving skills and a commitment to
                continuous learning.
              </p>
            <div className="space-x-3">
              <button className='bg-amber-600 rounded-2xl p-3 '>
                <a href="/about" className='flex font-EduNsw text-xl gap-2 hover:underline'>More about me!</a>
              </button>
              <button className='bg-amber-600 rounded-2xl p-3 '>
                <a href={CV} target='_blank' className='flex font-EduNsw text-xl gap-2 hover:underline'>
                  Resume
                </a>
              </button>
            </div>
        </div>
        <div className="flex justify-center md:mt-10 md:justify-end mr-15  ">
          <img src={Profile} alt="Profile Image" className='w-72 md:w-11/12 rounded-full hover:rotate-6'/>
        </div>
      </div>
    </div>
  )
}

export default Home

