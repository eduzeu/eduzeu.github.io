import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar';
import web from "../images/personalweb.png";
import music from "../images/music.png";
import trivia from "../images/trivi.png";
import wifly from "../images/wifly.png";

function Projects() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        setMousePos({ x, y });
    };

    return (
        <AppContainer onMouseMove={handleMouseMove}>
            <Background>
                <GradientOverlay x={mousePos.x} y={mousePos.y} />
                <Navbar />
                <Content>
                    <ExperienceDetails>
                    <ExperienceItem>
                            <ClickableBox>
                                <DateRange>WiFly NYC </DateRange>
                                <JobDescription>
                               WiFly NYC is your go-to guide for finding free WiFi hotspots and cozy
                              spaces to work, study, or simply unwind as well as events happening in the city, such as
                              festivals, street markets, or sports events.
                                    <ButtonContainer>
                                        <ScrollButton>HTML</ScrollButton>
                                        <ScrollButton>CSS</ScrollButton>
                                        <ScrollButton>JavaScript</ScrollButton>
                                    </ButtonContainer>
                                </JobDescription>
                            </ClickableBox>
                            <a href = "https://github.com/eduzeu/546website">
                            <Image src={wifly} alt="wifly" />
                            </a>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ClickableBox>
                                <DateRange>Personal Website</DateRange>
                                <JobDescription>
                                    Developed an interactive personal website using React. Utilized CSS and JavaScript
                                    animations to create an engaging and user-friendly front-end experience. Designed a responsive 
                                    layout to ensure optimal viewing across various devices. Implemented smooth scrolling and dynamic 
                                    content updates for a seamless user experience. Focused on clean, maintainable code and modern 
                                    web development practices to enhance both performance and scalability.
                                    <ButtonContainer>
                                        <ScrollButton>JavaScript</ScrollButton>
                                        <ScrollButton>HTML</ScrollButton>
                                        <ScrollButton>CSS</ScrollButton>
                                        <ScrollButton>React</ScrollButton>
                                    </ButtonContainer>
                                </JobDescription>
                            </ClickableBox>
                            <a href = "https://github.com/eduzeu/eduzeu.github.io">
                            <Image src={web} alt="Personal Website" />
                            </a>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ClickableBox>
                                <DateRange>My Music Website</DateRange>
                                <JobDescription>
                                    Developed a website where users can explore the music industry, find out news, see trends, and discover
                                    new music utilizing the Spotify API. Users can create new playlists based on their favorite genres,
                                    have access to articles regarding their favorite artists, and access to a database with +1000 song suggestions.
                                    <ButtonContainer>
                                        <ScrollButton>HTML</ScrollButton>
                                        <ScrollButton>CSS</ScrollButton>
                                        <ScrollButton>JavaScript</ScrollButton>
                                    </ButtonContainer>
                                </JobDescription>
                            </ClickableBox>
                            <a href = "https://github.com/eduzeu/mymusic">
                            <Image src={music} alt="My Music Website" />
                            </a>
                        </ExperienceItem>

                        <ExperienceItem>
                            <ClickableBox>
                                <DateRange>Trivia Game</DateRange>
                                <JobDescription>
                                    Implemented a trivia game in C using sockets. The game allows up to 3 users to connect to the network and play.
                                    Users will compete by answering trivia questions, with their responses being sent to the server for validation. 
                                    The game tracks scores in real-time, providing immediate feedback to players. Designed the system to handle 
                                    multiple connections simultaneously, ensuring a smooth and interactive gaming experience for all participants.
                                    <ButtonContainer>
                                        <ScrollButton>C</ScrollButton>
                                        <ScrollButton>Linux OS</ScrollButton>
                                    </ButtonContainer>
                                </JobDescription>
                            </ClickableBox>
                            <a href='https://github.com/eduzeu/trivia'>
                            <Image src={trivia} alt="Trivia Game" />
                            </a>
                        </ExperienceItem>
                    </ExperienceDetails>
                </Content>
            </Background>
        </AppContainer>
    );
}

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: auto; /* Make the entire container scrollable */
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at ${props => props.x}px ${props => props.y}px, rgba(0, 34, 68, 0.5) 0%, rgba(0, 34, 68, 0) 30%);
  transition: background 0.1s;
  mix-blend-mode: screen; /* Optional: To blend with background */
`;

const Background = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  position: relative; /* Ensure gradient overlay is positioned correctly */
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
  margin-left: 100px;
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 20px; /* Space between items */
  margin: 100px auto;
  max-width: 1000px; /* Optional: To limit the maximum width */
  padding: 0 20px; /* Optional: Padding to handle content edges */

  @media (max-width: 768px) {
    margin: 50px auto; /* Adjust margin for smaller screens */
    padding: 0 10px; /* Reduce padding for smaller screens */
  }
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  gap: 20px; /* Space between text and image */

  @media (min-width: 769px) {
    flex-direction: row; /* Align items side by side on larger screens */
  }
`;

const ClickableBox = styled.div`
  background: transparent; /* Transparent background */
  border: 2px solid transparent; /* Transparent border */
  border-radius: 10px; /* Rounded corners */
  padding: 20px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    border-color: #00ffff; /* Aqua border on hover */
  }
`;

const DateRange = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ddd; /* Light color for contrast */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px; /* Smaller font size on smaller screens */
  }
`;

const JobDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #fff; /* Ensure text is visible */
  text-align: justify;
  margin-top: 15px;
  word-wrap: break-word; /* Ensure text wraps within the box */

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller font size on smaller screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between buttons */
  margin-top: 10px; /* Space above the buttons */
`;

const ScrollButton = styled.button`
  padding: 5px 20px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background: transparent; /* Make the button background transparent */
  color: #00ffff; /* Font color aqua */
  border: 2px solid #00ffff; /* Border to make the button visible */
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 500px; /* Adjust based on your image size */
  height: 300px;
  border-radius: 30px;
  border: 3px solid #00ffff; /* Aqua border color */
  transition: filter 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effect */
  
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide images on smaller screens */
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1); /* Optional: Enhance the image brightness on hover */
  }
`;

export default Projects;
