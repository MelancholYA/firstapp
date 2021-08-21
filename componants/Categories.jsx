import Styles from '../styles/Categories.module.css';
const Categories = ({ data }) => {
	console.log(data);

	return (
		<div className={Styles.Categories}>
			<h3>Categories</h3>
			<ul>
				{data &&
					data.map((categorie) => (
						<li>
							<h4>{categorie.name}</h4>
							<div
								dangerouslySetInnerHTML={{
									__html: categorie.description,
								}}></div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Categories;
