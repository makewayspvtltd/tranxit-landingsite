import React, { useEffect, useRef } from "react";
import circle from "./Assets/circle.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

function DescriptionSection() {
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
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image src={circle} alt="circle" width={1770} />
      </div>
      <motion.div
        ref={sectionRef}
        className="py-[90px] px-[54px] relative h-screen"
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="max-w-[1487px]  pt-10">
            <h3 className="font-UberMove font-semibold text-center text-xs sm:text-2xl md:text-3xl lg:text-6xl xl:text-[3.8125rem] ">
              <span className="text-[#111110]">
                TranXIT is a comprehensive digital platform{" "}
              </span>

              <span className="text-Secondary">
                addressing global logistics and freight forwarding needs,
                designed to alleviate the daily hassles encountered in shipping
                processes. Be it moving a freight to another country or sending
                a parcel to another city.
              </span>
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DescriptionSection;
