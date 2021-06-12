import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Prof from "../Assets/Profile.webp";
import Prof2 from "../Assets/Profile.jpg";
import hoverEffect from "hover-effect";
import Mask from "../Assets/glass.webp";
const Container = styled.section`
  width: 90vw;
  min-height: 100vh;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #e7e7e7;
`;
const Cols = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
  }
`;
const Col_1 = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  .profile {
    position: relative;
    width: 400px;
    height: 450px;
    background-position: center;
    background-size: cover;
    @media (max-width: 1024px) {
      margin: 0 auto;
      width: 350px;
      height: 400px;
    }
  }
`;
const Col_2 = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
  p {
    position: relative;
    display: block;
    width: 50%;
    font-family: grotesk;
    word-spacing: 5px;
    font-size: 1.3rem;
    @media (max-width: 1024px) {
      width: 100%;
      margin-left: 0%;
    }
  }
`;
const Lang = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  .langblock {
    h1 {
      font-family: monument;
    }
    p {
      font-size: 1.4rem;
      font-family: grotesk;
      word-spacing: 5px;
    }
  }
`;
const Credits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  text-align: right;
  div {
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        -webkit-text-stroke: 1px #e7e7e7;
        color: transparent;
      }
    }
    h1 {
      font-size: 5vw;
      font-family: monument;
      transition: 0.5s;
    }
    p {
      font-size: 1.4rem;
      font-family: grotesk;
      word-spacing: 5px;
    }
    #cont {
      font-size: 4vw;
    }
    #talk {
      color: transparent;
      -webkit-text-stroke: 1px #e7e7e7;
      font-size: 10vw;
      transition: 0.5s;
      &:hover {
        color: #e7e7e7;
        -webkit-text-stroke: none;
      }
    }
  }
`;

function About(props) {
  const profile = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: Prof,
      image2: Prof2,
      displacementImage: Mask,
    });
  });
  return (
    <Container>
      <Cols>
        <Col_1>
          <div ref={profile} className="profile"></div>
        </Col_1>
        <Col_2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col_2>
      </Cols>
      <Lang>
        <div className="langblock">
          <h1>
            Front End addicted
            <br />
            Full Stack capable
          </h1>
        </div>
        <div className="langblock">
          <h1>Languages</h1>
          <p>Python , HTML , CSS , JS , C++ , PHP .</p>
        </div>
        <div className="langblock">
          <h1>Frameworks/Library</h1>
          <p>
            React , React Native , Laravel , Framer-motion , Three.js , Pixi Js,
            NodeJs
          </p>
        </div>
        <div className="langblock">
          <h1>Others</h1>
          <p>Firebase , Sql , Mongo DB , No Sql .</p>
        </div>
        <div className="langblock">
          <h1>Education</h1>
          <p>
            B.tech in CSE From <br />
            Lovely Professional University
            <br />
            2022
          </p>
        </div>
      </Lang>
      <Credits>
        <div>
          <h1>Credits</h1>
          <p>
            I developed this website with React.js.
            <br /> Animations are powered by Framer Motion.
            <br />
            Thanks goes out to the following
            <br /> sites/individuals for inspirations
          </p>
        </div>
        <div>
          <h1>
            <a href="https://ronniefeng.com/">Ronnie Feng</a>
            <br />
            <a href="https://www.chriswilcock.co/">Chris Willock</a>
            <br />
            <a href="https://loerarchitecten.com/en/">Loerarchitecten</a>
            <br />
            <a href="https://www.behance.net/martiniidesign">
              Stefan Martinovic
            </a>
          </h1>
        </div>
        <div>
          <h1 id="cont">
            For Your Project
            <br />
            <a id="talk" href="mailto:pramjeet7183@gmail.com">
              LETS TALK
            </a>
          </h1>
        </div>
      </Credits>
    </Container>
  );
}

export default About;
