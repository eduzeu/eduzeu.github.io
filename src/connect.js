import React from 'react';
import styled from 'styled-components';
import linkedin from "./images/linke.png";
import github from "./images/gbb.png";
import gmail from "./images/gmial.png";

const SocialMedia = () => {
    return (
        <Container>
            <Link href="https://www.linkedin.com/in/ehernandez12/" target="_blank" rel="noopener noreferrer">
                <Size src={linkedin} alt="LinkedIn" />
            </Link>
            <Link href="https://github.com/eduzeu" target="_blank" rel="noopener noreferrer">
                <Size src={github} alt="GitHub" />
            </Link>
            <Link href="mailto:ehernand1@stevens.edu">
                <Size src={gmail} alt="Gmail" />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 25px; /* Adjust gap between images as needed */
    align-items: center; /* Center items vertically */
    height: 100px; /* Adjust height as needed to see the alignment effect */
    margin-top: -5px;
   
`;


const Size = styled.img`
    width: 2.2vw;
`;

const Link = styled.a`
    text-decoration: none;  
     &:hover {
    transform: scale(1.1); /* Enlarge on hover */
  }
`;

export default SocialMedia;
