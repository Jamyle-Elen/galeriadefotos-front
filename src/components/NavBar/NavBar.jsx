import { NavBarContainer, Menu, Logo } from './NavBar.styled'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <NavBarContainer>
      <Menu>
        <Link to="/">
          <Logo>PG</Logo>
        </Link>
        <h1>Galeria de Fotos</h1>
        <p></p>
      </Menu>
    </NavBarContainer>
    </>
  );
};

export default NavBar;
