import React from "react";

function HowWeOperateSection2() {
  return (
    <div className="bg-[#111110] min-h-screen flex flex-col relative" >
      <img src="/waves.svg" alt="www1" className="absolute left-0 z-[-10px]" />

      {/* content */}
      <div className="flex ml-[16%] justify-between flex-grow pt-14">
        <div className="flex flex-col pt-44 text-[#FFFFFF80]">
          <p className="font-UberMoveMedium font-medium text-6xl">
            TranXIT makes sending <span className="text-Primary">courier</span>{" "}
            <br />
            easier with <span className="text-white">
              powerful bidding
            </span>{" "}
            <br />
            <span className="text-white">system</span> and{" "}
            <span className="text-white">seamless tracking</span>{" "}
            <span className="text-Primary">_</span>
          </p>

          <div className="flex gap-14 mt-32 text-[#FFFFFF]">
            <div className="flex gap-6">
              <div className="pt-2">
                <img src="/half-circles.svg" width={36} alt="www1" height={36} />
              </div>
              <div className="max-w-[360px]">
                TranXIT&apos;s innovative bidding system for courier
                job requests ensures fair competition and optimal
                pricing for all shipments.
              </div>
            </div>

            <div className="flex gap-6">
              <div className="pt-2">
                <img src="/half-ciclesv2.svg" alt="www1" width={36} height={36} />
              </div>
              <div className="max-w-[360px]">
                As a web-based system, the platform provides seamless tracking which helps customers to track their packages worldwide with our partners.
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <img src="/dhl.png" alt="www1" />
        </div>
      </div>

      {/* footer */}
      <div className="flex ml-[16%] justify-between items-end bg-[#111110] text-[#FFFFFF]">
        <p className="font-Avenir font-normal text-base pb-9 max-w-[357px] leading-6">
          Trust TranXIT for reliable logistics solutions  backed by
          industry-leading technology and a  commitment to exceptional
          service.
        </p>
        <div className="bg-Primary text-[#111110] pt-6 pl-[26px] pr-28 ">
          <p className="font-UberMoveLight text-5xl  font-light">
            <span className="font-UberMoveBold">Join TranXIT&apos;s</span> courier network
            today and unlock <br /> a world of streamlined operations and
            enhanced <br /> efficiency through a single window.
          </p>
          <p className="flex font-UberMoveBold text-xl gap-[10px] pt-12 pb-9">
            Join TranXIT <img src="/arrowdown.svg" alt="arrow" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeOperateSection2;
