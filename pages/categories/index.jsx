const url = process.env.NEXT_PUBLIC_BASE_URL;
import Styles from '../../styles/CategoryPage.module.css';
import Link from 'next/link';

const index = ({ categories }) => {
	categories = categories.filter(
		(piece) => piece.description.length !== 0 && piece.count !== 0,
	);
	return (
		<div>
			<ul className={Styles.postsHolder}>
				{!categories ? (
					<ul className={Styles.postsHolder}>
						{loader.map((post) => (
							<li key={post} style={{ margin: 10 }}>
								<svg
									width='80'
									height='80'
									viewBox='0 0 38 38'
									xmlns='http://www.w3.org/2000/svg'
									stroke='#0404044a'
									style={{ margin: 'auto' }}>
									<g fill='none' fillRule='evenodd'>
										<g transform='translate(1 1)' strokeWidth='2'>
											<circle strokeOpacity='.5' cx='18' cy='18' r='18' />
											<path d='M36 18c0-9.94-8.06-18-18-18'>
												<animateTransform
													attributeName='transform'
													type='rotate'
													from='0 18 18'
													to='360 18 18'
													dur='1s'
													repeatCount='indefinite'
												/>
											</path>
										</g>
									</g>
								</svg>
							</li>
						))}
					</ul>
				) : (
					categories.map((category) => (
						<li className={Styles.details} key={category.id}>
							<div className={Styles.detailsHeader}>
								<Link
									href={`categories/${category.slug}/${category.id}`}
									passHref>
									<h3
										dangerouslySetInnerHTML={{
											__html: category.name,
										}}></h3>
								</Link>
								<span>
									{category.count} post{category.count > 1 && 's'}
								</span>
							</div>

							<p>{category.description}</p>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	try {
		let categories = await fetch(`${url}/categories?per_page=100`).then((res) =>
			res.json(),
		);
		return {
			props: {
				categories,
			}, // will be passed to the page component as props
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}

export default index;
