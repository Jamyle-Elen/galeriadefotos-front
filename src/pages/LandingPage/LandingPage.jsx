import { useState, useEffect } from 'react';
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
  NoResults,
  ButtonLearnMore
} from './LandingPage.styled';
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import 'boxicons/css/boxicons.min.css';
import api from '../../config/api';

const LandingPage = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [colorStyle, setColorStyle] = useState({ color: '#ffffff', iconColor: '#ffffff' });
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  
  const loadMorePhotos = () => {
    if (!loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  const getPhotos = async () => {
    const cachedPhotos = localStorage.getItem('photos');
    const cachedDescriptions = localStorage.getItem('descriptions');
  
    if (cachedPhotos && cachedDescriptions) {
      setPhotos(JSON.parse(cachedPhotos));
      setDescription(JSON.parse(cachedDescriptions));
      setLoading(false);
    } else {
      try {
        const response = await api.get('/api/photos', {
          params: {
            page: page,
            per_page: 30,
          }
        });
  
        if (response.data.length === 0) {
          setLoading(false);
          return;
        }
  
        const newPhotos = response.data.map(item => ({
          url: item.urls.regular,
          description: item.alternative_slugs.pt
        }));
  
        const updatedPhotos = page === 1 ? newPhotos : [...photos, ...newPhotos.filter(item => !photos.some(existing => existing.url === item.url))];
  
        setPhotos(updatedPhotos);
  
        localStorage.setItem('photos', JSON.stringify(updatedPhotos));
  
        if (response.data.length < 30) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const formatDescription = (description) => {
    if (!description) {
      return '';
    }
  
    const withoutId = description.split('-').slice(0, -1).join(' ');
  
    const words = withoutId.split(' ');
  
    if (words[8] && ['em', 'de', 'da', 'se', 'a', 'no', 'por', 'do', 'e', 'para', 'uma', 'um'].includes(words[8].toLowerCase())) {
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
              Nenhuma imagem encontrada
            </NoResults>
          )}
        </GridContainer>
        <ButtonLearnMore onClick={loadMorePhotos} disabled={loading}>
            {loading ? "Carregando..." : "Carregar mais imagens"}
        </ButtonLearnMore>
      </HeroSection>
      <Footer />
    </>
  );
};

export default LandingPage;
