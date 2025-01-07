import styled from "styled-components";

export const Search = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 40px;

  input {
    flex: 1;
    min-width: 300px;
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
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
