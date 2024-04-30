import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const SnapScroll = () => {
  const containerRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000]); // Adjust the range according to your content height

  return (
    <div ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
      <motion.div style={{ y }}>
        <section style={{ height: '100vh', backgroundColor: 'red' }}>Section 1</section>
        <section style={{ height: '100vh', backgroundColor: 'blue' }}>Section 2</section>
        <section style={{ height: '100vh', backgroundColor: 'green' }}>Section 3</section>
        {/* Add more sections as needed */}
      </motion.div>
    </div>
  );
};

export default SnapScroll;
