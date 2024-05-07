import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import HowWeOperate from "@/components/HowWeOperate/HowWeOperate.section.1";
import Layout from "@/components/Layout/Layout";
import WhatwedoSection from "@/components/WhatwedoSection/WhatwedoSection";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import HowWeOperateSection2 from "@/components/HowWeOperate/HowWeOperate.section.2";
import Main from "@/components/Main/Main";

export default function Home() {
  const targetMain = useRef(null);
  const targetDescription = useRef(null);

  const { scrollYProgress: scrollProgressMain } = useScroll({ target: targetMain });
  const { scrollYProgress: scrollProgressDescription } = useScroll({ target: targetDescription });


  const smoothedMain = useSpring(scrollProgressMain, {
    damping: 10,
    stiffness: 30,
    restDelta: 0.1
  });
  const smoothedDescription = useSpring(scrollProgressDescription, {
    damping: 10,
    stiffness: 30,
    restDelta: 0.1
  });

  const opacityMain = useTransform(smoothedMain, [0, 1], [0, 1]);
  const opacityDescription = useTransform(smoothedDescription, [0, 1], [0, 1]);

  return (
    
    <Layout>
      {/* <motion.div ref={targetMain} style={{ opacity: opacityMain }}> */}
        <Main />
      {/* </motion.div> */}
      <motion.div ref={targetDescription} style={{ opacity: opacityDescription }}>
        <DescriptionSection />
      </motion.div>



        <WhatwedoSection />
        <HowWeOperate />
        <HowWeOperateSection2 />
        <WorkingProcess />
        <FaqSection />
        <FooterSection />

    </Layout>
  );
}
