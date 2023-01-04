import './index.scss';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navigation = () => {
	const [t, i18n] = useTranslation("global");

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const setUp = () => {
		/**
		 * Set Language
		 */
		let lang = localStorage.getItem('lang');
		if (!lang) {
			lang = "es";
			localStorage.setItem('lang', lang);
		}
		if (lang !== i18n.language) i18n.changeLanguage(lang);

		/**
		 * Set Theme
		 */
		let theme = localStorage.getItem('theme');
		if (!theme) theme = 'dark';
		localStorage.setItem('theme', theme);

		document.body.classList.remove('dark');
		document.body.classList.remove('light');
		document.body.classList.add(theme);

		let themeIcon = document.querySelector("#theme-icon");
		if (themeIcon) {
			themeIcon.classList.remove('bx-sun');
			themeIcon.classList.remove('bx-moon');
			themeIcon.classList.add(theme === 'dark' ? "bx-sun" : "bx-moon");
		}

		let togglerIcon = document.querySelector(".navbar-toggler-icon");
		if (togglerIcon) {
			togglerIcon.innerHTML = '';
			let icon = document.createElement('i');
			icon.classList.add("bx", "bx-menu");
			togglerIcon.appendChild(icon);
		}
	};

	const switchTheme = () => {
		let theme = '';
		if (document.body.classList.contains('light')) theme = 'light';
		else if (document.body.classList.contains('dark')) theme = 'dark';

		theme = theme === 'dark' ? 'light' : 'dark';

		document.body.classList.remove('dark');
		document.body.classList.remove('light');
		document.body.classList.add(theme);
		localStorage.setItem('theme', theme);

		let themeIcon = document.querySelector("#theme-icon");
		if (themeIcon) {
			themeIcon.classList.remove('bx-sun');
			themeIcon.classList.remove('bx-moon');
			themeIcon.classList.add(theme === 'dark' ? "bx-sun" : "bx-moon");
		}
	}

	const switchLang = (lang) => {
		let current = localStorage.getItem('lang');

		if (current !== lang) {
			localStorage.setItem('lang', lang);
			i18n.changeLanguage(lang)
		}
	}

	document.addEventListener('DOMContentLoaded', setUp());

	return (
		<div className='nav-bar'>
			<Navbar expand="md">
				<NavbarBrand className='w-50' href="#home">Carlos Gómez</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse className='w-100' isOpen={isOpen} navbar>
					<Nav className='liner w-100 justify-content-center' navbar>
						<NavItem>
							<NavLink href="#about">{t("navigation.about")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#skills">{t("navigation.skills")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#projects">{t("navigation.projects")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#others">{t("navigation.others")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#contact">{t("navigation.contact-me")}</NavLink>
						</NavItem>
					</Nav>
					<Nav className='w-100 justify-content-end'>
						<NavItem className='point'>
							<NavLink onClick={switchTheme}>
								<i id="theme-icon" className='bx bx-sun'></i>
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav>
								<i className={t("navigation.flag")}></i>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem onClick={() => { switchLang("es") }}>
									<span className="fi fi-es"></span>{t("lang.es")}
								</DropdownItem>
								<DropdownItem onClick={() => { switchLang("en") }}>
									<span className="fi fi-gb"></span>{t("lang.en")}
								</DropdownItem>
								<DropdownItem onClick={() => { switchLang("fr") }}>
									<span className="fi fi-fr"></span>{t("lang.fr")}
								</DropdownItem>
								<DropdownItem onClick={() => { switchLang("de") }}>
									<span className="fi fi-de"></span>{t("lang.de")}
								</DropdownItem>
								<DropdownItem onClick={() => { switchLang("ca") }}>
									<span className="fi fi-es-ct"></span>{t("lang.ca")}
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;