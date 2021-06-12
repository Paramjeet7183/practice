import React, { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Mask from "../Assets/heightMap.webp";
import Footer from "../Component/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #252525;
`;
const Container = styled.section`
  width: 100vw;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  .image {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    span {
      display: block;
      width: 90vw;
      height: auto;
      bottom: 10vh;
      left: 50%;
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      position: absolute;
      text-decoration: none;
      color: #e7e7e7;
      font-size: 6vw;
      line-height: 97%;
      text-transform: uppercase;
      font-family: exil;
    }
  }
`;
const Details = styled.div`
  padding-top: 50px;
  width: 90vw;
  height: auto;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Links = styled.div`
  width: 100px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: #252525;
    text-decoration: none;
    font-size: 3rem;
  }
`;
const Desc = styled.div`
  width: 100%;
  height: auto;
  p {
    margin-left: 50%;
    width: 30vw;
    font-size: 1.5rem;
    font-family: grotesk;
    color: #252525;
    word-spacing: 10px;
    @media (max-width: 1024px) {
      margin-left: 0%;
      width: 100%;
    }
  }
`;
const Lang = styled.div`
  width: 100%;
  height: auto;
  p {
    margin-left: 10%;
    width: auto;
    font-size: 2rem;
    font-family: monument;
    color: #252525;
    word-spacing: 10px;
    @media (max-width: 1024px) {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const ImageGrid = styled.div`
  padding-top: 150px;
  width: 90vw;
  height: 100vh;
  height: auto;
  margin: auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1024px) {
    grid-gap: 30px;
    grid-template-columns: 1fr;
  }
  img {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const Device = styled.div`
  padding-top: 150px;
  width: 90vw;
  height: auto;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .Mob {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      margin: auto;
      width: 340px;
      object-fit: contain;
    }
    @media (max-width: 1024px) {
      justify-content: space-between;
      flex-direction: column;
      img {
        margin: auto;
        margin-top: 40px;
        width: 80%;
        object-fit: contain;
      }
    }
  }
  .Tab {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 512px;
      object-fit: contain;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      img {
        margin: auto;
        width: 80%;
        object-fit: contain;
      }
    }
  }
`;
function Work() {
  const containerRef = useRef(null);
  const { state } = useLocation();
  const profile = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: `${state.works.bg}`,
      image2: `${state.works.bg}`,
      displacementImage: Mask,
    });
  });
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <Container data-scroll-container ref={containerRef}>
        <div ref={profile} className="image">
          <span>{state.works.name}</span>
        </div>
        <Details>
          <Line />
          <Links>
            <a href="">
              <i class="fas fa-external-link-square-alt" />
            </a>
            <a href="">
              <i class="fab fa-github-square" />
            </a>
          </Links>
          <Desc>
            <p>{state.works.details}</p>
          </Desc>
          <Lang>
            <p>{state.works.lang}</p>
          </Lang>
        </Details>
        <ImageGrid>
          <img src={state.works.bg} />
          <img src={state.works.bg} />
          <img src={state.works.bg} />
          <img src={state.works.bg} />
        </ImageGrid>
        <Device>
          <div className="Mob">
            <img src={state.works.mob1} />
            <img src={state.works.mob2} />
          </div>
          <div className="Tab">
            <img src={state.works.tab1} />
            <img src={state.works.tab2} />
          </div>
        </Device>
        <Footer />
      </Container>
    </LocomotiveScrollProvider>
  );
}

export default Work;
