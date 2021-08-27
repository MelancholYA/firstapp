import Styles from '../styles/Categories.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { PostContext } from './contexts';
const Categories = ({ data }) => {
	data = data.filter((piece) => piece.description.length !== 0);
	console.log(data);

	return (
		<div className={Styles.Categories}>
			<h3>Categories</h3>
			<ul>
				{data &&
					data.map((categorie) => (
						<Link
							href={{
								pathname: '/categories/[slug]/[id]',
								query: { id: categorie.id, slug: categorie.slug },
							}}
							key={categorie.id}
							passHref>
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
				<li className={Styles.More}>
					<Link
						href={{
							pathname: '/categories',
						}}>
						All categories
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Categories;
