import React, { useState } from 'react';
import { Accordion } from '@heathmont/moon-core-tw';
import Image from 'next/image'
import AccordionArrow from './Assets/accordion-arrow.svg'
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
type DynamicAccordionProps = {
    question: string;
    answer: string;
  };
  

  const DynamicAccordion: React.FC<DynamicAccordionProps> = ({question ,answer}) => {
 

    return (
        <Accordion>
        <Accordion.Item value="item-1">
            <Accordion.Header className="moon-open:[&_svg]:rotate-180">
               <div className='flex gap-[10px]'>
               <Image src={AccordionArrow} height={22} width={22} alt="arrow" />
                <Accordion.Button className=' font-extrabold text-[1rem] font-Avenir pl-0'>
                   {question}

                    
                    <ControlsChevronDown className=" text-moon-24 transition duration-200 moon-open:text-bulma -[#242423]" />
                </Accordion.Button>
               </div>
            </Accordion.Header>
            <Accordion.Content className='border-none font-Avenir font-normal text-[1rem]'>
{answer}            </Accordion.Content>
        </Accordion.Item>

    </Accordion>
    );
};

export default DynamicAccordion;
