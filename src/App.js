import './App.scss';
import { Container } from 'reactstrap';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Others from './components/Others';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
	const [t] = useTranslation("global");

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX - 18;
		let y = e.clientY - 18;

		let cursor = document.querySelector('.ball');
		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';
	});

	useEffect(() => {
		let animation_elements = document.querySelectorAll('.hidden');
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add('show');
				else entry.target.classList.remove('show');
			})
		}, { threshold: 0.15 });
		animation_elements.forEach((item) => {
			observer.observe(item);
		})

		let navigation_elements = document.querySelectorAll('[data-nav]');
		let observer_nav = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					let navLi = document.querySelectorAll("a.nav-link");
					let nav = '#' + entry.target.getAttribute("data-nav");

					navLi.forEach((link) => {
						link.classList.remove("active");
						if (link.getAttribute("href") === nav) link.classList.add("active");
					});
				}
			})
		}, { threshold: 0.15 });
		navigation_elements.forEach((item) => {
			observer_nav.observe(item);
		})
	});

	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<div className="ball"></div>
				<div className='primary-color'>
					<Container>
						<Home />
					</Container>
				</div>
				<div id="wave">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
					</svg>
					<div id="more" className='text-center'>
						<a href="#about"> {t("home.more")} <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
					</div>
				</div>
				<div className='secondary-color'>
					<Container>
						<About />
						<Skills />
						<Projects />
						<Others />
						<Contact />
					</Container>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
