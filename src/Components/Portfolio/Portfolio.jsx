import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portSlide2 } from "../mockData/Data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Img1 from '../../assets/image/1.png'
import Img2 from '../../assets/image/2.png'
import Img3 from '../../assets/image/3.png'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PortSlide } from "../mockData/Data";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Portfolio = () => {
  
  return (
    <div className="w-screen px-15 mt-25">
      <div className="flex justify-center">
        <h1 className="justify-between items-center text-6xl font-Borel ">
            My Porfolio
        </h1>
      </div>
      
        {/* <div className="flex">
          <p className="text-4xl text-white/50 font-Macondo pt-15">Figma Project</p>
               
              <div className="grid md:grid-cols-2 grid-cols-1 my-40 gap-10">
                <div className="slide-container relative w-[350px] h-[120px] md:w-[700px] md:h-[350px]">
                  <div className="slider">
                    {portSlide2.map((item) => (
                        <div className="slide">
                          <a href={item.path} target="_blank"><img src={item.img1} alt={`slide_${item.path}`} className=""/></a>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end text-center items-center">
                  <p className="w-4/5">New Entry-level I am junior Web Developer skilled in React, TailwindCSS, Django, and Python.</p>
                </div>
              </div>
              
        </div> */}
    <div className="pb-15">
            <p className="text-4xl text-white/50 font-Macondo pt-15">Social Poster</p>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={4}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                    if (index >= 2 && index <= 4) {
                        // Add custom class names for styling
                        return `<span class="${className} custom-bullet bullet-${index}"></span>`;
                    }
                    return "";
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full "   // 👈 give Swiper a fixed height
                >
                {PortSlide.map((item, idx) => (
                    <SwiperSlide key={idx}>
                    <img
                        src={item.img}
                        alt={`slide_${idx}`}
                        className="w-full h-full object-contain"
                    />
                    </SwiperSlide>
                ))}
                <div className="slider-controler">
                    <div className="">
                    
                    </div>
                    <div className="swiper-pagination "></div>
                </div>
                </Swiper>
        </div>

        <p className="text-4xl text-white/50 font-Macondo pt-15">Figma Design</p>
        <div className="">
      <div className="flex justify-center mt-24 gap-10 flex-wrap">
        {portSlide2.map((item, index) => (
          <div
            className="flex justify-center group overflow-hidden rounded-2xl"
            key={index}
          >
            <div className="space-y-10">
              <div className="flex flex-col space-y-10 justify-end hover:bg-darkgreen001/20 hover:scale-105 px-10 pt-10 rounded-xl transition duration-300">
                <img
                  src={item.img1}
                  alt={`img-${index}`}
                  className="w-[700px] h-96 object-cover transform transition-transform duration-500 hover:rotate-1 rounded-xl cursor-pointer"
                  onClick={() => setSelectedImg(item.img1)}
                />
                <div className="flex items-center pb-5 justify-center">
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-Macondo text-center hover:underline text-2xl font-bold cursor-pointer z-50"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</div>
  );
}
export default Portfolio
