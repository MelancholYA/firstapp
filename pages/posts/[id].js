import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import PostBody from '../../componants/Post';
import Similars from '../../componants/Similars';
const url = process.env.NEXT_PUBLIC_BASE_URL;
const Post = ({ data }) => {
	const [posts, setPosts] = useState({
		status: 'loading',
		data: [],
	});
	const getSimilars = async () => {
		setPosts({ ...posts, status: 'loading' });
		let categoriesIDs = '';
		data.categories.map((cat) => (categoriesIDs += cat + ','));
		const res = await fetch(
			`${url}/posts?categories=${categoriesIDs.slice(
				0,
				categoriesIDs.length - 1,
			)}&exclude=${data.id}`,
		);
		const similarposts = await res.json();
		setPosts({ ...posts, status: 'loaded', data: similarposts });
	};
	useEffect(() => {
		getSimilars();
	}, [data.id]);
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'space-between',
			}}>
			<PostBody width='calc(100vw - 500px)' post={data} />
			<Similars data={posts} />
		</div>

		// <>
		// 	{/* <Head>
		// 		<title>Blog name | {data.yoast_head_json.title}</title>
		// 		<meta name='description' content={data.yoast_head_json.title} />
		// 		<link rel='icon' href='/favicon.ico' />
		// 	</Head> */}
		// 	<div
		// 		dangerouslySetInnerHTML={{
		// 			__html: data.content.rendered,
		// 		}}></div>
		// </>
	);
};
export default Post;
export async function getStaticProps(context) {
	const res = await fetch(`${url}/posts?slug=${context.params.id}`);
	// const res = await fetch(`${url}/posts?categories=1473,2368&exclude=116506`);
	const data = await res.json();
	if (!data.length) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data: data[0] }, // will be passed to the page component as props
	};
}

export const getStaticPaths = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};
