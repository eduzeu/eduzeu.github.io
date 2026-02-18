import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <NavWrap>
      <NavInner $scrolled={scrolled}>
        {/* Desktop centered links */}
        <CenterLinks>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/experience">Experience</NavItem>
        </CenterLinks>

        {/* Desktop right CTA */}
        <RightCTA>
          <ResumeButton
            href={require("../src/Resume_Eduardo.Hernandez.pdf")}
            download="Resume.Eduardo.Hernandez.pdf"
          >
            Resume
          </ResumeButton>
        </RightCTA>

        {/* Mobile toggle */}
        <MenuButton onClick={() => setIsOpen((v) => !v)} aria-label="Toggle menu">
          <MenuIcon $open={isOpen}>
            <span />
            <span />
            <span />
          </MenuIcon>
        </MenuButton>
      </NavInner>

      {/* Mobile dropdown */}
      <MobilePanel $open={isOpen}>
        <MobileLink to="/" end onClick={closeMenu}>
          Home
        </MobileLink>
        <MobileLink to="/projects" onClick={closeMenu}>
          Projects
        </MobileLink>
        <MobileLink to="/experience" onClick={closeMenu}>
          Experience
        </MobileLink>

        <MobileResume
          href={require("../src/Resume_Eduardo.Hernandez.pdf")}
          download="Resume.Eduardo.Hernandez.pdf"
          onClick={closeMenu}
        >
          Download Resume
        </MobileResume>
      </MobilePanel>
    </NavWrap>
  );
};

export default Navbar;

/* ---------------- styles ---------------- */

const NavWrap = styled.header`
  position: fixed;
  top: 16px;                 /* ✅ lifts navbar slightly */
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

/* ✅ slimmer + positioned so it doesn't collide with your card */
const NavInner = styled.nav`
  width: min(1120px, 92vw);
  height: 54px;              /* ✅ smaller than before */
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* left spacer | centered links | right CTA */
  align-items: center;

  border-radius: 999px;
  border: 1px solid rgba(48, 207, 208, 0.22);
  background: ${(p) => (p.$scrolled ? "rgba(10, 10, 12, 0.72)" : "rgba(10, 10, 12, 0.55)")};
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    height: 52px;
    grid-template-columns: 1fr auto; /* center not needed; mobile uses button */
  }
`;

const CenterLinks = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightCTA = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* React Router v6 active styling */
const NavItem = styled(NavLink).attrs(() => ({
  className: ({ isActive }) => (isActive ? "active" : ""),
}))`
  position: relative;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: rgba(255, 255, 255, 0.86);
  padding: 9px 12px;
  border-radius: 999px;
  transition: color 160ms ease, background 160ms ease;

  &:hover {
    color: #30cfd0;
    background: rgba(48, 207, 208, 0.08);
  }

  &.active {
    color: #30cfd0;
    background: rgba(48, 207, 208, 0.12);
  }

  &::after {
    content: "";
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 7px;
    height: 2px;
    border-radius: 99px;
    background: linear-gradient(
      to right,
      rgba(48, 207, 208, 0),
      rgba(48, 207, 208, 0.9),
      rgba(51, 8, 103, 0)
    );
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 180ms ease;
    opacity: 0.85;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 650;
  font-size: 14px;

  color: rgba(255, 255, 255, 0.95);
  padding: 9px 14px;
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

/* Mobile */
const MenuButton = styled.button`
  grid-column: 2;
  justify-self: end;
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 999px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuIcon = styled.div`
  width: 22px;
  height: 14px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    transition: transform 180ms ease, top 180ms ease, opacity 180ms ease;
  }

  span:nth-child(1) {
    top: ${(p) => (p.$open ? "6px" : "0px")};
    transform: ${(p) => (p.$open ? "rotate(45deg)" : "none")};
  }
  span:nth-child(2) {
    top: 6px;
    opacity: ${(p) => (p.$open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(p) => (p.$open ? "6px" : "12px")};
    transform: ${(p) => (p.$open ? "rotate(-45deg)" : "none")};
  }
`;

const MobilePanel = styled.div`
  width: min(1120px, 92vw);
  margin: 10px auto 0;
  border-radius: 22px;
  border: 1px solid rgba(48, 207, 208, 0.2);
  background: rgba(10, 10, 12, 0.72);
  backdrop-filter: blur(14px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  padding: 12px;
  display: none;
  gap: 6px;

  transform-origin: top;
  transform: ${(p) => (p.$open ? "scaleY(1)" : "scaleY(0.96)")};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: transform 160ms ease, opacity 160ms ease;

  @media (max-width: 768px) {
    display: grid;
  }

  ${(p) =>
    !p.$open &&
    `
      pointer-events: none;
    `}
`;

const MobileLink = styled(NavLink).attrs(() => ({
  className: ({ isActive }) => (isActive ? "active" : ""),
}))`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 12px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.88);
  transition: background 160ms ease, color 160ms ease;

  &:hover {
    background: rgba(48, 207, 208, 0.08);
    color: #30cfd0;
  }

  &.active {
    background: rgba(48, 207, 208, 0.12);
    color: #30cfd0;
  }
`;

const MobileResume = styled.a`
  margin-top: 6px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 12px;
  border-radius: 14px;

  color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(
    to bottom right,
    rgba(48, 207, 208, 0.22),
    rgba(51, 8, 103, 0.18)
  );
  transition: transform 160ms ease, opacity 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
    opacity: 0.9;
  }
`;
