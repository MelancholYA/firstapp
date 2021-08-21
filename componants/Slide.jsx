import { useState, useEffect } from 'react';
import moment from 'moment';
const url = process.env.NEXT_PUBLIC_BASE_URL;
import Link from 'next/link';
const Slide = ({ item, Styles }) => {
	const getImages = async () => {
		try {
			let imageLink = await fetch(url + '/media/' + item.featured_media).then(
				(res) => res.json(),
			);
			console.log(imageLink);
			setBackground(imageLink.media_details.sizes.medium.source_url);
		} catch (error) {
			console.log(error.response);
		}
	};
	useEffect(() => {
		getImages();
	}, []);
	const [background, setBackground] = useState(null);
	return (
		<div className={Styles.holder}>
			<div
				style={{
					backgroundImage: background
						? `url('${background}')`
						: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
				}}
				className={Styles.item}>
				<span>{moment(item.date).format(' MMMM Do YYYY')}</span>
				<div>
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
		</div>
	);
};

export default Slide;
