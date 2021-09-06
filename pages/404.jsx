import Illustration404 from '../assets/404.svg';
import Styles from '../styles/404.module.css';
import BlogHead from '../componants/BlogHead';
import Link from 'next/link';
const Custom404 = () => {
	return (
		<>
			<BlogHead pageName='404' />
			<div className={Styles.container}>
				<img src={Illustration404.src} alt='llustration of 404 status' />
				<div className='text'>
					<h1>The page you requested seems to be unreachable </h1>
					<h5>
						<Link href='/'>Go Home</Link>
					</h5>
				</div>
			</div>
		</>
	);
};

export default Custom404;
