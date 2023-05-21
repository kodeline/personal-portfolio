import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import './Navigation.css';

function Navigation () {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect (() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    
    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll); 

  }, [])

  const handleLinks = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home' className='nav-brand'>NAVARRO</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link 
              id='hola'
              href='#home' 
              className={` link ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}`}  
              onClick={() => handleLinks('home')}> Home
            </Nav.Link>
            <Nav.Link 
              href='#skills' 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleLinks('skills')}> Skills
            </Nav.Link>
            <Nav.Link 
              href='#projects' 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={()=> handleLinks('projects')}> Projects
            </Nav.Link> 
            <Nav.Link 
              href='#contact' 
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
              onClick={()=> handleLinks('contact')}> Contact
            </Nav.Link>  
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><RiGithubFill/></a>
              <a href='#'><RiLinkedinFill/></a>
            </div>
            <button>Dark Theme</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation