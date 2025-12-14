"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TextAnimation = ({
  texts = [],
  duration = 3,
  loop = true,
  direction = "vertical",
  activeColor = "text-black",
  inactiveColor = "text-gray-400",
  animationType = "fade",
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= texts.length) {
          return loop ? 0 : prevIndex;
        }
        return nextIndex;
      });
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [texts.length, duration, loop]);

  const containerClass = direction === "horizontal" ? "flex gap-4" : "flex flex-col gap-3";

  const getAnimationVariants = () => {
    if (animationType === "slide") {
      return {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
      };
    }
    // Default fade animation
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    };
  };

  const variants = getAnimationVariants();

  return (
    <div className={`${containerClass} ${className}`}>
      {texts.map((text, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={index === activeIndex ? "visible" : "hidden"}
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`${
            index === activeIndex ? activeColor : inactiveColor
          } font-semibold text-lg transition-colors duration-300`}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default TextAnimation;
