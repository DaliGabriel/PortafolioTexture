"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import * as ReactDOM from "react-dom"; // Import ReactDOM

interface TypeWriterProps {
  text: string;
  speed: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        ReactDOM.flushSync(() => {
          setDisplayedText((prev) => prev + text[index]);
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <>
      <motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
        {displayedText}
      </motion.span>
    </>
  );
};

export default TypeWriter;
