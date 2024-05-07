import React from 'react';
import Image from 'next/image';
import FeatureItem from '@/Utils/Utilities';

function Main() {
  return (
    <div className="h-[92.5vh] mx-3 flex flex-col rounded-t-[54px] rounded-b-md bg-gradient-to-r from-[#EAEAEA] via-[#EAEAEA] via-85% to-Primary to-50% " >
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:mt-32 lg:ml-72">
          <div>
            <p className="text-[4.75rem]  font-light font-UberMoveLight text-left leading-[65px] text-textPrimary">
              ALL IN ONE
            </p>
            <p className="text-[4.75rem] mb-3 font-light font-UberMoveLight text-left leading-[65px] whitespace-nowrap text-textPrimary">
              SOLUTION FOR YOUR
            </p>
            <p className="text-[4.75rem]   mt-1 font-Glendalebold  leading-[65px] text-left text-[#383837] ">
              FreIGhT fOrWArdInG
            </p>
            <p className="text-[4.75rem] font-light font-UberMoveLight text-left leading-[65px] text-textPrimary">
              NICHE_
            </p>
          </div>
          <div className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
            Your ultimate logistics and freight management solution. Streamline operations, optimize routes, and track shipments in real-time with our comprehensive platform. Sign up now for seamless logistics management, absolutely free!
          </div>
          <div>
            <div className="flex flex-col lg:flex-row gap-3 mt-11">
              <button className="flex items-center gap-[18px] justify-center rounded-lg bg-Primary py-[18px] px-[52px] font-UberMoveBold text-lg leading-7">
                <Image src="/arrowleft.svg" alt="arrow" width={27} height={27} />
                Request A Delivery
              </button>
              <button className="flex items-center gap-[18px] justify-center rounded-lg border border-Primary bg-transparent py-[18px] px-[52px] font-UberMoveBold text-lg leading-7">
                <Image src="/peoplecompany.svg" alt="arrow" width={27} height={27} />
                Own a Company?
              </button>
            </div>
            <p className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7 mb-6">
              No charges apply. Signing up and requesting delivery is completely free.
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-10 w-full h-full">
          <Image src="/truck.png" alt="Hero" layout='responsive' width={0} height={0} />
        </div>
      </div>
      <div className="flex ml-[16%]  gap-[3.625rem] lg:flex-row justify-between bg-white  pt-12 pb-9 pl-10 pr-3 clip-shape ">
        <FeatureItem imageSrc="/powerbid.svg" title="Powerful Bid System" description="TranXIT's bid system revolutionizes courier job requests for optimal pricing, a power in your hands" />
        <FeatureItem imageSrc="/costeffi.svg" title="Cost Efficiency" description="Automates processes, optimizes routes, reduces logistics costs effectively" />
        <FeatureItem imageSrc="/enhanced.svg" title="Enhanced Customer Experience" description="Enhances customer experience with real-time tracking" />
      </div>
    </div>
  );
}

export default Main;
