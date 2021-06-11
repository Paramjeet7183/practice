import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { expandLine } from "./Animation";

const Foot = styled.section`
  width: 90vw;
  height: auto;
  padding-bottom: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  padding-bottom: 40px;
  border-top: 1px solid #252525;
  background-color: transparent;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
    a {
      margin: auto;
      font-size: 1.2rem;
      &:after {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: #252525;
    font-size: 1rem;
    font-family: excon;
    position: relative;
  }
  #gmail {
    font-size: 1.5rem;
    @media (max-width: 1024px) {
      font-size: 1.15rem;
    }
  }
  #github:after {
    content: "Github";
    position: absolute;
    top: 100%;
    left: 0%;
    color: inherit;
  }
  #linkedin:after {
    content: "LinkedIn";
    position: absolute;
    top: 100%;
    left: 0%;
    color: inherit;
  }
  #gmail:after {
    content: "Paramjeet7183@gmail.com";
    position: absolute;
    top: 100%;
    left: 0%;
    color: inherit;
  }
  #twitter:after {
    content: "Twitter";
    position: absolute;
    top: 100%;
    left: 0%;
    color: inherit;
  }
  #dribble:after {
    content: "Dribble";
    position: absolute;
    top: 100%;
    left: 0%;
    color: inherit;
  }
`;
function Footer() {
  return (
    <Foot>
      <Line />
      <Links>
        <motion.a
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}
          id="github"
          href=""
        >
          Github
        </motion.a>
        <motion.a
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}
          id="linkedin"
          href=""
        >
          LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}
          id="gmail"
          href=""
        >
          Paramjeet7183@gmail.com
        </motion.a>
        <motion.a
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}
          id="twitter"
          href=""
        >
          Twitter
        </motion.a>
        <motion.a
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}
          id="dribble"
          href=""
        >
          Dribble
        </motion.a>
      </Links>
    </Foot>
  );
}

export default Footer;
