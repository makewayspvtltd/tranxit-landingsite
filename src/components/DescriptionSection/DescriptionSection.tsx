import React from 'react';
import circle from "./Assets/circle.svg";
import Image from 'next/image';

function DescriptionSection() {
    return (
        <div className='relative'>

            <div className='py-[90px] px-[54px] relative h-screen '>
                <div className='absolute inset-0 flex items-center justify-center '>
                    <Image src={circle} alt="circle" width={1770} />
                </div>

                <div className='flex items-center justify-center h-full'>
                    <div className='max-w-[1487px]  pt-10' >
                        <h3 className='font-UberMove font-semibold text-center text-xs sm:text-2xl md:text-3xl lg:text-6xl xl:text-[3.8125rem] '>
                            <span className='text-[#111110]'>
                                TranXIT is a comprehensive digital platform </span>

                                <span className='text-Secondary'>
                                addressing global logistics and freight forwarding needs, designed to alleviate the daily hassles encountered in shipping processes. Be it moving a freight to another country or sending a parcel to another city.
                                </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionSection;