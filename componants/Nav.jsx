import Link from 'next/link';
import Image from 'next/image';
import HeaderStyles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
const Nav = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setMenuOpened(false);
	}, [router.pathname]);
	return (
		<header className={HeaderStyles.header}>
			<Link href='/' passHref>
				<Image src='/vercel.svg' width={120} height={50} />
			</Link>

			<button
				className={
					HeaderStyles.toggle + ' ' + (menuOpened && HeaderStyles.toggleOpen)
				}
				onClick={() => setMenuOpened(!menuOpened)}>
				<span></span>
			</button>
			<nav
				className={
					HeaderStyles.nav + ' ' + (menuOpened && HeaderStyles.navOpen)
				}>
				<Link href='/' passHref>
					Home
				</Link>
				<Link href='/about' passHref>
					About
				</Link>
				<Link href='/contact' passHref>
					Contact us
				</Link>
			</nav>
		</header>
	);
};

export default Nav;
