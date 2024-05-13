import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

function HowWeOperate() {
  return (
    <div className="flex flex-col bg-[#111110] text-white min-h-screen">
      <div className="flex pt-20 pl-[5%] md:pl-[16%] gap-8 md:gap-40">
        <div>
          <div className="font-Avenir font-medium text-[13px] pb-4 border-b border-[#60606B] text-[#FFFFFFBF] ">
            HOW WE OPERATE
          </div>
          <div className="font-UberMoveBold text-[24px] md:text-[40px] mt-4 ">
            TranXIT platform is providing <br />
            for a diverse range of <br />
            services at your disposal
          </div>
        </div>

        <div className="font-Avenir font-normal text-sm md:text-base text-white text-opacity-60 leading-7">
          TranXIT offers a comprehensive suite of logistics and courier
          services, covering a wide <br /> range of areas including freight
          forwarding, inventory management, route optimization, <br /> real-time
          tracking, and seamless communication. With TranXIT, users can
          effortlessly <br /> manage all aspects of their shipping needs within
          a single platform, ensuring efficiency, <br /> transparency, and
          reliability every step of the way.
        </div>
      </div>

      <div className="mt-[2%] pl-[5%] md:pl-[16%] h-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
                    <SwiperSlide>
            <div className=" relative">
              <div className=" p-5 absolute z-1 gap-2">
              <p className=" font-Avenir font-medium text-[13px]">
              LOGISTICS SERVICES
              </p>
              <p className=" font-UberMoveBold text-[39px] leading-10">
              Transiting goods & material inland & outwards
              </p>
              </div>

              <div className=" absolute z-1 p-5 top-[26rem]">
              <p className=" font-Avenir font-normal text-base">Transiting goods and materials inland and outwards traditionally involves manual processes and fragmented systems, whereas TranXIT offers a streamlined, digital platform for seamless logistics management and freight forwarding.</p>
              </div>

            <img
              src="/www1.png"
              alt="www1"
              className="w-[49rem] h-[36rem] pb-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className=" p-5 absolute z-1 gap-2">
              <p className=" font-Avenir font-medium text-[13px]">
              COURIER SERVICES
              </p>
              <p className=" font-UberMoveBold text-[39px] leading-10">
              Send parcels anywhere with your preferred price              </p>
              </div>

              <div className=" absolute z-1 p-5 top-[26rem]">
              <p className=" font-Avenir font-normal text-base">Unlike traditional methods, TranXIT&apos;s innovative bidding system allows users to send parcels to any destination at competitive prices, offering flexibility and cost optimisation. Companies find your jobs and bid over them and with a power of your choice, you can move freight anywhere.</p>
              </div>

            <img
              src="/www2.png"
              alt="www2"
              className="w-[49rem] h-[36rem] pb-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className=" p-5 absolute z-1 gap-2">
              <p className=" font-Avenir font-medium text-[13px]">
              MANAGE FREIGHT FORWARDING
              </p>
              <p className=" font-UberMoveBold text-[39px] leading-10">
              Manage your customers and shippings within one-roof
              </p>
              </div>

              <div className=" absolute z-1 p-5 top-[26rem]">
              <p className=" font-Avenir font-normal text-base">While traditional methods require companies to manage customers and shipments separately, TranXIT offers a unified platform where businesses can efficiently handle both aspects under one roof, streamlining operations and enhancing customer satisfaction.</p>
              </div>

            <img
              src="/www3.png"
              alt="www3"
              className="w-[49rem] h-[36rem] pb-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className=" p-5 absolute z-1 gap-2">
              <p className=" font-Avenir font-medium text-[13px]">
              SEAMLESS TRACKING 
              </p>
              <p className=" font-UberMoveBold text-[39px] leading-10">
              Keep track with our partners’ provided tracking information of your cargo              </p>
              </div>

              <div className=" absolute z-1 p-5 top-[26rem]">
              <p className=" font-Avenir font-normal text-base">TranXIT provides a seamless and user-friendly tracking experience, empowering customers to effortlessly monitor their shipments in real-time, guaranteeing transparency, reliability, and peace of mind throughout the delivery journey.</p>
              </div>

            <img
              src="/www4.png"
              alt="www4"
              className="w-[49rem] h-[36rem] pb-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HowWeOperate;