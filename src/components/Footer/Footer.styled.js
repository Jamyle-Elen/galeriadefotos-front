import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px -3px 4px, rgba(0, 0, 0, 0.23) 0px -2px 6px;

  @media (max-width: 300px) {
    display: none;
  }
`;

export const FooterContent = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0 0 0;

  span {
    margin: 0 10px;

    i {
      font-size: 1.2rem;
      margin: 0 4px;
      color: var(--primary-color);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

export const Line = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 15%;
  display: flex;
  padding: 0 50px;
`;

export const Copyright = styled.div`
  text-align: center;
  p {
    font-size: 0.8rem;
    margin: 10px 0 0 0;
  }
`;

export const Attribution = styled.p`
  font-family: "Reenie Beanie", serif;
  font-weight: 400;
`;

export const FooterBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--line-color);
`;
