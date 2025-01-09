import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 300px) {
    display: none;
  }
`;

export const Menu = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: 1px;

    font-family: "Kaushan Script", serif;
  font-weight: 400;
  font-style: normal;
  }
`;

export const Logo = styled.div`
  font-family: "Rock Salt", cursive;
  color: var(--primary-color);
`;
