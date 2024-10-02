import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import NavbarAbout from './components/NavbarAbout.jsx';
import FooterAbout from './components/FooterAbout.jsx';

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* Routing setiap halaman */}
                <Routes>

                    <Route path="/" element={<div>
                        <Navbar />
                        <HomePage />
                        <Footer />
                        </div>} />  

                    <Route path="/about" element={<div>
                        <NavbarAbout />
                        <About />
                        <FooterAbout />
                        </div>} />  
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
