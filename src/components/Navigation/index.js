import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (
    <div className='nav-bar'>
      <Navbar expand="md">
        <NavbarBrand className='w-50' href="/">&lt; Carlos Gómez /&gt;</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse className='w-100' isOpen={isOpen} navbar>
          <Nav className='w-100 justify-content-center' navbar>
              <NavItem>
                <NavLink className={splitLocation[1] === "about" ? "active" : ""} href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "skills" ? "active" : ""} href="/skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "projects" ? "active" : ""} href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={splitLocation[1] === "contact" ? "active" : ""} href="/contact">Contact Me</NavLink>
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