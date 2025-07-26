import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  return React.createElement(motion.div, {
    className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-discord-blurple via-purple-500 to-blue-500 origin-left z-50 shadow-lg",
    style: { scaleX },
    initial: { transformOrigin: "0%" }
  });
};
var stdin_default = ScrollProgress;
export {
  stdin_default as default
};
