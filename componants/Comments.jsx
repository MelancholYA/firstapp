import Styles from '../styles/Comments.module.css';

const Comments = () => {
	return (
		<div>
			<div className={Styles.write}>
				<textarea placeholder='Write your comment'></textarea>
				<button>Submit</button>
			</div>
			<ul className={Styles.comments}>
				<li>
					<h5>User Name</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Exercitationem ab eveniet aperiam voluptatum esse ut?
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Comments;
