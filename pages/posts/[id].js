import { useRouter } from 'next/dist/client/router';
const Post = () => {
	const router = useRouter();
	console.log(router);
	return <div>hi</div>;
};
export default Post;
