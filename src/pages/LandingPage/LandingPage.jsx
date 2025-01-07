import { useState } from 'react';
import { Search, HeroSection, Filter, DropdownMenu, DropdownItem } from './LandingPage.styled';
import NavBar from "../../components/NavBar/NavBar";
import 'boxicons/css/boxicons.min.css';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [colorStyle, setColorStyle] = useState({ color: '#ffffff', iconColor: '#ffffff' });
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (color) => {
    setSelectedColor(color);
    setIsOpen(false);

    if (color === 'Amarelo') {
      setColorStyle({ color: 'yellow', iconColor: 'yellow' });
    } else if (color === 'Branco') {
      setColorStyle({ color: 'white', iconColor: 'white' });
    } else if (color === 'Verde') {
      setColorStyle({ color: 'green', iconColor: 'green' });
    } else {
      setColorStyle({ color: '#ffffff', iconColor: '#ffffff' });
    }
  };

  return (
    <>
      <NavBar />
      <HeroSection>
        <Search>
          <input type="text" />
          <button><i className='bx bx-search'></i></button>
        </Search>

        <Filter>
          <i 
            className='bx bxs-filter-alt' 
            style={{ color: colorStyle.iconColor }} 
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <span onClick={() => setIsOpen(!isOpen)}>{selectedColor || 'Filtrar'} 
            </span>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem onClick={() => handleFilterChange('Amarelo')}>Amarelo</DropdownItem>
              <DropdownItem onClick={() => handleFilterChange('Branco')}>Branco</DropdownItem>
              <DropdownItem onClick={() => handleFilterChange('Verde')}>Verde</DropdownItem>
              <DropdownItem onClick={() => handleFilterChange('')}>Limpar</DropdownItem>
            </DropdownMenu>
          )}
        </Filter>
      </HeroSection>
      <Footer />
    </>
  );
};

export default LandingPage;
