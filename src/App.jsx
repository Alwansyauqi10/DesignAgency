import { Routes, Route } from 'react-router-dom';
import NavbarComponents from "./Components/NavbarComponents";
import FooterComponents from "./Components/FooterComponents";


import Homepage from "./pages/HomePage";
import Services from "./pages/ServicesPage";
import Portfolio from "./pages/PortfolioPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";


function App() {
  return (
  <div>
    <NavbarComponents/>

      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/Services" Component={Services}/>
        <Route path="/Portfolio" Component={Portfolio}/>
        <Route path="/Testimonial" Component={TestimonialPage}/>
        <Route path="/Faq" Component={FaqPage}/>
      </Routes>
    
    <FooterComponents/>
  </div>
  );
}

export default App;
