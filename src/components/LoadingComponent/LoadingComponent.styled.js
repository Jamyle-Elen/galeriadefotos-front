import styled, { keyframes } from 'styled-components';

const revealVertical = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%);
    opacity: 0.5;
  }
  100% {
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
    opacity: 1;
  }
`;

export const LoadingInitial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 10000;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  letter-spacing: .5rem;
  text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
  color: white;
  font-family: "Kaushan Script", serif;
  font-weight: 400;
  font-style: normal;
  animation: ${revealVertical} 3s ease forwards;
`;
