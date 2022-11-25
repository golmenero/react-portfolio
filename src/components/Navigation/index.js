import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");

  const switchTheme = () => {
    let theme = localStorage.getItem('theme');
    
    if (theme) {
      document.body.classList.remove(theme);
      theme = theme === 'light' ? 'dark' : 'light';
    } else theme = "light";

    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
  document.addEventListener('DOMContentLoaded', switchTheme());
  
  return (
    <div className='nav-bar'>
      <Navbar expand="md">
        <NavbarBrand className='w-50' href="/">&lt; Carlos Gómez /&gt;</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse className='w-100' isOpen={isOpen} navbar>
          <Nav className='liner w-100 justify-content-center' navbar>
              <NavItem>
                <NavLink className={splitLocation[1] === "about" ? "active" : ""} href="./about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "skills" ? "active" : ""} href="./skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "projects" ? "active" : ""} href="./projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "contact" ? "active" : ""} href="./contact">Contact Me</NavLink>
              </NavItem>
          </Nav>
          <Nav className='w-100 justify-content-end'>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/carlos-gomez-colmenero/">
                <FontAwesomeIcon className='highlighted-text' icon={faLinkedin} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/golmenero">
                <FontAwesomeIcon className='highlighted-text' icon={faGithub} />
              </NavLink>
            </NavItem>
            <NavItem className='point'>
              <NavLink onClick={switchTheme}>
                <FontAwesomeIcon className='highlighted-text' icon={faLightbulb} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;