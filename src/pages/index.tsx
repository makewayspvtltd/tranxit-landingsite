import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Main from "@/components/Main/Main";
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection";
import WhatwedoSection from "@/components/WhatwedoSection/WhatwedoSection";
import HowWeOperate from "@/components/HowWeOperate/HowWeOperate.section.1";
import HowWeOperateSection2 from "@/components/HowWeOperate/HowWeOperate.section.2";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import FaqSection from "@/components/FaqSection/FaqSection";
import FooterSection from "@/components/FooterSection/FooterSection";

export default function Home() {
  const [snapScroll, setSnapScroll] = React.useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log(snapScroll);
  function getOffsetTop(element: HTMLElement) {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }
    return offsetTop;
  }
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSnapScroll(false);
        } else {
          setSnapScroll(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSnapScroll]);

  return (
    <div>

      <motion.div className="snap-section">
        <Main />
      </motion.div>
      <motion.div className="snap-section">
        <DescriptionSection />
      </motion.div>
      <div className="snap-section">
        <WhatwedoSection />
      </div>
      <div className="snap-section">
        <HowWeOperate />
      </div>
      <div className="snap-section" ref={sectionRef}>
        <HowWeOperateSection2 />
      </div>
      <div className="non-snap-section">
        <WorkingProcess />
      </div>
      <div className="non-snap-section">
        <FaqSection />
      </div>
      <div className="non-snap-section">
        <FooterSection />
      </div>
    </div>
  );
}
