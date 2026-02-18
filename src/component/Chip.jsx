import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const Chip = styled.span`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 12.5px;
  padding: 7px 12px;
  border-radius: 999px;
  cursor: default;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(48, 207, 208, 0.18);

  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease,
    background 160ms ease;

  /* subtle inner glow */
  box-shadow:
    inset 0 0 0 rgba(48, 207, 208, 0),
    0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(48, 207, 208, 0.45);

    background: linear-gradient(
      to bottom right,
      rgba(48, 207, 208, 0.18),
      rgba(51, 8, 103, 0.18)
    );

    box-shadow:
      0 6px 18px rgba(48, 207, 208, 0.22),
      inset 0 0 12px rgba(48, 207, 208, 0.25);
  }
`;

export default Chip;
