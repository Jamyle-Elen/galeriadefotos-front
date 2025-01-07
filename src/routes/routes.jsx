import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Footer from '../components/Footer/Footer'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/footer' element={<Footer/>} />
                    
                    {/* <Route path='*' element={<NotFound/>} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
