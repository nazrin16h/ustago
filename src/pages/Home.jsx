import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHouse,
  faBroom,
  faScrewdriverWrench,
  faScissors,
  faStethoscope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHouzz } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="pt-10 space-y-10 max-w-[1400px] mx-auto">
      <div className="w-full h-60 md:h-[450px] px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full rounded-[30px] overflow-hidden shadow-md"
        >
          {/* Slide 1 */}
          <SwiperSlide className="bg-[url('/public/slider-foto-1.jpeg')] bg-cover bg-center flex items-center justify-between p-8 md:p-20">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[#1b1b1b] text-xl md:text-5xl font-bold">Up to 50% Off!</h2>
              <p className="text-[#1b1b1b] text-[14px] md:text-xl opacity-90 font-medium">
                Book Now to Avail the Offer
              </p>
              <button className="bg-[#fac406] text-white px-6 py-2 md:px-10 md:py-4 md:text-lg rounded-3xl font-bold mt-4 shadow-sm hover:scale-105 transition-transform">
                Book Service
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 2*/}
          <SwiperSlide className="bg-[url('/public/slider-foto-2.avif')] bg-cover bg-center flex items-center justify-between p-8 md:p-20">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[#1b1b1b] text-xl md:text-5xl font-bold">Beat the Heat!</h2>
              <p className="text-[#1b1b1b] text-[14px] md:text-xl opacity-90 font-medium">
                Pro AC Service
              </p>
              <button className="bg-[#fac406] text-white px-6 py-2 md:px-10 md:py-4 md:text-lg rounded-3xl font-bold mt-4 shadow-sm hover:scale-105 transition-transform">
                Book Service
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 3*/}
          <SwiperSlide className="bg-[url('/public/slider-foto-3.jpg')] bg-cover bg-center flex items-center justify-between p-8 md:p-20">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[#1b1b1b] text-xl md:text-5xl font-bold">No More Leaks!</h2>
              <p className="text-[#1b1b1b] text-[14px] md:text-xl opacity-90 font-medium">
                Expert Plumbing Solutions
              </p>
              <button className="bg-[#fac406] text-white px-6 py-2 md:px-10 md:py-4 md:text-lg rounded-3xl font-bold mt-4 shadow-sm hover:scale-105 transition-transform">
                Book Service
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Category */}
      <div className="px-4">
        <h3 className="text-xl md:text-2xl font-semibold pb-3 md:pb-6">Category</h3>
        <div className="flex flex-wrap justify-between items-center gap-5 md:gap-10">
          <div className="flex flex-col items-center">
            <span className="border transition-transform hover:scale-110 cursor-pointer border-[#feba4d] bg-[#feba4d] flex justify-center items-center w-10 h-10 md:w-20 md:h-20 rounded-[50%]">
              <FontAwesomeIcon className="text-white md:text-2xl" icon={faHouzz} />
            </span>
            <p className="text-[14px] md:text-lg mt-2">Interior</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="border transition-transform hover:scale-110 cursor-pointer border-[#c1d234] bg-[#c1d234] flex justify-center items-center w-10 h-10 md:w-20 md:h-20 rounded-[50%]">
              <FontAwesomeIcon className="text-white md:text-2xl" icon={faBroom} />
            </span>
            <p className="text-[14px] md:text-lg mt-2">Cleanning</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="border transition-transform hover:scale-110 cursor-pointer border-[#fdce05] bg-[#fdce05] flex justify-center items-center w-10 h-10 md:w-20 md:h-20 rounded-[50%]">
              <FontAwesomeIcon className="text-white md:text-2xl" icon={faScrewdriverWrench} />
            </span>
            <p className="text-[14px] md:text-lg mt-2">Handyman</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="border transition-transform hover:scale-110 cursor-pointer border-[#14a3df] bg-[#14a3df] flex justify-center items-center w-10 h-10 md:w-20 md:h-20 rounded-[50%]">
              <FontAwesomeIcon className="text-white md:text-2xl" icon={faStethoscope} />
            </span>
            <p className="text-[14px] md:text-lg mt-2">Healthcare</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="border transition-transform hover:scale-110 cursor-pointer border-[#8c7764] bg-[#8c7764] flex justify-center items-center w-10 h-10 md:w-20 md:h-20 rounded-[50%]">
              <FontAwesomeIcon className="text-white md:text-2xl" icon={faScissors} />
            </span>
            <p className="text-[14px] md:text-lg mt-2">Beauty</p>
          </div>
        </div>
      </div>

      {/* Popular Service */}
      <div className="px-4">
        <h3 className="text-xl md:text-2xl font-semibold pb-3 md:pb-6">Popular Service</h3>
        
        <div 
          className="flex flex-nowrap overflow-x-auto gap-5 md:gap-8 px-4 pb-5"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          <style>{`
            .flex-nowrap::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="border-0 flex-none w-64 md:w-80 bg-white rounded-3xl overflow-hidden px-4 py-5 shadow-sm">
            <img className="rounded-3xl h-40 md:h-52 w-full object-cover" src="/public/foto-1.jpeg" alt="foto" />
            <div className="flex flex-col gap-2">
              <div>
                <h5 className="text-[18px] md:text-[20px] font-semibold pt-5">
                  AC Cleanning at Home
                </h5>
                <p className="text-[#6d6d6d] text-[15px] md:text-[16px]">
                  Clean AC, save energy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-[18px] md:text-[20px] font-semibold">
                  $468 <span className="text-[14px] text-[#8b8b8b]">/hour</span>
                </h6>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-[#fbc128]" icon={faStar} />
                  <p className="text-[18px] md:text-[20px] font-semibold">4.7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 flex-none w-64 md:w-80 bg-white rounded-3xl overflow-hidden px-4 py-5 shadow-sm">
            <img className="rounded-3xl h-40 md:h-52 w-full object-cover" src="/public/foto-2.webp" alt="foto" />
            <div className="flex flex-col gap-2">
              <div>
                <h5 className="text-[18px] md:text-[20px] font-semibold pt-5">
                  AC Cleanning at Home
                </h5>
                <p className="text-[#6d6d6d] text-[15px] md:text-[16px]">
                  Clean AC, save energy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-[18px] md:text-[20px] font-semibold">
                  $468 <span className="text-[14px] text-[#8b8b8b]">/hour</span>
                </h6>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-[#fbc128]" icon={faStar} />
                  <p className="text-[18px] md:text-[20px] font-semibold">4.7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 flex-none w-64 md:w-80 bg-white rounded-3xl overflow-hidden px-4 py-5 shadow-sm">
            <img className="rounded-3xl h-40 md:h-52 w-full object-cover" src="/public/foto-3.jpeg" alt="foto" />
            <div className="flex flex-col gap-2">
              <div>
                <h5 className="text-[18px] md:text-[20px] font-semibold pt-5">
                  AC Cleanning at Home
                </h5>
                <p className="text-[#6d6d6d] text-[15px] md:text-[16px]">
                  Clean AC, save energy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-[18px] md:text-[20px] font-semibold">
                  $468 <span className="text-[14px] text-[#8b8b8b]">/hour</span>
                </h6>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-[#fbc128]" icon={faStar} />
                  <p className="text-[18px] md:text-[20px] font-semibold">4.7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 flex-none w-64 md:w-80 bg-white rounded-3xl overflow-hidden px-4 py-5 shadow-sm">
            <img className="rounded-3xl h-40 md:h-52 w-full object-cover" src="/public/foto-4.jpg" alt="foto" />
            <div className="flex flex-col gap-2">
              <div>
                <h5 className="text-[18px] md:text-[20px] font-semibold pt-5">
                  AC Cleanning at Home
                </h5>
                <p className="text-[#6d6d6d] text-[15px] md:text-[16px]">
                  Clean AC, save energy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-[18px] md:text-[20px] font-semibold">
                  $468 <span className="text-[14px] text-[#8b8b8b]">/hour</span>
                </h6>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-[#fbc128]" icon={faStar} />
                  <p className="text-[18px] md:text-[20px] font-semibold">4.7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 flex-none w-64 md:w-80 bg-white rounded-3xl overflow-hidden px-4 py-5 shadow-sm">
            <img className="rounded-3xl h-40 md:h-52 w-full object-cover" src="/public/foto-5.jpg" alt="foto" />
            <div className="flex flex-col gap-2">
              <div>
                <h5 className="text-[18px] md:text-[20px] font-semibold pt-5">
                  AC Cleanning at Home
                </h5>
                <p className="text-[#6d6d6d] text-[15px] md:text-[16px]">
                  Clean AC, save energy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-[18px] md:text-[20px] font-semibold">
                  $468 <span className="text-[14px] text-[#8b8b8b]">/hour</span>
                </h6>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-[#fbc128]" icon={faStar} />
                  <p className="text-[18px] md:text-[20px] font-semibold">4.7</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;