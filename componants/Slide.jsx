import { useState, useEffect } from 'react';
import Defaultbackground from '../assets/bg1.jpg';
const url = process.env.NEXT_PUBLIC_BASE_URL;
import Link from 'next/link';
const Slide = ({ item, Styles }) => {
	const getImages = async () => {
		try {
			let imageLink = await fetch(url + '/media/' + item.featured_media).then(
				(res) => res.json(),
			);
			console.log(imageLink);
			setBackground(imageLink.media_details.sizes.medium);
		} catch (error) {
			console.log(error.response);
		}
	};
	useEffect(() => {
		getImages();
	}, []);
	const [background, setBackground] = useState(Defaultbackground.src);
	return (
		<div className={Styles.holder}>
			<div
				style={{
					backgroundImage: `url('${background}')`,
				}}
				className={Styles.item}>
				<span>{item.source}</span>
				<Link href='ggfd'>
					<h1
						dangerouslySetInnerHTML={{
							__html: item.title.rendered,
						}}></h1>
				</Link>

				<div
					dangerouslySetInnerHTML={{
						__html: item.excerpt.rendered,
					}}></div>
			</div>
		</div>
	);
};

export default Slide;
