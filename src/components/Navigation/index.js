import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav-bar'>
      <Navbar expand="md">
        <NavbarBrand className='w-50' href="/">&lt; Carlos Gómez /&gt;</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse className='w-100' isOpen={isOpen} navbar>
          <Nav className='w-100 justify-content-center' navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact Me</NavLink>
              </NavItem>
              </Nav>
            <Nav className='w-100 justify-content-end'>
              <NavItem className='right'>
                <NavLink href="https://www.linkedin.com/in/carlos-gomez-colmenero/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </NavLink>
              </NavItem>
              <NavItem className='right'>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;