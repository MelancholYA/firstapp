import Styles from '../styles/Categories.module.css';
import Link from 'next/link';
const Categories = ({ data }) => {
	data = data.filter((piece) => piece.description.length !== 0);
	console.error(data);
	return (
		<div className={Styles.Categories}>
			<h3>Categories</h3>
			<ul>
				{data &&
					data.map((categorie) => (
						<Link href={'/categories/' + categorie.slug} key={categorie.id}>
							<li className={Styles.Category}>
								<h4>{categorie.name}</h4>
								<div
									style={{ fontSize: 14, fontWeight: 500, padding: 10 }}
									dangerouslySetInnerHTML={{
										__html: categorie.description,
									}}></div>
							</li>
						</Link>
					))}
			</ul>
		</div>
	);
};

export default Categories;
