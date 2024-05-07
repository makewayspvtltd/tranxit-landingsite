
import Image from 'next/image';
import { useAnimation } from 'framer-motion';
import {useRef ,useEffect} from "react"
import Reveal from '../Reveal/Reveal';

// Define the types for the props
interface ContentCardProps {
    heading: string;
    description: string;
    imgSrc: string 
    imgAlt: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ heading, description, imgSrc, imgAlt }) => {

    const sectionRef = useRef(null);
    const controls = useAnimation();
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };
  
      const handleIntersection = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when the section is in view
            controls.start({
              opacity: 1,
              y: 0,
            });
          } else {
            // Optionally, remove animations when the section is out of view
            controls.start({
              opacity: 0,
              y: -100,
            });
          }
        });
      };
  
      const sectionObserver = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );
      if (sectionRef.current) {
        sectionObserver.observe(sectionRef.current);
        console.log("IN VIEW");
      }
  
      // Cleanup: disconnect the observer when the component unmounts
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (sectionRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          // sectionObserver.unobserve(sectionRef.current);
        }
      };
    }, [controls]);

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex flex-col pt-40 pr-14 z-30 absolute gap-64'>
                <div className='flex items-center gap-28'>

                    <div className='flex flex-col max-w-[460px] ml-[20.6875rem] gap-5'>
                        <Reveal>
                            <h4 className='font-UberMoveBold font-bold text-[3.0625rem] leading-[58.47px]'>
                                {heading}
                            </h4>
                        </Reveal>
                        <Reveal>
                        <span className='font-Avenir font-normal text-[1rem] leading-7 text-[#111110]'>
                            {description}
                        </span>
                        </Reveal>
                    </div>
                    <Reveal>
                    <div className='z-10'>
                        <Image src={imgSrc} alt={imgAlt} width={1000} height={1000} layout='responsive' className='rounded-[12px]' />
                    </div>
                    </Reveal>

                </div>
            </div>
        </div>
    );
}

export default ContentCard;
