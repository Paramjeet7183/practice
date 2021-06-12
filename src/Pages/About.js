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
  .profile {
    position: relative;
    width: 400px;
    height: 450px;
    background-position: center;
    background-size: cover;
  }
`;

function About() {
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
      <div ref={profile} className="profile"></div>
    </Container>
  );
}

export default About;
