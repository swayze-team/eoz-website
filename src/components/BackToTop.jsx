import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return React.createElement(motion.button, {
    className: "fixed bottom-8 right-8 glass-dark p-4 rounded-full border border-discord-blurple/30 hover:border-discord-blurple hover:bg-discord-blurple/20 transition-all duration-300 z-40 shadow-2xl",
    onClick: scrollToTop,
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: isVisible ? 1 : 0,
      opacity: isVisible ? 1 : 0
    },
    whileHover: { scale: 1.1, y: -2 },
    whileTap: { scale: 0.9 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }, [
    React.createElement(ArrowUp, {
      key: "arrow",
      className: "text-discord-blurple",
      size: 24
    }),
    React.createElement(motion.div, {
      key: "glow",
      className: "absolute inset-0 rounded-full bg-discord-blurple/20",
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5]
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  ]);
};
var stdin_default = BackToTop;
export {
  stdin_default as default
};
