import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Styles from '../../../styles/CategoryPage.module.css';
import useSWR from 'swr';
import { useRouter } from 'next/dist/client/router';

const url = process.env.NEXT_PUBLIC_BASE_URL;
const Category = ({ categoryData }) => {
	const loader = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const router = useRouter();
	const fetcher = (args) => fetch(args).then((res) => res.json());
	const [pageNum, setPageNum] = useState(1);
	const pages = [];
	for (let index = 0; index < Math.round(categoryData.count / 12); index++) {
		pages.push(index + 1);
	}
	const { data } = useSWR(
		`${url}/posts?categories=${router.query.id}&per_page=12&page=${pageNum}`,
		fetcher,
	);
	return (
		<>
			<Head>
				<title>Blog Name | {categoryData.name}</title>
				<meta name='description' content={categoryData.description}></meta>
			</Head>
			<div className={Styles.header}>
				<h1>{categoryData.name}</h1>
				<h3>{categoryData.description}</h3>
			</div>

			<ul className={Styles.postsHolder}>
				{!data ? (
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
					data.map((post) => (
						<li
							key={post.id}
							style={{ backgroundImage: `url(${post.featured_image_src})` }}>
							<>
								<Link href={`/posts/${post.slug}`} passHref>
									<h3
										dangerouslySetInnerHTML={{
											__html: post.title.rendered,
										}}></h3>
								</Link>
							</>
						</li>
					))
				)}
			</ul>
			<div className={Styles.buttons}>
				{pages.map((page) => (
					<button
						key={page}
						className={page === pageNum ? Styles.active : undefined}
						onClick={() => {
							setPageNum(page);
							window.scrollTo(0, 0);
						}}>
						{page}
					</button>
				))}
			</div>
		</>
	);
};

export async function getStaticProps(context) {
	try {
		let categoryData = await fetch(
			`${url}/categories/${context.params.id}`,
		).then((res) => res.json());
		return {
			props: {
				categoryData,
			}, // will be passed to the page component as props
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}
export async function getStaticPaths(context) {
	const paths = [];
	return { paths, fallback: 'blocking' };
}
export default Category;

// <p>I know your cautious about travel in 2021. There is a lot to consider. The future of travel has never been more uncertain and out of our control and we recently shared our top travel &hellip;</p>
// <p class="read-more"> <a class="" href="https://www.ytravelblog.com/steps-prepare-travel/"> <span class="screen-reader-text">11 Steps to Prepare for Travel in 2021</span> Read More »</a></p>
