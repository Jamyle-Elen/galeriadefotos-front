import { useState } from 'react';
import { 
  Search, 
  HeroSection, 
  Container, 
  Filter, 
  DropdownMenu, 
  DropdownItem, 
  GridContainer,
  Frame,
  StyledImage,
  NameImage,
  NoResults
} from './LandingPage.styled';
import NavBar from "../../components/NavBar/NavBar";
import 'boxicons/css/boxicons.min.css';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import api from '../../config/api';

const LandingPage = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [colorStyle, setColorStyle] = useState({ color: '#ffffff', iconColor: '#ffffff' });
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


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

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = async () => {
    try {
      const response = await api.get('/api/photos');
        const photosUrls = response.data.map(item => item.urls.regular)
        setPhotos(photosUrls);
      const description = response.data.map(item => item.alternative_slugs.pt);
      setDescription(description)
        console.log(description)

        console.log(photosUrls);
    } catch (error) {
        console.log(error);
    }
  }

  // fitlro das palavras
  const formatDescription = (description) => {
    const withoutId = description.split('-').slice(0, -1).join(' ');

    const words = withoutId.split(' ');

    // so pra limitar as palavras finais evitar as "frases inacabadas"
    if (words[8] && ['em', 'de', 'da', 'se', 'a', 'para'].includes(words[8].toLowerCase())) {
      return words.slice(0, 8).join(' ');
    }
  
    return words.slice(0, 9).join(' ');
  };

  const filteredPhotos = photos.filter((photo, index) =>
    formatDescription(description[index]) ? formatDescription(description[index]).toLowerCase().includes(searchQuery.toLowerCase()) : ''
  );

  return (
    <>
      <NavBar />
      <HeroSection>
        <Container>
          <Search>
            <input type="text" value={searchQuery} onChange={handleSearchQuery} placeholder='Buscar imagem'/>
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
        {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo, index) => (
              <Frame key={index}>
                <StyledImage src={photo} alt={`Imagem ${index + 1}`} />
                <NameImage>{formatDescription(description[index])}</NameImage>
              </Frame>
            ))
          ) : (
            <NoResults>
              {/* <img src="https://images.vexels.com/media/users/3/127978/isolated/preview/b5dc5cfbf9438604b6f856fda4abdc93-lupa-desenhada-a-mao.png" alt="" /> */}
              Nenhuma imagem encontrada
              </NoResults>
          )}
        </GridContainer>
      </HeroSection>
      <Footer />
    </>
  );
};

export default LandingPage;
