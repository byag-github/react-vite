import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
import NavbarAbout from './components/NavbarAbout';
import FooterAbout from './components/FooterAbout';

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
