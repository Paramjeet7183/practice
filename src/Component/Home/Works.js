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
    height: auto;
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
      @media (max-width: 1024px) {
        flex-direction: column;
      }

      /**/

      .col_1 {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 1024px) {
          width: 100%;
          height: auto;
        }
        span {
          font-family: exil;
          font-size: 5vw;
          color: #252525;
          height: 50%;
          width: auto;
          @media (max-width: 1024px) {
            font-size: 7vw;
          }
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
          @media (max-width: 1024px) {
            flex-direction: row;
            margin-top: 20px;
            span {
              writing-mode: horizontal-tb;
            }
          }
        }
      }
      .col_2 {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1024px) {
          margin-top: 10px;
          width: 100%;
          height: auto;
        }
        .img {
          max-width: 100%;
          max-height: 512px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          line-height: 95%;
          font-family: exil;
          font-size: 3vw;
          @media (max-width: 1024px) {
            width: 100%;
            height: auto;
            font-size: 6vw;
          }
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
            <div className="img">
              <img src={bg} />
            </div>
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
