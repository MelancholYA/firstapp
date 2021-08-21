import { useRouter } from 'next/dist/client/router';
const Category = ({ data }) => {
	const router = useRouter();
	console.log(data);
	return <div>this is a category</div>;
};
export async function getStaticProps(context) {
	const url = process.env.NEXT_PUBLIC_BASE_URL;
	const res = await fetch(
		`${url}/posts?filter[category_slug]=${context.params.id}`,
	);
	const data = await res.json();
	if (!data.length) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data: data }, // will be passed to the page component as props
	};
}
export const getStaticPaths = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};
export default Category;
