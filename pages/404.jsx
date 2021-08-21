import Illustration404 from '../assets/404.svg';
import Styles from '../styles/404.module.css';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
const Custom404 = () => {
	const [duray, setDuray] = useState(3);
	const reduce = () => {
		setDuray(duray - 1);
	};
	const router = useRouter();
	setInterval(reduce, 1000);
	duray === 0 && router.push('./');
	return (
		<div className={Styles.container}>
			<img src={Illustration404.src} alt='llustration of 404 status' />
			<div className='text'>
				<h1>The page you requested seems to be unreachable </h1>
				<h5>we&lsquo;ll redirect you to the home page afte {duray}s</h5>
			</div>
		</div>
	);
};

export default Custom404;
