import { useRouter } from 'next/dist/client/router';

const Category = ({ data, stars }) => {
	const router = useRouter();

	return (
		<>
			{/* <Head>
				<title>Blog Name | {category && category.name}</title>
				<meta
					name='description'
					content={category && category.description}></meta>
			</Head> */}
			<div></div>
		</>
	);
};

export async function getStaticProps(context) {
	let data = null;
	try {
		const url = process.env.NEXT_PUBLIC_BASE_URL;
		let [categoryData, categoryPosts] = await Promise.all([
			fetch(`${url}/categories/${context.params.id}`),
			fetch(`${url}/posts?categories=${context.params.id}`),
		]);
		categoryData = await categoryData.json();
		categoryPosts = await categoryPosts.json();
		return {
			props: {
				data: {
					categoryData,
					categoryPosts,
				},
			}, // will be passed to the page component as props
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}
export const getStaticPaths = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};
export default Category;
