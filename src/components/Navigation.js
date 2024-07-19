import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navigation = () => {
	const [t, i18n] = useTranslation("global");

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const switchLang = (lang) => {
		let current = localStorage.getItem('lang');

		if (current !== lang) {
			localStorage.setItem('lang', lang);
			i18n.changeLanguage(lang)
		}
	}

	useEffect(() => {
		/**
		 * Set Language
		 */
		let lang = localStorage.getItem('lang');
		if (!lang) {
			lang = "es";
			localStorage.setItem('lang', lang);
		}
		if (lang !== i18n.language) i18n.changeLanguage(lang);

		document.body.classList.add('dark');

		let togglerIcon = document.querySelector(".navbar-toggler-icon");
		if (togglerIcon) {
			togglerIcon.innerHTML = '';
			let icon = document.createElement('i');
			icon.classList.add("bx", "bx-menu");
			togglerIcon.appendChild(icon);
		}
	});

	return (
		<div id="navigation" className='nav-bar'>
			<Navbar expand="md">
				<NavbarBrand href="#home">Carlos Gómez</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="#home">{t("navigation.home")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#skills">{t("navigation.skills")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#projects">{t("navigation.projects")}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#contact">{t("navigation.contact-me")}</NavLink>
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