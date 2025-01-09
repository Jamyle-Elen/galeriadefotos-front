import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Search,
  HeroSection, 
  Container, 
  GridContainer,
  Frame,
  StyledImage,
  NameImage,
  NoResults,
  ButtonLearnMore
} from './LandingPage.styled';
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import LoadingComponentInitial from "../../components/LoadingComponent/LoadingComponent";
import 'boxicons/css/boxicons.min.css';
import api from '../../config/api';
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable';

const LandingPage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [hasMorePhotos, setHasMorePhotos] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 3000)

  const handleSearch = () => {
    setSearchLoading(true);
    setSearchTriggered(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const loadMorePhotos = () => {
    if (!buttonClicked && !loading) {
      setButtonClicked(true);
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getPhotos = useCallback(async () => {
    try {
      const response = await api.get('/api/photos', {
        params: {
          page: page,
          per_page: 10,
        }
      });

      const photosData = response.data.hits;

      if (Array.isArray(photosData)) {
        const newPhotos = photosData.map(item => ({
          url: item.webformatURL,
          description: item.tags
        }));

        const updatedPhotos = page === 1 ? newPhotos : [...photos, ...newPhotos];

        setPhotos(updatedPhotos);

        if (photosData.length < 10) {
          setHasMorePhotos(false);
        }

        setLoading(false);
        setButtonClicked(false);
      } else {
        console.error("response.data.hits não é um array", response.data.hits);
        setLoading(false);
        setButtonClicked(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setButtonClicked(false);
    }
  }, [page, photos]);

  const formatDescription = (tags) => {
    if (!tags) return '';
  
    const tagsArray = tags.split(',').map(tag => tag.split(' ')[0]).filter(tag => tag.trim() !== '');
  
    return tagsArray.length > 0 
      ? tagsArray.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ') 
      : '';
  };
  

  const filteredPhotos = photos.filter((photo) =>
    formatDescription(photo.description)?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
        <ResolutionNotAvailable/>
      <NavBar />
      <HeroSection>
      <LoadingComponentInitial isLoading={isLoading} />
        <Container>
          <Search>
            <input 
              type="text" 
              value={searchQuery} 
              onChange={handleSearchQuery} 
              placeholder='Buscar imagem'
              aria-label="Pesquisar imagens"
            />
            <button onClick={handleSearch} aria-label="Iniciar busca">
              <i className='bx bx-search'></i>
            </button>
          </Search>
        </Container>
        {searchLoading ? <p>Carregando...</p> : (searchTriggered && <p>Resultados encontrados: {filteredPhotos.length}</p>)}
        <GridContainer>
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo, index) => (
              <Frame
                key={index}
                className="photo-frame"
                data-aos="fade-up"
              >
                <StyledImage src={photo.url} alt={`Imagem ${index + 1}`} />
                <NameImage>{formatDescription(photo.description)}</NameImage>
              </Frame>
            ))
          ) : (
            <NoResults>
              Nenhuma imagem encontrada
            </NoResults>
          )}
        </GridContainer>
        {hasMorePhotos && (
          <ButtonLearnMore 
            onClick={loadMorePhotos} 
            disabled={loading || buttonClicked}
          >
            {loading ? "Carregando..." : "Carregar mais imagens"}
          </ButtonLearnMore>
        )}
      </HeroSection>
      <Footer />
    </>
  );
};

export default LandingPage;
