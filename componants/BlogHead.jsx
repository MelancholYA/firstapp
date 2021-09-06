import Head from 'next/head';
const BlogHead = ({ pageName, Description }) => {
	return (
		<Head>
			<title>Travelly | {pageName} </title>
			<meta name='description' content={Description} />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

export default BlogHead;
