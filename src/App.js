import './App.scss';
import { Container } from 'reactstrap';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Others from './components/Others';
import Footer from './components/Footer';

function App() {

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX - 10;
		let y = e.clientY - 10;

		let cursor = document.querySelector('.ball');
		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';
	});

	useEffect(() => {
		const animation_elements = document.querySelectorAll('.hidden');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add('show');
				else entry.target.classList.remove('show');
			})
		}, { threshold: 0.15 });
		animation_elements.forEach((item) => {
			observer.observe(item);
		})

		const navigation_elements = document.querySelectorAll('[data-nav]');
		const observer_nav = new IntersectionObserver((entries) => {
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

	useEffect(() => {
		let path = document.querySelector('path');
		let pathLength = path.getTotalLength();

		path.style.strokeDasharray = pathLength + " " + pathLength;
		path.style.strokeDashoffset = pathLength;

		window.addEventListener('scroll', () => {
			let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
			var drawLength = pathLength * scrollPercentage;
			path.style.strokeDashoffset = pathLength - drawLength;
		})
	});

	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<div className="ball"></div>
				<div className='gradient-color'>
					<Container>
						<Home />
					</Container>
				</div>
				<div className='line-container'>
					<svg viewBox="0 0 255 1858" fill="none" preserveAspectRatio='xMidYMax meet'>
						<path d="M101.5 -0.5V336C101.5 348.333 101.5 373.9 101.5 377.5C101.5 382 18.5 476.5 101.5 504C184.5 531.5 159.159 390 83 390C59.5 390 48.5 445.333 49 476.5C52.3333 506.667 66.7 516.9 101.5 540.5C136.3 564.1 136.5 646.833 122 675C115.333 680.333 100.3 744.1 101.5 750.5C102.7 756.9 95.8333 790.333 101.5 812L138.673 932.5C142.173 978 160.145 1016 156 1078.5C149.5 1176.5 29.5 1180 8 1078.5C-9.2 997.3 25 985 37.5 1028.5C38 1050.83 30.8087 1080.63 19.5 1119.5C11.5 1147 145.5 1182 140 1224.5C134.5 1267 118.5 1295 101.5 1327C84.5 1359 101.5 1361 101.5 1411.5C101.5 1451.9 101.5 1531.67 101.5 1566.5V2095" stroke="#171719" strokeWidth="5"/>
					</svg>
				</div>
				<div className='secondary-color'>
					<Container className='mt-0'>
						<About />
						<Skills />
						<Projects />
						<Others />
						<Contact />
					</Container>
				</div>
				<Socials />
			</main>
			<footer>
				<Footer className='gradient-color inverted'/>
			</footer>
		</>
	);
}

export default App;
