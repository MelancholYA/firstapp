import Layout from '../componants/Layout';
import '../styles/globals.css';
import { PostContextProvider } from '../componants/contexts/index';

function MyApp({ Component, pageProps }) {
	return (
		<PostContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PostContextProvider>
	);
}

export default MyApp;
