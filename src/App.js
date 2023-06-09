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
import Wave from './components/Wave';
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
		<div id="container">
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
				<Wave />
				<span id="more" className='text-center'>
					<a href="#about"> {t("home.more")} <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
				</span>
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
		</div>
	);
}

export default App;
