import Nav from './Nav';
import MainStyles from '../styles/main.module.css';
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main className={MainStyles.main}>{children}</main>
		</>
	);
};

export default Layout;
