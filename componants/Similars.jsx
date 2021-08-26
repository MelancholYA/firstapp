import Styles from '../styles/Categories.module.css';
import Link from 'next/link';
const Similars = ({ data }) => {
	return (
		<div className={Styles.Categories}>
			<h3
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '15px',
				}}>
				Similar Posts
				{data.status === 'loading' && (
					<svg
						width='25'
						height='25'
						viewBox='0 0 38 38'
						xmlns='http://www.w3.org/2000/svg'
						stroke='#fff'>
						<g fill='none' fill-rule='evenodd'>
							<g transform='translate(1 1)' stroke-width='2'>
								<circle stroke-opacity='.5' cx='18' cy='18' r='18' />
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
				)}
			</h3>
			<ul>
				{Array.isArray(data.data) && data.data.langth == 0 ? (
					<li>No data yet...</li>
				) : (
					data.data.map((categorie) => (
						<Link href={'/posts/' + categorie.slug} key={categorie.id} passHref>
							<li className={Styles.Category}>
								<h4
									dangerouslySetInnerHTML={{
										__html: categorie.title.rendered,
									}}></h4>
								<div
									style={{ fontSize: 14, fontWeight: 500, padding: 10 }}
									dangerouslySetInnerHTML={{
										__html: categorie.excerpt.rendered,
									}}></div>
							</li>
						</Link>
					))
				)}
			</ul>
		</div>
	);
};

export default Similars;
