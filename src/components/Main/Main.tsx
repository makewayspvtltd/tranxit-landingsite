import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FeatureItem from '@/Utils/Utilities';
import Navbar from '../Navbar/Navbar';

function Main() {
  const [isFloating, setIsFloating] = useState(false);
  const mainRef = useRef(null); // Ref to the main section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // Set isFloating to true if the main section is NOT visible
      setIsFloating(!entry.isIntersecting);
    }, { threshold: 0.1 }); // threshold is the percentage of visibility, 0.1 means at least 10% should be visible

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, [mainRef]);

  const requestHandler = () => { 
    window.location.href = 'https://app.tranxit.io/';
   }
  const companyHandler = () => { 
    window.location.href = 'https://app.tranxit.io/';
   }

  return (
    < div className='h-screen' ref={mainRef}>
      <Navbar isFloating={isFloating} />
      <div className="mx-3 flex flex-col rounded-t-[54px] rounded-b-md bg-gradient-to-r from-[#EAEAEA] via-[#EAEAEA] via-85% to-Primary to-50% h-custom justify-between" >
        <div className="flex flex-row items-center justify-between">
          <div className="text flex-1 p-4 lg:mt-32 lg:ml-72">
            <div>
              <p className="font-light font-UberMoveLight text-left text-textPrimary leading-[67px] "
                style={{ fontSize: 'clamp(2rem, 3.1vw + 1rem, 5rem)' }}>
                ALL IN ONE
              </p>
              <p className="font-light font-UberMoveLight text-left  leading-[67px] whitespace-nowrap text-textPrimary "
                style={{ fontSize: 'clamp(2rem, 3.1vw + 1rem, 5rem)' }}>
                SOLUTION FOR YOUR
              </p>

              <p className="mt-1 font-Glendalebold text-left text-[#383837] leading-[70px]" style={{ fontSize: 'clamp(2rem, 3.1vw + 1rem, 5rem)' }}>
                FreIGHT fOrWARDING
              </p>


              <p className="font-light font-UberMoveLight text-left leading-[55px] text-textPrimary"
                style={{ fontSize: 'clamp(2rem, 3.1vw + 1rem, 5rem)' }}>
                NICHE_
              </p>
            </div>
            <div className="text-sm sm:text-base mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
              Your ultimate logistics and freight management solution. Streamline operations, optimize routes, and track shipments in real-time with our comprehensive platform. Sign up now for seamless logistics management, absolutely free!
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-11">
              <button onClick={requestHandler} className="flex items-center gap-[18px] justify-center rounded-lg bg-Primary py-[18px] px-[52px] font-UberMoveBold text-lg leading-7 whitespace-nowrap hover:opacity-75">
                <Image src="/arrowleft.svg" alt="arrow" width={27} height={27} />
                Request A Delivery
              </button>
              <button onClick={companyHandler} className="flex items-center gap-[18px] justify-center rounded-lg border whitespace-nowrap border-Primary bg-transparent py-[18px] px-[52px] font-UberMoveBold text-lg leading-7 hover:opacity-70">
                <Image src="/peoplecompany.svg" alt="arrow" width={27} height={27} />
                Own a Company?
              </button>
            </div>
            <p className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7  ">
              No charges apply. Signing up and requesting delivery is completely free.
            </p>
          </div>
          <div className="image flex-1">
            <Image
              src="/truck.png"
              alt="Descriptive Alt Text"
              width={1000}
              height={1000}
              layout="responsive"
            />
          </div>

        </div>
        <div className="flex ml-[16%] gap-[3.625rem] lg:flex-row justify-between bg-white pt-8 pb-7 pl-10 pr-3 clip-shape">
          <FeatureItem imageSrc="/powerbid.svg" title="Powerful Bid System" description="TranXIT's bid system revolutionizes courier job requests for optimal pricing, a power in your hands" />
          <FeatureItem imageSrc="/costeffi.svg" title="Cost Efficiency" description="Automates processes, optimizes routes, reduces logistics costs effectively" />
          <FeatureItem imageSrc="/enhanced.svg" title="Enhanced Customer Experience" description="Enhances customer experience with real-time tracking" />
        </div>
      </div>
    </div>
  );
}

export default Main;
