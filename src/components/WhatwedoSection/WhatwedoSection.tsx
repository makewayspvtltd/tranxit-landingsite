import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import rings from "./Assets/rings.svg";
import ContentCard from '../ContentCard/ContentCard';

function WhatwedoSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(1);
  const cards = [
    {
      heading: "Power to deliver with your choice",
      description: "TranXIT empowers users with the freedom to choose, offering a versatile platform where they can select the most suitable shipping options tailored to their preferences. With TranXIT, users have the power to deliver their shipments with flexibility and control, ensuring a personalized and efficient logistics experience.",
      imgSrc: "/digitalbanks-laptop.png",
      imgAlt: "laptop image"
    },
    {
      heading: "More customers means more business",
      description: "With TranXIT, attracting more customers translates to increased business opportunities, as our platform enables seamless engagement with a broader audience. By providing efficient and reliable logistics solutions, TranXIT helps businesses expand their customer base, driving growth and success in the competitive market.",
      imgSrc: "/digitalbanks-laptop2.png",
      imgAlt: "laptop image"
    }
  ];


  return (
    <div className="z-20 bg-[#FFFFFF] relative overflow-hidden">
      <div className='bg-[#242423] z-10 w-[300px] h-[200vh] absolute right-0'></div>
      <div className='absolute right-40 z-0'>
        <Image src={rings} alt="rings" width={1009} className='h-[200vh]' />
      </div>

      {cards.map((card, index) => (
        <ContentCard
          key={index}
          heading={card.heading}
          description={card.description}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
        />
      ))}


    </div>
  );
}

export default WhatwedoSection;
