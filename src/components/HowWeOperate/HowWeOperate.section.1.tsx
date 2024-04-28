import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

function HowWeOperate() {
  return (
    <div className="flex flex-col bg-[#111110] text-white h-screen">
      <div className="flex pt-20 pl-[16%] gap-40">
        <div>
          <div className="font-Avenir font-medium text-[13px] py-4 border-b border-[#60606B] text-[#FFFFFFBF] ">
            HOW WE OPERATE
          </div>
          <div className="font-UberMove font-bold text-[40px] mt-4 ">
            TranXIT platform is providing <br />
            for a diverse range of <br />
            services at your disposal
          </div>
        </div>

        <div className="font-Avenir font-normal text-base text-[#FFFFFFBF] ">
          TranXIT offers a comprehensive suite of logistics and courier
          services, covering a wide <br /> range of areas including freight
          forwarding, inventory management, route optimization, <br /> real-time
          tracking, and seamless communication. With TranXIT, users can
          effortlessly <br /> manage all aspects of their shipping needs within
          a single platform, ensuring efficiency, <br /> transparency, and
          reliability every step of the way.
        </div>
      </div>

      <div className="mt-[2%] pl-[16%] h-full overflow-hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="/www1.png"
              alt="www1"
              className="w-[49rem] h-[36rem] pb-12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/www2.png"
              alt="www1"
              className="w-[49rem] h-[36rem] pb-12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/www3.png"
              alt="www1"
              className="w-[49rem] h-[36rem] pb-12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/www4.png"
              alt="www1"
              className="w-[49rem] h-[36rem] pb-12"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HowWeOperate;
