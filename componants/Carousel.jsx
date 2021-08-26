import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../styles/Carousel.module.css';

import Slide from './Slide';
export default function Carousel({ data }) {
	const settings = {
		accessibility: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<Slider {...settings}>
			{data.map((item) => (
				<Slide key={item.id} item={item} Styles={Styles} />
			))}
		</Slider>
	);
}
