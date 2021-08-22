import Styles from '../styles/MainPost.module.css';
import moment from 'moment';
const Post = ({ width, post }) => {
	const bodyParts = post.content.rendered.split(
		'Pin Below To Save On Pinterest',
	);
	//.findIndex((item) => item == 'Pin');

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
					__html: bodyParts[0],
				}}></div>
		</div>
	);
};

export default Post;
