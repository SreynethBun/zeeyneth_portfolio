import React from 'react'
import { ContactData } from '../mockData/Data'
const Contact = () => {
  return (
    <div className="md:mt-16 mt-35 mb-36 px-10 md:mx-96 mx-25">
      <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-7xl font-Borel">Contact Me</h1>
            
         <div className="flex flex-col mt-10 justify-center items-center w-full md:max-w-4xl">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 w-full">
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="Email"
              placeholder="Email"
              className="bg-gray-300 py-3 text-[18px] rounded-3xl px-10 md:pr-32 text-black/50 hover:border-white hover:text-gray-200 mt-5 w-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="Name"
              placeholder="Name"
              className="bg-gray-300 py-3 text-[18px] rounded-3xl px-10 md:pr-32 text-black/50 hover:border-white hover:text-gray-200 mt-5 w-full"
            />
          </div>
        </div>
        <button className="mt-10 py-4 px-10 bg-amber-600 hover:bg-purple-950 hover:underline text-xl rounded-2xl text-white font-bold">
          <a href="">SUBMIT</a>
        </button>
      </div>
          <div className="bg-white/10 text-center rounded-4xl px-10 pb-16 pt-10 mt-10 w-full mx-auto z-50">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
              {
                ContactData.map((item, index) =>(
                  <div className="flex flex-col items-center">
                    <a
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-xl bg-amber-600 rounded-full p-4 font-sans"
                                      >
                                        <h2 className="text-white text-4xl">{item.icon}</h2>
                                      </a>
                                      <div className="flex flex-col justify-center items-center mt-3">
                                        <h3 className="text-xl text-white font-bold">{item.title}</h3>
                                        <p className="text-sm text-gray-300 hidden md:gap-2 gap-5 md:block mt-1">
                                          {item.descrition}
                                        </p>
                                      </div>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact