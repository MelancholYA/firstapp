import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../styles/Carousel.module.css';
import background from '../assets/bg1.jpg';
import Link from 'next/link';
export default function Carousel() {
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
			{items.map((item) => (
				<div key={item.key} className={Styles.holder}>
					<div
						style={{
							backgroundImage: `url('${background.src}')`,
						}}
						className={Styles.item}>
						<span>{item.source}</span>
						<Link href='ggfd'>
							<h1>{item.title}</h1>
						</Link>

						<p>
							{item.excerpt.split(' ').length <= 50
								? item.excerpt
								: ' '.concat(
										item.excerpt.split(' ').slice(0, 49).join(' '),
										'...',
								  )}
						</p>
					</div>
				</div>
			))}
		</Slider>
	);
}
