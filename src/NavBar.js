import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationBar = styled.nav`
  background: transparent; 
  padding: 0.2rem 3rem; /* Adjust padding for a smaller navbar */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease;
  backdrop-filter: blur(10px); /* Apply blur effect */

  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem; /* Adjust spacing between links */

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(22, 23, 20, 0.9);
    width: 100%;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  &.active {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  & span {
    position: relative;
    z-index: 1;
  }
    &:hover {
    transform: scale(1.1);
    filter: brightness(1.1); /* Optional: Enhance the image brightness on hover */
  }
`;

const Download = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  &.active {
    color: #30cfd0;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
  }

  & span {
    position: relative;
    z-index: 1;
  }
      &:hover {
    transform: scale(1.1);
    filter: brightness(1.1); /* Optional: Enhance the image brightness on hover */
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationBar>
      <MenuButton onClick={handleToggle}>
        {isOpen ? '✖' : '☰'} {/* Toggle between '☰' (menu) and '✖' (close) */}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
        <StyledLink to="/projects" activeClassName="active">Projects</StyledLink>
        <StyledLink to="/experience" activeClassName="active">Experience</StyledLink>
        <Download href={require("../src/resume.pdf")} download="Resume.Eduardo.Hernandez.pdf" activeClassName="active">Resume</Download>
      </NavLinks>
    </NavigationBar>
  );
}

export default Navbar;
