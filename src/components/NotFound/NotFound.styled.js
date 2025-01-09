import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 10%;
  }
`;

export const Bg = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 300px) {
        display: none;
    }

    & main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        max-width: 1280px;
        width: 100%;
        height: 80vh;
    }
`

export const TitleNotFound = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 6rem;
    border-right: 2px solid var(--text-color);
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    font-weight: 400;
    color: var(--text-color);
    animation: ${typingAnimation} 2s steps(4, end), blinkCursor 0.8s step-end infinite;

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`

export const DescriptionNotFound = styled.p`
    color: var(--text-opactity-color);
`

export const ButtonNotFound = styled.button`
    height: 50px;
    max-width: 200px;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    background-color: transparent;
    border: var(--lineButton-color) 1px solid;
    color: var(--input-color);
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: var(--lineButton-color);
        color: var(--primary-color);
    }
`
