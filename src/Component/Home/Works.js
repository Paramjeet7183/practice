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
    padding-bottom: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .columns {
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 100%;
      .col_1 {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          font-family: exil;
          font-size: 5vw;
          color: #252525;
          height: 50%;
          width: auto;
        }
        #worklink {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          a {
            text-decoration: none;
            font-size: 2rem;
            color: #252525;
          }
          span {
            font-family: grotesk;
            font-size: 1rem;
            color: #252525;
            writing-mode: vertical-lr;
          }
        }
      }
      .col_2 {
        background-color: burlywood;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        img {
          width: 100%;
          object-fit: contain;
        }
        span {
          line-height: 95%;
          font-family: exil;
          font-size: 3vw;
        }
      }
    }
  }
`;

function Works() {
  return (
    <WorksContainer>
      <div className="WorkItem">
        <Line />
        <div className="columns">
          <div className="col_1">
            <span>01/</span>
            <span id="worklink">
              <a href="">
                <i className="fal fa-external-link-square" />
              </a>
              <span>WEBDEVELOPMENT</span>
            </span>
          </div>
          <div className="col_2">
            <img src={bg} />
            <span>
              CORONAVIRUS
              <br />
              TRACKER
            </span>
          </div>
        </div>
      </div>
    </WorksContainer>
  );
}

export default Works;
