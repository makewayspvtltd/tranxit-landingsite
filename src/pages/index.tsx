import Layout from "@/components/Layout/Layout";
import Image from "next/image";
export default function Home() {
  return (
    <Layout>
      <div
        className="mx-3 flex flex-col rounded-t-[54px] rounded-b-md
        bg-gradient-to-r from-[#EAEAEA] via-[#EAEAEA] via-85%  to-Primary to-50%
      "
      >
        <div className="grid grid-cols-2 w-auto">
          <div>
            <div className="mt-40 ml-72">
              <div>
              <p className="text-[4.75rem] font-light font-UberMove text-left leading-[65px]">
                ALL IN ONE
              </p>
              <p className="text-[4.75rem] font-light font-UberMove text-left leading-[65px] whitespace-nowrap">
                SOLUTION FOR YOUR
              </p>
              <p
                className="text-[4.75rem] mt-1 font-Glendale
                font-bold leading-[65px] text-left"
              >
                FreIGhT fOrWArdInG
              </p>
              <p className="text-[4.75rem] font-light font-UberMove text-left leading-[65px]">
                NICHE_
              </p>
              </div>
              <div className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
              Your ultimate logistics and freight management solution. Streamline operations, optimize routes, and track shipments in real-time with our comprehensive platform. Sign up now for seamless logistics management, absolutely free!
              </div>
              <div>
              <div className="flex gap-3 mt-20">
                <button className="flex gap-4 justify-center rounded-lg bg-Primary py-[18px] px-[52px] font-UberMove font-extrabold text-lg leading-7"> <Image src="/arrowleft.svg" alt="arrow" width={27} height={27}></Image>  Request Delivery</button>
                <button className="flex gap-4 justify-center rounded-lg border border-Primary bg-transparent py-[18px] px-[52px] font-UberMove font-extrabold text-lg leading-7" ><Image src="/peoplecompany.svg" alt="arrow" width={27} height={27}></Image>  Own a Company?</button>
              </div>
              <p className="text-sm mt-5 text-[#11111080] font-Avenir font-normal text-left leading-7">
              No charges applies. Signing up and requesting delivery is completely free.
              </p>
              </div>

            </div>
          </div>  
          <div className="mt-10">
            <Image className="move-up" src="/truck.png" alt="Hero" width={1000} height={700} />
          </div>
        </div>
        <div className="flex justify-between bg-white ml-72 mt-7 py-14 px-10 clip-shape ">

          <div className="flex gap-4">
            <Image className="mb-2" src="/powerbid.svg" alt="scroll" width={50} height={50} />
            <div>
              <p className="font-UberMove font-bold text-xl text-[#111110]">Powerful Bid System</p>
              <p className="font-Avenir font-normal text-base text-[#11111080]">TranXIT&apos;s bid system revolutionises courier job <br></br> requests for optimal pricing, a power in your hands</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image className="mb-2" src="/costeffi.svg" alt="scroll" width={50} height={50} />
            <div>
              <p className="font-UberMove font-bold text-xl text-[#111110]">Cost Efficiency</p>
              <p className="font-Avenir font-normal text-base text-[#11111080]">Automates processes, optimizes routes, reduces <br></br> logistics costs effectively.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image className="mb-2" src="/enhanced.svg" alt="scroll" width={50} height={50} />
            <div>
              <p className="font-UberMove font-bold text-xl text-[#111110]">Enhanced Customer Experience</p>
              <p className="font-Avenir font-normal text-base text-[#11111080]">Enhances customer experience with real-time <br></br> tracking.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
