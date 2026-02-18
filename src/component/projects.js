import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../NavBar";
import web from "../images/personalweb.png";
import music from "../images/music.png";
import trivia from "../images/trivi.png";
import wifly from "../images/wifly.png";
import Chip from "./Chip";

function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Page onMouseMove={handleMouseMove}>
      <GradientOverlay x={mousePos.x} y={mousePos.y} />
      <Navbar />

      <Container>
        <Header>
          <Title>Projects</Title>
          <Subtitle>
            A few things I’ve built — focused on clean UI, solid backend fundamentals, and real-world features.
          </Subtitle>
        </Header>

        <Grid>

            <Card>
            <CardLeft>
              <CardTitle>MapMates</CardTitle>
              <CardBody>
              MapMates is a full-stack web app that lets users discover, save, and track restaurants on an interactive map.
It features a React + Leaflet frontend with a TypeScript/Node.js backend, using MongoDB for persistence and Redis for caching visited locations.
The app supports marking places as visited, preventing duplicate markers, and syncing user activity across sessions.
Deployed on AWS, it focuses on performance, clean APIs, and a smooth map-driven user experience.
              </CardBody>

              <ChipRow>
                <Chip>TypeScript</Chip>
                <Chip>Redis</Chip>
                 <Chip>AWS</Chip>
                <Chip>React</Chip>

              </ChipRow>

              <Actions>
                <PrimaryLink
                  href="https://github.com/eduzeu/mapmates"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </PrimaryLink>
              </Actions>
            </CardLeft>

            <CardRight>
              <ImageLink
                href="https://github.com/eduzeu/trivia"
                target="_blank"
                rel="noreferrer"
              >
                <Preview src={trivia} alt="Trivia Game preview" />
              </ImageLink>
            </CardRight>
          </Card>
          {/* WiFly */}


          <Card>
            <CardLeft>
              <CardTitle>WiFly NYC</CardTitle>
              <CardBody>
                WiFly NYC is your go-to guide for finding free WiFi hotspots and cozy
                spaces to work, study, or simply unwind as well as events happening in the city, such as
                festivals, street markets, or sports events.
              </CardBody>

              <ChipRow>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>JavaScript</Chip>
              </ChipRow>

              <Actions>
                <PrimaryLink
                  href="https://github.com/eduzeu/546website"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </PrimaryLink>
              </Actions>
            </CardLeft>

            <CardRight>
              <ImageLink
                href="https://github.com/eduzeu/546website"
                target="_blank"
                rel="noreferrer"
              >
                <Preview src={wifly} alt="WiFly NYC preview" />
              </ImageLink>
            </CardRight>
          </Card>

          {/* Personal Website */}
          <Card>
            <CardLeft>
              <CardTitle>Personal Website</CardTitle>
              <CardBody>
                Developed an interactive personal website using React. Utilized CSS and JavaScript
                animations to create an engaging and user-friendly front-end experience. Designed a responsive
                layout to ensure optimal viewing across various devices. Implemented smooth scrolling and dynamic
                content updates for a seamless user experience. Focused on clean, maintainable code and modern
                web development practices to enhance both performance and scalability.
              </CardBody>

              <ChipRow>
                <Chip>JavaScript</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>React</Chip>
              </ChipRow>

              <Actions>
                <PrimaryLink
                  href="https://github.com/eduzeu/eduzeu.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </PrimaryLink>
              </Actions>
            </CardLeft>

            <CardRight>
              <ImageLink
                href="https://github.com/eduzeu/eduzeu.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <Preview src={web} alt="Personal Website preview" />
              </ImageLink>
            </CardRight>
          </Card>

          {/* Music Website */}
          <Card>
            <CardLeft>
              <CardTitle>My Music Website</CardTitle>
              <CardBody>
                Developed a website where users can explore the music industry, find out news, see trends, and discover
                new music utilizing the Spotify API. Users can create new playlists based on their favorite genres,
                have access to articles regarding their favorite artists, and access to a database with +1000 song suggestions.
              </CardBody>

              <ChipRow>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>JavaScript</Chip>
              </ChipRow>

              <Actions>
                <PrimaryLink
                  href="https://github.com/eduzeu/mymusic"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </PrimaryLink>
              </Actions>
            </CardLeft>

            <CardRight>
              <ImageLink
                href="https://github.com/eduzeu/mymusic"
                target="_blank"
                rel="noreferrer"
              >
                <Preview src={music} alt="My Music Website preview" />
              </ImageLink>
            </CardRight>
          </Card>

          {/* Trivia */}
          <Card>
            <CardLeft>
              <CardTitle>Trivia Game</CardTitle>
              <CardBody>
                Implemented a trivia game in C using sockets. The game allows up to 3 users to connect to the network and play.
                Users will compete by answering trivia questions, with their responses being sent to the server for validation.
                The game tracks scores in real-time, providing immediate feedback to players. Designed the system to handle
                multiple connections simultaneously, ensuring a smooth and interactive gaming experience for all participants.
              </CardBody>

              <ChipRow>
                <Chip>C</Chip>
                <Chip>Linux OS</Chip>
              </ChipRow>

              <Actions>
                <PrimaryLink
                  href="https://github.com/eduzeu/trivia"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </PrimaryLink>
              </Actions>
            </CardLeft>

            <CardRight>
              <ImageLink
                href="https://github.com/eduzeu/trivia"
                target="_blank"
                rel="noreferrer"
              >
                <Preview src={trivia} alt="Trivia Game preview" />
              </ImageLink>
            </CardRight>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}

export default Projects;

/* ---------------- styles ---------------- */

const Page = styled.main`
  min-height: 100vh;
  background: #000;
  color: #fff;
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
  padding-top: 120px; /* accounts for fixed navbar */
  padding-bottom: 80px;
`;

const Header = styled.div`
  margin-bottom: 26px;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  letter-spacing: -0.03em;
  font-size: clamp(28px, 3.2vw, 44px);
`;

const Subtitle = styled.p`
  margin: 10px 0 0;
  font-family: "Poppins", sans-serif;
  opacity: 0.82;
  max-width: 70ch;
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
  padding: 18px;
  border-radius: 26px;

  border: 1px solid rgba(48, 207, 208, 0.18);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.45);
  transition: transform 200ms ease, border-color 200ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(48, 207, 208, 0.35);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

const CardBody = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  opacity: 0.86;
  line-height: 1.8;
  max-width: 70ch;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2px;
`;

const Actions = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PrimaryLink = styled.a`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 650;
  font-size: 14px;

  color: rgba(255, 255, 255, 0.95);
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(
    to bottom right,
    rgba(48, 207, 208, 0.22),
    rgba(51, 8, 103, 0.18)
  );

  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(48, 207, 208, 0.35);
    box-shadow: 0 10px 30px rgba(48, 207, 208, 0.12);
  }

  &:active {
    transform: translateY(0px);
  }
`;

const CardRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none; /* hide preview images on smaller screens */
  }
`;

const ImageLink = styled.a`
  display: block;
  width: 100%;
`;

const Preview = styled.img`
  width: 100%;
  max-width: 520px;
  height: 310px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid rgba(48, 207, 208, 0.22);
  transition: transform 220ms ease, filter 220ms ease;

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.06);
  }
`;

/* mouse glow */
const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(
    circle at ${(props) => props.x}px ${(props) => props.y}px,
    rgba(0, 34, 68, 0.5) 0%,
    rgba(0, 34, 68, 0) 30%
  );
  transition: background 0.1s;
  mix-blend-mode: screen;
`;
