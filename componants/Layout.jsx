import Nav from './Nav';
import Styles from '../styles/Layout.module.css';
import NextNprogress from 'nextjs-progressbar';
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<NextNprogress
				color='#29D'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<main className={Styles.main}>{children}</main>
		</>
	);
};

export default Layout;
