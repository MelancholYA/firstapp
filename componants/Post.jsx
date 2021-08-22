import Styles from '../styles/MainPost.module.css';
import moment from 'moment';
const Post = ({ width, post }) => {
	console.log(post);
	return (
		<div className={Styles.post} style={{ width: width }}>
			<div className={Styles.title}>
				<h1>{post.title.rendered}</h1>
				<span>
					{moment(post.date).format(' MMMM Do YYYY')} -{' '}
					{post.author_info?.display_name}
				</span>
			</div>

			<div
				dangerouslySetInnerHTML={{
					__html: post.content.rendered,
				}}></div>
		</div>
	);
};

export default Post;
