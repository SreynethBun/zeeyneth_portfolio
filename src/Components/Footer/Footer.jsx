import React from 'react'
import { FooterData } from '../mockData/Data'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center border-0 h-full w-full mt-auto text-white p-4 py-10 space-y-5">
        <div className="flex justify-center items-center gap-8">
            {
  FooterData.map((item, index) => (
    <li
      key={index}
      className="flex hover:scale-105 cursor-pointer"
      onClick={() => window.open(item.path, "_blank")}
    >
      <p className="text-gold-001 rounded-3xl text-4xl">{item.icon}</p>
    </li>
  ))
}
        </div>
        <p className='text-center text-white/70 font-light'>&copy; 2025 Personal Portfolio. All rights reservered.</p>
    </div>
  )
}

export default Footer