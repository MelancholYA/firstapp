import { useRouter } from 'next/dist/client/router';
const Post = () => {
	const router = useRouter();
	console.log(router);
	return <div></div>;
};
export default Post;
