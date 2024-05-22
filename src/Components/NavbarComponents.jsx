import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import {navLinks} from "../data/index.js";
import {NavLink} from "react-router-dom";
import logos from '../assets/img/logos.png';


const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor (true);
    } else {
      setChangeColor (false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="/"> <img src={logos} alt="Design Agency Logo" className="animate__animated animate__fadeInDown" style={{ marginLeft: "-13px", animationDelay: '0.3s' }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="animate__animated animate__fadeInDown" style={{ animationDelay: '0.3s' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center animate__animated animate__fadeInDown" style={{ animationDelay: '0.3s' }}>
            {navLinks.map((link) => {
              return (
                <div className='nav-link' key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } end >
                    {link.text}</NavLink>
                </div>
              );
            })}
          </Nav>
          <div className='text-center'>
            <button className='btn-contact rounded-3 animate__animated animate__fadeInDown' style={{ animationDelay: '0.3s' }}>Contact</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComponents;