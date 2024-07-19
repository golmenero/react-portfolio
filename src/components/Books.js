import { useTranslation } from "react-i18next";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Book = ({ title, img }) => {
	return (
		<div className="card-panel gradient">
			<div className="image-container">
				<h2 className="title">{title}</h2>
				<img src={img} alt={title} className="background-image" />
			</div>
    	</div>
	)
}

const Books = () => {
	const [t] = useTranslation("global");
	const responsive = {
		superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
	};

	return (
		<section id="books" className='hidden' data-nav="books">
			<h1>{t("navigation.books")}</h1>
			<Carousel responsive={responsive}>
				<Book title='From Objects to Functions' img="books/objects.jpg"></Book>
				<Book title='Grokking Simplicity' img="books/grokking.jpg"></Book>
				<Book title='Code That Fits in Your Head' img="books/code.jpg"></Book>
				<Book title='Design Patterns' img="books/gof.jpg"></Book>
			</Carousel>
		</section>
	)
}

export default Books;