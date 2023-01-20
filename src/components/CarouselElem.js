import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const CarouselElem = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);


	const next = () => {
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const previous = () => {
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const slides = items.map((item, index) => {
		return (
			<CarouselItem key={item.src}>
				<div className='d-flex justify-content-center'>
					<img src={item.src} alt={item.caption} />
				</div>
			</CarouselItem>
		);
	})

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
       		{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
	);
};

export default CarouselElem;