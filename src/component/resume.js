import React from "react";
import styled from "styled-components";
import Navbar from "../NavBar";

function Resume() {
	return (
		<Page>
			<Navbar />
			<Container>
				<Header>
					<Title>About / Resume</Title>
					<Subtitle>
						This page contains a short summary. Add a downloadable resume PDF to the
						`src/images` folder and update this component to link it.
					</Subtitle>
				</Header>

				<Body>
					Brief summary — Stevens CS grad, full-stack engineer focused on reliable APIs
					and user-friendly frontends. If you want, I can add a download link here.
				</Body>
			</Container>
		</Page>
	);
}

export default Resume;

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

const Body = styled.p`
	margin: 18px 0 0;
	font-family: "Poppins", sans-serif;
	opacity: 0.86;
	line-height: 1.8;
`;
