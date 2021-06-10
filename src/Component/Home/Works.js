import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { expandLine } from "../Animation";
import bg from "../bg.jpg";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #252525;
`;
const WorksContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-firection: column;
  .WorkItem {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: green;
    img {
      display: inline-block;
      position: absolute;
      top: 20px;
      right: 0;
      max-width: 60%;
      max-height: 70%;
    }
  }
`;

function Works() {
  return (
    <WorksContainer>
      <div className="WorkItem">
        <Line />
      </div>
    </WorksContainer>
  );
}

export default Works;
