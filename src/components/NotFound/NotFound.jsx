import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { Bg, TitleNotFound, DescriptionNotFound, ButtonNotFound } from "./NotFound.styled"
import { Link } from "react-router-dom"
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable"

function NotFound() {
  return (
    <>
    <ResolutionNotAvailable/>
    <Bg>
      <NavBar/>
      <main>
        <TitleNotFound>404</TitleNotFound>
        <DescriptionNotFound>Página não encontrada</DescriptionNotFound>
        <Link to="/">
            <ButtonNotFound>Voltar para a página inicial</ButtonNotFound>
        </Link>
      </main>
      <Footer/>
    </Bg>
    </>
  )
}

export default NotFound
