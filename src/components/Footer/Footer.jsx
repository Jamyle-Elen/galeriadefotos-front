import { FooterContainer, FooterContent, SocialMedia, Line, Copyright, Attribution, FooterBar } from "./Footer.styled";

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterContent>
        <SocialMedia>
            <Line />
                <span>
                <a href="https://www.instagram.com/umaxayahboa/" target="_blank"><i className='bx bxl-instagram' ></i></a>
                <a href="https://github.com/Jamyle-Elen" target="_blank"><i className='bx bxl-github' ></i></a>
                <a href="https://www.linkedin.com/in/jamyle-elen/" target="_blank"><i className='bx bxl-linkedin-square' ></i></a>
                <a href="https://www.facebook.com/jamyle.elen/" target="_blank"><i className='bx bxl-facebook-square' ></i></a>
                </span>
                
            <Line />
        </SocialMedia>
        <Copyright>
            <p>© 2025 Galeria de Fotos. Todos os direitos reservados</p>

            <Attribution>By Jamyle Elen</Attribution>
            </Copyright>
        </FooterContent>
        <FooterBar/>
    </FooterContainer>
    </>
  );
};

export default Footer;