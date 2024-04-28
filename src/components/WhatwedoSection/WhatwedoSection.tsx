import React from 'react';
import Image from 'next/image';
import rings from "./Assets/rings.svg";
import laptop from "./Assets/digitalbanks-laptop.png";
import laptop2 from "./Assets/digitalbanks-laptop2.png"

function WhatwedoSection() {
  return (
    <div className="z-20 bg-[#FFFFFF] h-[210vh] ">
      <div className='bg-[#242423] z-10 w-[300px] h-[210vh] absolute right-0'></div>
      <div className='absolute right-40 z-0'>
        <Image src={rings} alt="rings" width={1009}  className='h-[200vh]'/>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex flex-col pt-32 pr-14 z-30 gap-64 '>
            <div className='flex items-center gap-28'>

              <div className='flex flex-col max-w-[460px] ml-[20.6875rem] gap-5'>
                <h4 className='font-UberMoveBold font-bold text-[3.0625rem] leading-[58.47px] '>
                  Power to deliver
                  <br />
                  with your choice
                </h4>
                <span className='font-Avenir font-normal text-[1rem] leading-7 text-[#111110]'>
                  TranXIT empowers users with the freedom to choose, offering a versatile platform where they can select the most suitable shipping options tailored to their preferences. With TranXIT, users have the power to deliver their shipments with flexibility and control, ensuring a personalized and efficient logistics experience. </span>
              </div>


              <div className='z-10'>
                <Image src={laptop} alt="laptop image" className='rounded-[12px] min-w-[974px] min-h-[823px]' />

              </div>
            </div>

          </div>


        </div>
        <div className='flex flex-col '>


          <div className='flex flex-col h-screen '>
            <div className='flex flex-col pt-32 pr-14 z-30 absolute gap-64 '>
              <div className='flex items-center gap-28'>

                <div className='flex flex-col max-w-[460px] ml-[20.6875rem] gap-5'>
                  <h4 className='font-UberMoveBold font-bold text-[3.0625rem] leading-[58.47px] '>
                    More customers
                    <br />
                    means more

                    <br />
                    business
                  </h4>
                  <span className='font-Avenir font-normal text-[1rem] leading-7 text-[#111110]'>

                    With TranXIT, attracting more customers translates to increased business opportunities, as our platform enables seamless engagement with a broader audience. By providing efficient and reliable logistics solutions, TranXIT helps businesses expand their customer base, driving growth and success in the competitive market.</span>
                </div>


                <div className='z-10'>
                  <Image src={laptop2} alt="laptop image" className='rounded-[12px] min-w-[974px] min-h-[823px]' />

                </div>
              </div>

            </div>
          </div>



        </div>


      </div>
    </div>
  );
}

export default WhatwedoSection;
