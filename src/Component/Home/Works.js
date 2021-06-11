import React from "react";
import styled from "styled-components";
import { ImageBox, TextinView, LineinView } from "../Animation";
import bg from "../bg.jpg";
import { works } from "../Data";
import { useLocation, Link } from "react-router-dom";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #252525;
`;
const WorksContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        justify-content: space-between;
        @media (max-width: 1024px) {
          width: 100%;
          height: 100%;
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
            tetx-transform: uppercase;
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
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          display: block;
          padding-bottom: 5%;
          line-height: 95%;
          font-family: exil;
          text-transform: uppercase;
          font-size: 3vw;
          overflow: hidden;
          a {
            display: inline-block;
          }
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
      {works.map((work) => (
        <div className="WorkItem">
          <LineinView>
            <Line />
          </LineinView>
          <div className="columns">
            <div className="col_1">
              <span>0{work.id}/</span>
              <span id="worklink">
                <Link
                  to={{
                    pathname: `work/${work.id}`,
                    state: { works: work },
                  }}
                >
                  <i className="fal fa-external-link-square" />
                </Link>
                <span>{work.type}</span>
              </span>
            </div>

            <div className="col_2">
              <div className="img">
                <ImageBox>
                  <Link
                    to={{
                      pathname: `work/${work.id}`,
                      state: { works: work },
                    }}
                  >
                    <img src={work.bg} />
                  </Link>
                </ImageBox>
              </div>
              <TextinView>
                <span>
                  <a>{work.name}</a>
                </span>
              </TextinView>
            </div>
          </div>
        </div>
      ))}
    </WorksContainer>
  );
}

export default Works;
