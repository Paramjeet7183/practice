import React from "react";
import { motion } from "framer-motion";
import { textReveal } from "../Animation.js";
function BigText() {
  return (
    <div className="textblock">
      <div className="Textwrapper">
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 0.5,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          UI/UX
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 0.8,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          DESIGNER
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 1.1,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          + WEB
        </motion.span>
        <br />
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 1.4,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
        >
          DEVELOPER
        </motion.span>
        <motion.span
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{
            type: "Tween",
            delay: 1.7,
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.9],
          }}
          id="foot"
        >
          <span id="arrow">
            <svg
              width="127"
              height="103"
              viewBox="0 0 127 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.3365 79.8158C53.7615 80.4681 54.3908 80.9628 55.1271 81.223C55.8633 81.4833 56.6652 81.4946 57.4086 81.2554C58.152 81.0161 58.7953 80.5395 59.2388 79.8995C59.6823 79.2595 59.9012 78.4918 59.8616 77.7154V0H66.7706V77.7154C66.7302 78.4734 66.9362 79.2242 67.3582 79.8565C67.7802 80.4888 68.3956 80.9691 69.1134 81.2262C69.8312 81.4833 70.6131 81.5035 71.3433 81.2839C72.0736 81.0642 72.7133 80.6164 73.1677 80.0068L118.556 24.0593H127L63.3321 103L0 24.1389H8.44427L53.3365 79.8158Z"
                fill="#252525"
              ></path>
            </svg>
          </span>
          <span>My best Work</span>
          <span>6 Projects</span>
        </motion.span>
      </div>
    </div>
  );
}

export default BigText;
