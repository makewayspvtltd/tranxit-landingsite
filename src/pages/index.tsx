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
  
  return (
    <Layout>
      
      <Main/>
      <DescriptionSection />
      <WhatwedoSection />
      <HowWeOperate />
      <HowWeOperateSection2 />
      <WorkingProcess/>
      <FaqSection/>
      <FooterSection/>
 
    </Layout>
  );
}

