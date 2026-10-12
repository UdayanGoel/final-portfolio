import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      {/* Background Track */}
      <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-sm" />

      {/* Spring-Smoothed Glowing Progress Bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0% 50%',
        }}
        className="w-full h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-white shadow-[0_0_12px_rgba(56,189,248,0.8)]"
      />
    </div>
  );
};
