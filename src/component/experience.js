import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../NavBar";
import Chip from "./Chip";

function Experience() {
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
          <Title>Experience</Title>
          <Subtitle>
            Roles and projects where I shipped real work, learned fast, and focused on reliable systems.
          </Subtitle>
        </Header>

        <Timeline>
          {/* Interlix */}
          <Item>
            <Left>
              <Dot />
              <Line />
            </Left>

            <Card>
              <TopRow>
                <Role>
                  Software Engineer Intern <Sep>|</Sep> Interlix Staffing
                </Role>
                <Date>Jun 2025 - Oct 2025</Date>
              </TopRow>

              <Body>
                At Interlix, I worked as a Software Engineer, where I developed and maintained backend services
                for the new hiring plaftorm using Node.js and Express. I implemented RESTful APIs to manage job
                postings, applications, profile management and JWT authenthication. I also collaborated with the
                front-end team to integrate APIs with React components, ensuring seamless user experience.
                Additionally, I wrote unit tests using Jest to ensure code quality and reliability, and contributed
                to documentation for backend services and API endpoints.
              </Body>

              <Chips>
                <Chip>Javascript</Chip>
                <Chip>React</Chip>
                <Chip>MongoDB</Chip>
                <Chip>JWT</Chip>
              </Chips>
            </Card>
          </Item>

          {/* Cyasoon */}
          <Item>
            <Left>
              <Dot />
              <Line />
            </Left>

            <Card>
              <TopRow>
                <Role>
                  Software Engineer <Sep>|</Sep> Cyasoon
                </Role>
                <Date>May 2024 - August 2024</Date>
              </TopRow>

              <Body>
                At Cyasoon, I worked as a Full-Stack Software Engineer, where I created and executed over 80 unit
                tests using Jest to ensure comprehensive coverage of REST-API services. I developed and debugged
                backend features with Node.js, and utilized JavaScript to manage video functionality routes integrated
                with the database. On the front-end, I enhanced UI features with React, connecting them to the backend
                API for seamless user interactions. Additionally, I authored detailed documentation to clarify unit
                testing, backend development, and front-end integration processes.
              </Body>

              <Chips>
                <Chip>JavaScript</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>React</Chip>
                <Chip>Node.js</Chip>
              </Chips>
            </Card>
          </Item>

          {/* TA */}
          <Item>
            <Left>
              <Dot />
              <Line />
            </Left>

            <Card>
              <TopRow>
                <Role>
                  Teaching Assistant <Sep>|</Sep> Stevens Insitute of Technology
                </Role>
                <Date>May 2023 - Jun 2023</Date>
              </TopRow>

              <Body>
                I worked at Stevens Institute of Technology as a TA for a Python Programming course. The course
                entailed introduction to Python programming. I taught +50 students the basics of Python as well as
                the use of Jupyter Notebooks and introductor y Data Science concepts, including linear regression and
                data engineering.
              </Body>

              <Chips>
                <Chip>Python</Chip>
                <Chip>Jupyter Notebooks</Chip>
              </Chips>
            </Card>
          </Item>

          {/* Research */}
          <Item>
            <Left>
              <Dot />
              <Line />
            </Left>

            <Card>
              <TopRow>
                <Role>
                  Research Assistant <Sep>|</Sep> John Cabot University
                </Role>
                <Date>Jun 2023 - August 2023</Date>
              </TopRow>

              <Body>
                participated in a Data Science project at John Cabot University, where I leveraged advanced Data
                Engineering techniques to process and analyze large-scale datasets. The GradientOverlay was to
                identify students at risk of dropping out of school and allocate resources to mitigate these risks.
                Using Machine Learning algorithms, specifically decision trees and linear regression models, we
                developed predictive analytics to calculate the dropout risk percentages.
              </Body>

              <Chips>
                <Chip>Python</Chip>
                <Chip>Jupyter Notebooks</Chip>
              </Chips>
            </Card>
          </Item>

          {/* Bergen */}
          <Item>
            <Left>
              <Dot />
            </Left>

            <Card>
              <TopRow>
                <Role>
                  Software Engineer <Sep>|</Sep> Bergen Community College
                </Role>
                <Date>Jan 2021 - May 2022</Date>
              </TopRow>

              <Body>
                I worked as a Software Engineer Intern for a cybersecurity project called "Ethical Hacking Using C++"
                at Bergen Community College. Here, I wrote malware using C/C++. I used system calls to access low-level
                computer features, used sockets, pipes, and implemented keyloggers, trojans, and user-friendly mini-games
                in C++ to showcase cybersecurity practices. I also helped on the front end design to create a friendly
                website that would have suspicious links and adds that would crash the computer if clicked.
              </Body>

              <Chips>
                <Chip>C++</Chip>
                <Chip>C</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>Javascript</Chip>
              </Chips>
            </Card>
          </Item>
        </Timeline>
      </Container>
    </Page>
  );
}

export default Experience;

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
  padding-top: 120px; /* fixed navbar spacing */
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

const Timeline = styled.div`
  display: grid;
  gap: 18px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 14px;
  align-items: stretch;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #30cfd0, #330867);
  box-shadow: 0 0 18px rgba(48, 207, 208, 0.45);
  margin-top: 18px;
`;

const Line = styled.div`
  width: 2px;
  flex: 1;
  margin-top: 10px;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    rgba(48, 207, 208, 0.55),
    rgba(51, 8, 103, 0.2),
    rgba(255, 255, 255, 0)
  );
`;

const Card = styled.article`
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
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const Role = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.25;
`;

const Sep = styled.span`
  margin: 0 10px;
  opacity: 0.5;
`;

const Date = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  opacity: 0.8;
  padding-top: 2px;
`;

const Body = styled.p`
  margin: 10px 0 0;
  font-family: "Poppins", sans-serif;
  opacity: 0.86;
  line-height: 1.8;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
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
