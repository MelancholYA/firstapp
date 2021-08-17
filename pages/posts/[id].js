import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
const url = process.env.NEXT_PUBLIC_BASE_URL;
const Post = ({ data }) => {
	console.log(data);
	return (
		<>
			<Head>
				<title>Blog name | {data.yoast_head_json.title}</title>
				<meta name='description' content={data.yoast_head_json.title} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div
				dangerouslySetInnerHTML={{
					__html: data.content.rendered,
				}}></div>
		</>
	);
};
export default Post;
export async function getStaticProps(context) {
	const res = await fetch(`${url}/posts?slug=${context.params.id}`);
	const data = await res.json();
	console.log(context);
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
