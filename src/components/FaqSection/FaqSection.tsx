
import React from 'react'
import Faq from "./Assets/Faq.jpg"
import Image from 'next/image'
import Dhl from "./Assets/Dhl.png"
import Fedex from "./Assets/Fedex.png"
import leopard from "./Assets/leopard.png"
import Tcs from "./Assets/Tcs.png"
import Trax from "./Assets/Trax.png"
import { accordionData } from "../../utills/accordionData"
import Play from "./Assets/play.svg"
import DynamicAccordion from '../Accordion/Accordion-component'
function FaqSection() {
    return (
        <div className='pt-[8.25rem] pb-[6.125rem]'>
            <div className='flex'>
                <div className='basis-[50%] bg-white  py-24 overflow-hidden'>
                    <Image src={Faq} alt="faq" className='w-[100%] scale-110 ' />
                </div>

                <div className='basis-[47%] pl-[6.125rem] pt-[6.125rem] pr-52  bg-[#F9F9F9]'>


                    <div className='flex items-center gap-3 font-Avenir font-normal text-[18px]'>
                        <Image src={Play} height={60} width={60} alt="faq" />
                        <span>
                            Watch & Learn
                        </span>
                    </div>

                    <h3 className='font-bold text-[38px] pt-[1rem]'>
                        Frequently asked questions
                    </h3>
                    <div className='pt-8'>

                        {accordionData.map((data, index) => (
                            <DynamicAccordion

                                question={data.question}
                                answer={data.anwser}
                            />
                        ))}
                    </div>
                </div>

            </div>


            <div className='flex pt-20 px-[19.25rem]  gap-36 '>

                <div className=''>
                    <span className='font-Avenir font-medium text-[13px] text-[#11111080]'>
                        OUR USERS BASE
                    </span>


                    <div className='flex items-center gap-3 font-Avenir font-normal text-[18px]'>

                        <h3 className='font-bold font-UberMoveBold  text-[38px] '>
                            Industry-leading partners in courier & logistics solutions.
                        </h3>
                    </div>
                </div>




                <div className='flex  flex-col  gap-12 basis-[90%]'>

                    <div>
                        <span className='font-Avenir font-normal text-[18px] '>
                            Discover the industry-leading courier and logistics companies partnering with TranXIT for seamless shipping solutions.
                        </span>
                    </div>
                    <div className=' grid grid-cols-3 gap-x-10  gap-y-12  basis[46%] justify-items-center items-center basis-[47%]'>
                        <div className='flex flex-col  h-[85px] justify-between'>
                            <Image src={Dhl} height={12} width={90} alt="faq" className='grayscale'  />

                            <span className='font-Avenir font-normal text-[18px] whitespace-nowrap '>
                                DHL Logistics & Courier </span>
                        </div>

                        <div className='flex flex-col h-[85px] justify-between'>
                            <Image src={Fedex} height={18} width={68} alt="faq" className='grayscale' />

                            <span className='font-Avenir font-normal text-[18px] whitespace-nowrap '>
                                FedEx Express </span>
                        </div>

                        <div className='flex flex-col h-[85px] justify-between'>
                            <Image src={leopard} height={18} width={102.38} alt="faq"  className='grayscale'/>

                            <span className='font-Avenir font-normal text-[18px] whitespace-nowrap '>
                                Leopard Courier </span>
                        </div>


                        <div className='flex flex-col h-[85px] justify-between justify-self-start'>
                            <Image src={Tcs} height={29.89} width={76} alt="faq"  className='grayscale'/>

                            <span className='font-Avenir font-normal text-[18px] whitespace-nowrap '>
                                TCS Pakistan </span>
                        </div>

                        <div className='flex flex-col h-[85px] justify-between'>
                            <Image src={Trax} height={28} width={129} alt="faq" className='grayscale' />

                            <span className='font-Avenir font-normal text-[18px] whitespace-nowrap '>
                                Trax </span>
                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaqSection