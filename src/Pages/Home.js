import React from "react";
import styled from "styled-components";
import BigText from "../Component/Home/BigText";
import Works from "../Component/Home/Works";

const HomeContainer = styled.section`
  width: 90vw;
  height: auto;
  margin: 0 auto;
  position: relative;
  .textblock {
    margin: 0 auto;
    width: 100%;
    height: 90vh;
    position: relative;
    .Textwrapper {
      font-family: exil;
      color: #252525;
      font-size: 7.5vw;
      line-height: 93%;
      position: absolute;
      width: auto;
      height: auto;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      span {
        display: inline-block;
      }
      #foot {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
          font-size: 1rem;
          color: #252525;
          font-family: grotesk;
        }
      }
    }
  }
`;
function Home() {
  return (
    <HomeContainer>
      <BigText />
      <Works />
    </HomeContainer>
  );
}

export default Home;
