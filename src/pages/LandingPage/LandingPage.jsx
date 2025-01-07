import { useState } from 'react';
import { 
  Search, 
  HeroSection, 
  Container, 
  Filter, 
  DropdownMenu, 
  DropdownItem, 
  GridContainer,
  // Arts,
  Frame,
  // Square,
  StyledImage,
  NameImage
} from './LandingPage.styled';
import NavBar from "../../components/NavBar/NavBar";
import 'boxicons/css/boxicons.min.css';
import Footer from '../../components/Footer/Footer';

const images = [
  { src: 'https://images.unsplash.com/photo-1735946502926-a62b89c6982c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1735946502926-a62b89c6982c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

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
        <Container>
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
            <span onClick={() => setIsOpen(!isOpen)}>
              {selectedColor || 'Filtrar'}
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
        </Container>

        <GridContainer>
      {images.map((image, index) => (
        <>
          <Frame key={index}>
            <StyledImage src={image.src} alt={`Imagem ${index + 1}`} />
            <NameImage>Nome test</NameImage>
          </Frame>
        </>
      ))}
    </GridContainer>
      </HeroSection>
      <Footer />
    </>
  );
};

export default LandingPage;
