import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Menu = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: 1px;
  }
`;

export const Logo = styled.div`
  font-family: "Rock Salt", cursive;
  color: var(--primary-color);
`;
