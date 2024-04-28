import React from 'react'
import Drawer from "./Assets/Drawer.png"
import Arrow from "./Assets/arrow-right.svg"
import Image from 'next/image'
import mobile from "./Assets/mobile.png"
import chart from "./Assets/chart.png"
function WorkingProcess() {
    return (
        <div className='flex px-[20.6875rem] py-32 flex-col '>

            <div className='flex justify-between gap-14'>
                <span className='font-Avenir font-normal text-[18px] leading-7 text-[#111110]'>
                    TranXIT facilitates connections between companies and their customers, rather than serving as a freight forwarder. </span>


                <span className='font-Avenir font-normal text-[18px] leading-7 text-[#11111'>
                    TranXIT serves as a dynamic portal, connecting businesses and customers in the realm of logistics and freight forwarding. Through our intuitive platform, users gain access to a seamless experience, facilitating everything from job requests and bidding to real-time tracking and communication.
                </span>
            </div>


            <div className='bg-[#EFF0F1] p-5 pr-0 rounded-[8px] mt-28 flex max-h-[378px]  justify-between  gap-64 overflow-hidden flex-shrink-0'>
                <span className='basis-[60%] flex flex-col gap-12'>
                    <span className='font-Avenir font-normal text-[18px] leading-7 text-[#11111 min-w-[430px]'>
                        TranXIT's bidding system lets courier companies silently compete for job requests. Users pick the best bid for their needs, all done quietly and efficiently. TranXIT ensures fair competition and optimal pricing, making shipping hassle-free for all parties involved.
                    </span>

                    <div className='flex  gap-4'>
                        <span className='font-UberMoveBold font-bold text-[18px]'>
                            I Want To Delivery A Parcel
                        </span>

                        <Image src={Arrow} alt="arrow" quality={100} />
                    </div>
                </span>

                <div className='pt-12 '>
                    <Image src={Drawer} alt="drawer" quality={100}  className='border-t-[7px] border-l-[7px] w-[700px]  border-[#00000026] rounded-[12px] scale-125' />


                </div>
            </div >

           <div className='flex gap-8 '>
           <div className='bg-[#EFF0F1] p-5 pb-0 pr-0 rounded-[8px] mt-[2rem] flex  justify-between max-h-[844px]  gap-36  flex-shrink-0 flex-col basis-[50%]'>
                <span className=' flex flex-col gap-12 '>
                    <span className='font-Avenir font-normal text-[18px] leading-7 text-[#11111 min-w-[430px] basis-7 w-1'>

                    Keep a record of your earning as a Courier or Logistics admin and maintain a record of your customers and offerings.
                    </span>

                    <div className='flex  gap-4'>
                        <span className='font-UberMoveBold font-bold text-[18px]'>
                          Learn more
                        </span>

                        <Image src={Arrow} alt="arrow" quality={100} />
                    </div>
                </span>

                <div className='pt-[22px] flex justify-end pl-16'>
                    <Image src={chart} alt="chart" quality={100} className='min-h-[484px]' />


                </div>
            </div >

            <div className='bg-[#EFF0F1] p-5 pb-0 pr-0 rounded-[8px] mt-[2rem] flex  justify-between  gap-36 max-h-[844px]   flex-col  max-w-[635px]  overflow-hidden basis-[50%]'>
                <span className=' flex flex-col gap-12 '>
                    <span className='font-Avenir font-normal text-[18px] leading-7 text-[#11111 min-w-[430px] basis-7 w-1'>

                    TranXIT mobile app offers convenient access to our comprehensive logistics platform, empowering users to manage shipments and track deliveries on-the-go with ease.                    </span>

                    <div className='flex  gap-4'>
                        <span className='font-UberMoveBold font-bold text-[18px]'>
                        Get to know about TranXIT Mobile
                        </span>

                        <Image src={Arrow} alt="arrow" quality={100} />
                    </div>
                </span>

                <div className='pt-[22px] flex justify-center max-w-[370px] '>
                    <Image src={mobile} alt="chart"  quality={100} className='max-w-[950px] scale-90' />


                </div>
            </div >
           </div>

        </div>
    )
}

export default WorkingProcess