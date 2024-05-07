import React from 'react';
import Truck from "./Assets/long-truck.jpg";
import Image from 'next/image';
import smallRing from "./Assets/small-ring.svg"
import Arrow from "./Assets/arrow.svg"
import diamondRing from "./Assets/small-diamond.svg"
import logo from "./Assets/logo.png"
function FooterSection() {
    return (
        <div className='relative'>
            <div className='overflow-hidden relative h-[600px]'>
                <Image src={Truck} alt="truck" layout='fill' objectFit='cover' objectPosition='center 85%' className='grayscale' />
            </div>

            <div className='flex absolute top-[22.4rem] right-[19.25rem]'>
                <div className='bg-[#0067F0] py-10 pl-12 pr-[6.6rem] max-w-[316px] '>

                    <div className='flex gap-1'>
                        <Image src={smallRing} alt="ring" width={50} height={50} />
                        <h4 className='font-UberMoveBold font-bold text-[3rem] text-white'>
                            12 +
                        </h4>
                    </div>
                    <span className='font-UberMove font-bold text-[20px] text-white'>
                        Renowned companies onboarded
                    </span>

                </div>

                <div className='bg-[#242423] py-10 pl-12 pr-[6.6rem] max-w-[316px]'>

                    <div className='flex gap-1'>
                        <Image src={diamondRing} alt="ring" width={50} height={50} />
                        <h4 className='font-UberMoveBold font-bold text-[3rem] text-white'>
                            3 +
                        </h4>
                    </div>
                    <span className='font-UberMove font-bold text-[20px] text-white'>
                        Operational Countries
                    </span>

                </div>
            </div>

            <div className='bg-[#111110] flex flex-col gap-12 px-[19.25rem] py-[6.125rem] '>
                <div className='flex items-center justify-between border-b pb-7 border-[#E7E8E41F]'>
                    <div>
                        <span className='font-Avenir font-medium text-[13px] text-[#91929B]'>
                            Get started with Tranxit today
                        </span>

                        <h2 className='font-bold font-dm-sans text-white text-[2.3rem] pt-[1rem]'>
                            Hop in!
                        </h2>
                        <div className="font-bold font-dm-sans text-white text-[2.3rem]">
                            Get set shipping.
                        </div>

                    </div>


                    <div>
                        <button className=' py-[18px]  bg-Primary  rounded-[9px] px-[52px] font-UberMoveBold font-bold text-[18px] flex gap-5 items-center'>
                            <Image src={Arrow} alt='arrow' width={27} height={27} />               <span>
                                Register Account
                            </span>
                        </button>
                    </div>
                </div>

                <span className='font-AvenirRoman font-medium text-[1rem] text-[#91929B] max-w-[861px] '>
                    Join TranXIT today and experience streamlined logistics management, optimized freight forwarding, and seamless courier services. Simplify your shipping processes with TranXIT – your ultimate logistics partner.
                </span>
            </div>


            <div className='px-[19.25rem] py-[6.125rem] bg-[#242423] grid grid-cols-4 gap-5'>

                <div className='flex flex-col gap-[2rem]'>
                    <Image src={logo} alt='arrow' />

                    <h6 className='font-dm-sans font-bold text-[1rem] text-white'>
                        Fb.  /  Ig.  /  Li.
                    </h6>
                </div>


                <div>
                    <h5 className='font-UberMoveBold font-bold text-[1rem] text-white'>
                        Useful Links
                    </h5>

                    <div className='flex flex-col gap-3 pt-6 '>
                        <p className='text-opacity-50  font-AvenirRoman text-white'>
                            About
                        </p>
                        <p className='text-opacity-50 font-AvenirRoman text-white'>
                            Explore Features
                        </p>
                        <p className='text-opacity-50  font-AvenirRoman text-white'>
                            Understanding TranXIT
                        </p>
                        <p className='text-opacity-50  font-AvenirRoman text-white'>
                            Our Partners
                        </p>
                        <p className='text-opacity-50  font-AvenirRoman  text-white'>
                            Contact
                        </p>
                    </div>
                </div>


                <div className='flex flex-col gap-9'>
                    <div>
                        <h5 className='font-UberMoveBold font-bold text-[1rem] text-white'>
                            Support
                        </h5>


                        <p className='text-opacity-50  font-AvenirRoman  text-white pt-6'>
                            Let us know what you are facing at
                        </p>
                        <p className='font-AvenirRoman text-[1rem] underline text-Primary'>
                            support@tranxit.io
                        </p>
                    </div>


                    <div>
                        <h5 className='font-UberMoveBold font-bold text-[1rem] text-white'>
                            Career
                        </h5>


                        <p className='text-opacity-50  font-AvenirRoman text-white pt-6'>
                            Looking for a job opportunity?

                        </p>
                        <p className='text-opacity-50  font-AvenirRoman text-white'>
                            See open positions
                        </p>

                    </div>


                </div>


                <div>
                    <h5 className='font-UberMoveBold font-bold text-[1rem] text-white'>
                        Sign up for the newsletter
                    </h5>

                    <div className='flex flex-col gap-3  pt-6'>
                        <div className="flex items-center  rounded-lg">
                            <input
                                type="email"
                                placeholder="you@domain.com"
                                className="px-4 py-2 w-full rounded-l-lg focus:outline-none bg-[#383837]"
                            />
                            <div>
                                <button

                                    className="text-white font-bold py-2 px-5 rounded-r-lg bg-[#383837] h-[40px] text-[1rem] font-dm-sans whitespace-nowrap">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        <div className='flex gap-2 pt-[18px] '>
                            <div>
                                <input id="checkbox" type="checkbox" className="rounded-checkbox"
                                />
                            </div>
                            <p className='text-opacity-50  font-AvenirRoman  font-normal text-white leading-7 text-base'>
                                I’m okay with getting emails and having that activity tracked to improve my experience.

                            </p>
                        </div>
                    </div>
                </div>



            </div>


            <div className='px-[19.25rem]  bg-[#242423]'>

                <div className='border-t border-[#E7E8E41F] flex justify-between items-center'>
                    <div>
                        <p className='text-[13px] font-Avenir  text-white py-9 opacity-75'>
                            © 2024 TRABXIT. All RIGHTS RESERVED, PRODUCT OF  <span className='text-Primary'>
                                MAKEWAYS
                            </span>
                        </p>
                    </div>

                    <div className='flex gap-[2rem] text-[13px] font-Avenir font-medium '>


                        <span className='text-opacity-50    text-white leading-7 '>
                            SITEMAP
                        </span>
                        <span className='text-opacity-50     text-white leading-7 '>
                            SECURITY
                        </span>
                        <span className='text-opacity-50   text-white leading-7 '>
                            PRIVACY POLICY
                        </span>
                        <span className='text-opacity-50    text-white leading-7 '>
                            TERMS OF SERVICE
                        </span>

                    </div>
                </div>
            </div>



        </div>
    );
}

export default FooterSection;