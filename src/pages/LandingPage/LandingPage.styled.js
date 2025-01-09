import styled from "styled-components";

export const Search = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 40px;

  input {
    flex: 1;
    max-width: 300px;
    width: 100%;
    height: 35px;
    border-radius: 15px 0 0 15px;
    border: none;
    padding: 0 10px;
    outline: none;
    padding: 0 20px;
    background-color: var(--input-color);
  }

  button {
    height: 35px;
    width: 60px;
    border-radius: 0 15px 15px 0;
    border: none;
    background-color: var(--input-color);
    cursor: pointer;

    i {
      font-size: 18px;
    }
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const Filter = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;
  border: var(--primary-color) solid 1px;
  height: 35px;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 14px;
  cursor: pointer;

  span {
    margin-left: 8px;
    font-weight: bold;
  }

  i {
    font-size: 15px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 10px 13px;
  cursor: pointer;
  font-weight: bold;
  color: var(--bg-color);

  &:hover {
    background: #f0f0f0;
  }
`;

export const GridContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  columns: 5;
  gap: 16px;
  padding: 20px;
`;

export const Square = styled.div`
  margin-top: 5px;
  border: 5px solid #ccc;
  width: 30px;
`

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
  filter: grayscale(20%);
  transition: transform 0.3s ease-in-out;

  &:nth-child(1) { height: 100%;  }
  &:nth-child(2) { height: 150px; }
  &:nth-child(3) { height: 300px; }
  &:nth-child(4) { height: 250px; }
  &:nth-child(5) { height: 350px; }
`;

export const NameImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  opacity: 0; 
  pointer-events: none; 
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

export const Frame = styled.div`
  border: 10px solid #ccc;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 10px;
  background: var(--line-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0,0,0,0.2) 3px 3px 6px 0px inset, rgba(0,0,0,0.1) -3px -3px 6px 1px inset;
  overflow: hidden;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover div {
    transform: translateY(0);
  }
  &:hover ${NameImage} {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  
  &:nth-child(1) { height: 200px; }
  &:nth-child(2) { height: 150px; }
  &:nth-child(3) { height: 300px; }
  &:nth-child(4) { height: 250px; }
  &:nth-child(5) { height: 350px; }
  &:nth-child(6) { height: 200px; }
  &:nth-child(7) { height: 150px; }
  &:nth-child(8) { height: 300px; }
  &:nth-child(9) { height: 250px; }
  &:nth-child(10) { height: 350px; }

  &:hover {
    transform: scale(1.005);
    box-shadow: rgba(0,0,0,0.2) 3px 3px 6px 0px inset, rgba(0,0,0,0.1) -3px -3px 6px 1px inset, rgba(255, 255, 255, 0.2) 0px 30px 90px;
  }
`;

export const NoResults= styled.div`
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 340vh; /* GAGA */
`;

export const ButtonLearnMore = styled.button`
  height: 50px;
  max-width: 1170px;
  background-color: transparent;
  border: var(--lineButton-color) 1px solid;
  width: 100%;
  color: var(--input-color);
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: var(--lineButton-color);
    color: var(--primary-color);
  }
`
