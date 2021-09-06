import BlogHead from '../componants/BlogHead';
import Carousel from '../componants/Carousel';
import Categories from '../componants/Categories';
import cones from '../assets/cones.png';
import Styles from '../styles/FlexContainer.module.css';

import Post from '../componants/Post';

const url = process.env.NEXT_PUBLIC_BASE_URL;
export default function Home({ data }) {
	return (
		<div>
			{data ? (
				<>
					<BlogHead
						pageName='Home'
						Description='travelly blog , specialized in blogging about travels'
					/>
					<Carousel data={data.LatestPostes.filter((item, i) => i !== 0)} />
					<div
						className={Styles.containerReverse}
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
						}}>
						<Categories data={data.Categories} />
						<Post width='calc(100vw - 500px)' post={data.LatestPostes[0]} />
					</div>
				</>
			) : (
				<>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: 'calc(100vh - 90px)',

							textAlign: 'center',
						}}>
						<img src={cones.src} style={{ width: 300, margin: '0 auto' }} />

						<h1>
							<span>500</span> <br />
							Internal server error
						</h1>
						<p>We are currently trying to fix the problem.</p>
					</div>
				</>
			)}
		</div>
	);
}
export async function getStaticProps() {
	try {
		const [latest, categories] = await Promise.all([
			fetch(`${url}/posts?per_page=4`),
			fetch(`${url}/categories?orderby=count&order=desc`),
		]);
		const Categories = await categories.json();
		const LatestPostes = await latest.json();
		return {
			props: {
				data: {
					Categories,
					LatestPostes,
				},
			}, // will be passed to the page component as props
		};
	} catch (err) {
		return {
			props: {
				data: false,
			},
		};
	}
}
