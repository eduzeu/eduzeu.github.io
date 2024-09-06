import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar';
 
function Experience() {
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
                  <AlignItems> 
                    <ExperienceDetails>
                        <DateRange>May 2024 - August 2024</DateRange>
                        <JobDescription>
                            <ClickableBox>
                            <Position>
                                Software Engineer 
                                <span style={{ margin: '0 15px' }}>|</span> 
                                Cyasoon
                              </Position>                                
                                <DescriptionText>
                                  At Cyasoon, I worked as a Full-Stack Software Engineer, where I created and executed over 80 unit tests using Jest 
                                  to ensure comprehensive coverage of REST-API services. I developed and debugged backend features with Node.js, 
                                  and utilized JavaScript to manage video functionality routes integrated with the database. 
                                  On the front-end, I enhanced UI features with React, connecting them to the backend API for seamless user interactions. Additionally, 
                                  I authored detailed documentation to clarify unit testing, backend development, and front-end integration processes.
                                </DescriptionText>
                                <ButtonContainer>
                                    <ScrollButton>JavaScript</ScrollButton>
                                    <ScrollButton>HTML</ScrollButton>
                                    <ScrollButton>CSS</ScrollButton>
                                    <ScrollButton>React</ScrollButton>
                                    <ScrollButton>Node.js</ScrollButton>
                                </ButtonContainer>
                            </ClickableBox>
                        </JobDescription>

                        <DateRange>May 2023 - Jun 2023</DateRange>
                        <JobDescription>
                            <ClickableBox>
                                <Position>Teaching Assistant 
                                <span style={{ margin: '0 15px' }}>|</span> 
                                  Stevens Insitute of Technology
                                </Position>
                                <DescriptionText>
                                    I worked at Stevens Institute of Technology as a TA for a Python Programming course. The course entailed introduction
                                    to Python programming. I taught +50 students the basics of Python as well as the use of Jupyter Notebooks and introductor
                                    y Data Science concepts, including linear regression and data engineering. 
                                </DescriptionText>
                                <ButtonContainer>
                                    <ScrollButton>Python</ScrollButton>
                                    <ScrollButton>Jupyter Notebooks</ScrollButton>
                                </ButtonContainer>
                            </ClickableBox>
                        </JobDescription>

                        <DateRange>Jun 2023 - August 2023</DateRange>
                        <JobDescription>
                            <ClickableBox>
                                <Position>Research Assistant 
                                <span style={{ margin: '0 15px' }}>|</span> 
                                John Cabot University
                                </Position>
                                <DescriptionText>
                                participated in a Data Science project at John Cabot University, where I leveraged advanced Data Engineering
                                 techniques to process and analyze large-scale datasets. The GradientOverlay was to identify students at risk 
                                 of dropping out of school and allocate resources to mitigate these risks. Using Machine Learning algorithms, 
                                 specifically decision trees and linear regression models, we developed predictive analytics to calculate the
                                 dropout risk percentages. 
                                </DescriptionText>
                                <ButtonContainer>
                                    <ScrollButton>Python</ScrollButton>
                                    <ScrollButton>Jupyter Notebooks</ScrollButton>
                                </ButtonContainer>
                            </ClickableBox>
                        </JobDescription>

                        <DateRange>Jan 2021 - May 2022</DateRange>
                        <JobDescription>
                            <ClickableBox>
                                <Position>Software Engineer 
                                <span style={{ margin: '0 15px' }}>|</span> 
                                Bergen Community College
                                </Position>
                                <DescriptionText>
                                    I worked as a Software Engineer Intern for a cybersecurity project called "Ethical Hacking Using C++"
                                    at Bergen Community College. Here, I wrote malware using C/C++. I used system calls to access low-level
                                    computer features, used sockets, pipes, and implemented keyloggers, trojans, and user-friendly mini-games 
                                    in C++ to showcase cybersecurity practices. I also helped on the front end design to create a friendly 
                                    website that would have suspicious links and adds that would crash the computer if clicked. 
                                </DescriptionText>
                                <ButtonContainer>
                                    <ScrollButton>C++</ScrollButton>
                                    <ScrollButton>C</ScrollButton>
                                    <ScrollButton>HTML</ScrollButton>
                                    <ScrollButton>CSS</ScrollButton>
                                    <ScrollButton>Javascript</ScrollButton>
                                </ButtonContainer>
                            </ClickableBox>
                        </JobDescription>
                     
                     </ExperienceDetails>
                     </AlignItems>
                </Content>
            </Background>
        </AppContainer>
    );
}



 
const AlignItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
  margin-top: 90px;

    @media (max-width: 768px) {
    margin-top: 40px;
  }

`;
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
  margin-top: 15px;
  align-items: center;
`;

const ExperienceDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Adjust the ratio as needed */
  gap: 30px; /* Space between columns */
  margin: 100px auto;
  max-width: 800px; /* Optional: To limit the maximum width */
  margin-top: 70px;

    @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns vertically on small screens */
    margin: 20px auto;
    max-width: 100%;
  }
`;

const DateRange = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ddd; /* Light color for contrast */
  text-align: left;
  margin-top: 25px;


  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start; /* Align items to the start */
  gap: 10px; /* Space between text and button */
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #fff; /* Ensure text is visible */
  text-align: left;
`;

const ClickableBox = styled.div`
  background: transparent; /* Transparent background */
  border: 2px solid transparent; /* Transparent border */
  border-radius: 10px; /* Rounded corners */
  padding: 20px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  width: 110%;

  margin-bottom: -25px; /* Space below each ClickableBox */
  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    border-color: #00ffff; /* Aqua border on hover */
  }
`;

const Position = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0; /* Remove top margin and add space below */
`;

const DescriptionText = styled.div`
  margin-bottom: 20px; /* Increased space below description text */
    text-align: justify;
     
    @media (max-width: 768px) {
    font-size: 14px;
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Increased space between buttons */
  margin-top: 10px; /* Space between the button container and the description text */
  flex-wrap: wrap; /* Allow buttons to wrap on small screens */
  justify-content: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollButton = styled.button`
  padding: 5px 15px; /* Adjust padding for better button appearance */
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background: transparent; /* Transparent button background */
  color: #00ffff; /* Font color aqua */
  border: 2px solid #00ffff; /* Border to make the button visible */
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin: 0; /* Remove additional margin for better alignment */
  
  
  &:hover {
    background-color: rgba(0, 255, 255, 0.1); /* Slight aqua background on hover */
    transform: scale(1.05);
  }
     @media (max-width: 768px) {
    margin: 5px; /* Space between buttons on small screens */
  }
`;




export default Experience;
