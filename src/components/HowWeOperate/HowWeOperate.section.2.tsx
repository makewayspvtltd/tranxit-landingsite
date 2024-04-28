import React from "react";

function HowWeOperateSection2() {
  return (
    <div className="bg-[#111110] min-h-screen flex flex-col relative">
      <img src="/waves.svg" alt="www1" className="absolute left-0 z-[-10px]" />

      {/* content */}
      <div className="flex ml-[16%] justify-between flex-grow">
        <div className="flex flex-col pt-44 text-[#FFFFFF80]">
          <p className="font-UberMove font-medium text-6xl">
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

          <div className="flex gap-14 mt-32">
            <div className="flex gap-6">
              <img src="/half-circles.svg" alt="www1" />
              <p>
                TranXIT&apos;s innovative bidding system for courier <br />
                job requests ensures fair competition and optimal <br />
                pricing for all shipments.
              </p>
            </div>

            <div className="flex gap-6">
              <img src="/half-circles.svg" alt="www1" />
              <p>
                TranXIT&apos;s innovative bidding system for courier <br />
                job requests ensures fair competition and optimal <br />
                pricing for all shipments.
              </p>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <img src="/dhl.png" alt="www1" />
        </div>
      </div>

      {/* footer */}
      <div className="flex ml-[16%] justify-between items-end bg-[#111110] text-[#FFFFFF]">
        <p className="font-Avenir font-normal text-base p-5">
          Trust TranXIT for reliable logistics solutions <br /> backed by
          industry-leading technology and a <br /> commitment to exceptional
          service.
        </p>
        <div className="bg-Primary text-[#111110] p-5">
          <p className="font-UberMove text-5xl font-extralight pr-24">
            <span className="font-bold">Join TranXIT&apos;s</span> courier network
            today and unlock <br /> a world of streamlined operations and
            enhanced <br /> efficiency through a single window.
          </p>
          <p className="flex font-UberMove font-bold text-xl gap-[10px] pt-10">
            Join TranXIT <img src="/arrowdown.svg" alt="arrow" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeOperateSection2;
