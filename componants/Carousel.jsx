import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../styles/Carousel.module.css';

import Slide from './Slide';
export default function Carousel({ data }) {
	console.log(data);
	const settings = {
		accessibility: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	const items = [
		{
			key: 1,
			background: '../assets/bg1.png',
			source: 'The New York Times',
			title: 'Must see places for summer',
			excerpt:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit ametelit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpatex eget elit venenatis, vel luctus arcu pulvinar. ',
		},
		{
			key: 2,
			background: '../assets/bg2.jpg',
			source: 'The New York Times',
			title: 'Must see places for summer',
			excerpt:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit ametelit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpatex eget elit venenatis, vel luctus arcu pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit ametelit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpatex eget elit venenatis, vel luctus arcu pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit ametelit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpatex eget elit venenatis, vel luctus arcu pulvinar. ',
		},
		{
			key: 3,
			source: 'The New York Times',
			title: 'Must see places for summer',
			excerpt:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit ametelit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpatex eget elit venenatis, vel luctus arcu pulvinar. ',
		},
	];
	return (
		<Slider {...settings}>
			{data.map((item) => (
				<Slide key={item.id} item={item} Styles={Styles} />
			))}
		</Slider>
	);
}
