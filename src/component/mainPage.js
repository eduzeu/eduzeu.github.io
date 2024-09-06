import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../NavBar';
import self from "../images/self.jpeg";
import { FaArrowDown } from 'react-icons/fa';
import ProgrammingLanguages from '../skillset/skills';
import Frameworks from '../skillset/frames';
import Typewriter from 'react-typewriter-effect';
import SocialMedia from "../connect";

const MainPage = () => {
  const programmingLanguagesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePos({ x, y });
  };

  const scrollToSection = () => {
    setTimeout(() => {
      if (programmingLanguagesRef.current) {
        programmingLanguagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleScrollButtonClick = () => {
    setIsVisible(true);
    scrollToSection();
  };

  return (
    <AppContainer onMouseMove={handleMouseMove}>
       
      <Background>
        <GradientOverlay x={mousePos.x} y={mousePos.y} />
        <Navbar />
        <Section>
          <Header>
            <SocialMediaContainer>
              <Portrait src={self} />
              <SocialMedia />
            </SocialMediaContainer>
            <TextContainer>
            <AdjustCard> 

              <Title>
                <Typewriter
                  text="Eduardo Hernandez"
                  typeSpeed={50}
                  startDelay={500}
                  cursor={false}
                />
              </Title>
              </AdjustCard> 

              <Degree>
              <AdjustCard> 

                <Typewriter
                  text="Software Engineer"
                  typeSpeed={100}
                  startDelay={1500}
                  cursor={false}
                />
              </AdjustCard> 

              </Degree>
              <Description>
                Hello! I am a Senior at Stevens Institute of Technology with a robust foundation in mathematical
                and programming concepts. My passion for problem-solving drives me to excel in various aspects
                of software development. I have extensive experience in testing software, full stack development, and debugging.
              </Description>
            </TextContainer>
          </Header>
          <CenterButton>
            <ScrollButton onClick={handleScrollButtonClick}>
              My Skillset <Arrow />
            </ScrollButton>
          </CenterButton>
        </Section>
        <SectionTwo ref={programmingLanguagesRef}>
          <SkillsContainer>
            {isVisible && (
              <>
                <ProgrammingLanguages />
                <Frameworks />
              </>
            )}
          </SkillsContainer>
        </SectionTwo>
      </Background>
  
    </AppContainer>
  );
};

const AdjustCard = styled.div`
  margin-bottom: 25px;
  `;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; /* Adjust to 100% to ensure full width alignment */
  margin-left: 13vw;

  @media (max-width: 768px) {
    margin-top: 5vw;
      margin-left: 3vw;

  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Background = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const SectionTwo = styled.div`
  padding: 9vw 0;
  margin-top: 2vw;

  @media (max-width: 768px) {
    padding: 10vw 0;
    margin-top: 5vw;
  }
`;

const Section = styled.div`
  padding: 5vw 0;
  margin-top: 2vw;

  @media (max-width: 768px) {
    padding: 10vw 0;
    margin-top: 5vw;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3.5vw;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10vw;
  }
`;

const SocialMediaContainer = styled.div`
  background: transparent;
  border: 4px solid #00cfcf;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 27vw;
  width: 22vw;
  padding: 15px;
  transition: transform 0.3s;
  margin-right: 1vw;
  transform: translateX(4.5vw);

  &:hover {
    transform: scale(1.1) translateX(5vw);
  }

  @media (max-width: 768px) {
    height: 60vw;
    width: 40vw;
    margin-right: 0;
    transform: translateX(0);
  }
`;

const Portrait = styled.img`
  width: 19.5vw;
  height: 18vw;
  margin: 0;
  border-radius: 50%;
  border: 5px solid transparent;
  box-shadow: 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 35vw;
    height: 32vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5vw;
  font-weight: 600;
  margin-top: -1.5vw;

  @media (max-width: 768px) {
    font-size: 4vw;
    gap: 30px;
  }
`;

const Degree = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1vw;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

const Description = styled.p`
  text-align: center;
  padding: 0 10vw;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5vw;
  line-height: 2.5vw;
  margin-top: -5px;

  @media (max-width: 768px) {
    font-size: 2vw;
    padding: 0 5vw;
    text-align: center;
  }
`;

const ScrollButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px auto;
  padding: 10px 8vw;
  font-size: 2vw;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom right, #30cfd0, #330867);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px 15vw;
    font-size: 5vw;
  }
`;

const SkillsContainer = styled.div`
  margin-top: -10vw;

  @media (max-width: 768px) {
    margin-top: -25vw;
  }
`;

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at ${props => props.x}px ${props => props.y}px, rgba(0, 34, 68, 0.5) 0%, rgba(0, 34, 68, 0) 30%);
  transition: background 0.1s;
  mix-blend-mode: screen;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(5px);
  }
`;

const Arrow = styled(FaArrowDown)`
  margin-left: 10px;
  font-size: 2vw;
  animation: ${fadeInOut} 1.5s infinite;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

export default MainPage;
