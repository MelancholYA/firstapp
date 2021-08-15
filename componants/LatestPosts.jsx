import Styles from '../styles/LatestPosts.module.css';
import Post from './Post';

const LatestPosts = ({ width, data }) => {
	console.log(data);
	return (
		<div className={Styles.latestPosts} style={{ width: width || '30%' }}>
			<h3>Latest Posts</h3>
			{data && data.map((post) => <Post post={post} key={post.id} />)}
		</div>
	);
};

export default LatestPosts;
