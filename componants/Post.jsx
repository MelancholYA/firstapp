import Styles from '../styles/Post.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const url = process.env.NEXT_PUBLIC_BASE_URL;
const Post = ({ post }) => {
	const [imgUrl, setImgUrl] = useState(null);
	const getImage = async () => {
		const res = await fetch(`${url}/media/${post.featured_media}`);
		const data = await res.json();
		setImgUrl(data.source_url);
	};
	useEffect(() => {
		getImage();
	}, []);
	return (
		<Link
			href={{
				pathname: '/posts/[id]',
				query: {
					id: post.slug,
				},
			}}>
			<div className={Styles.container} key={post.id}>
				<img src={imgUrl} alt={post.title.rendered} />
				<div className={Styles.text}>
					<h5
						dangerouslySetInnerHTML={{
							__html: post.title.rendered,
						}}></h5>
					<div
						dangerouslySetInnerHTML={{
							__html: post.excerpt.rendered,
						}}></div>
				</div>
			</div>
		</Link>
	);
};

export default Post;
