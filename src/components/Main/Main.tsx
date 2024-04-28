import React from 'react'
import Image from 'next/image'
import FeatureItem from '@/Utils/Utilities'

function Main() {
  return (
    <div className="mx-3 flex flex-col rounded-t-[54px] rounded-b-md bg-gradient-to-r from-[#EAEAEA] via-[#EAEAEA] via-85% to-Primary to-50%">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:mt-40 lg:ml-72">
        <div>
          <p className="text-4.75xl lg:text-6xl font-light font-UberMove text-left leading-[65px]">
            ALL IN ONE
          </p>
          <p className="text-4.75xl lg:text-6xl font-light font-UberMove text-left leading-[65px] whitespace-nowrap">
            SOLUTION FOR YOUR
          </p>
          <p className="text-4.75xl lg:text-6xl mt-1 font-Glendale font-bold leading-[65px] text-left">
            FreIGhT fOrWArdInG
          </p>
          <p className="text-4.75xl lg:text-6xl font-light font-UberMove text-left leading-[65px]">
            NICHE_
          </p>
        </div>
        <div className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
          Your ultimate logistics and freight management solution. Streamline operations, optimize routes, and track shipments in real-time with our comprehensive platform. Sign up now for seamless logistics management, absolutely free!
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-3 mt-20">
            <button className="flex items-center justify-center rounded-lg bg-Primary py-[18px] px-[52px] font-UberMove font-extrabold text-lg leading-7">
              <Image src="/arrowleft.svg" alt="arrow" width={27} height={27} />
              Request Delivery
            </button>
            <button className="flex items-center justify-center rounded-lg border border-Primary bg-transparent py-[18px] px-[52px] font-UberMove font-extrabold text-lg leading-7">
              <Image src="/peoplecompany.svg" alt="arrow" width={27} height={27} />
              Own a Company?
            </button>
          </div>
          <p className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
            No charges apply. Signing up and requesting delivery is completely free.
          </p>
        </div>
      </div>
      <div className="hidden lg:block mt-10">
        <img src="/truck.png" alt="Hero"/>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between bg-white lg:ml-72 mt-7 py-14 px-10 clip-shape">
      <FeatureItem imageSrc="/powerbid.svg" title="Powerful Bid System" description="TranXIT's bid system revolutionizes courier job requests for optimal pricing, a power in your hands" />
      <FeatureItem imageSrc="/costeffi.svg" title="Cost Efficiency" description="Automates processes, optimizes routes, reduces logistics costs effectively" />
      <FeatureItem imageSrc="/enhanced.svg" title="Enhanced Customer Experience" description="Enhances customer experience with real-time tracking" />
    </div>
  </div>
  )
}

export default Main