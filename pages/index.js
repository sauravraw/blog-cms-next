import Head from "next/head";
import styles from "../styles/Home.module.css";
import getAllBlogs from "../contentstack/queries/getAllBlogs";

export default function Home() {
	return <></>;
}

export const getStaticProps = async () => {
	const header = await getAllBlogs("Blog-CMS-Header-Saurav");
	const body = await getAllBlogs("Blog-CMS-Saurav");
	const footer = await getAllBlogs("Blog-CMS-Footer-Saurav");
	return {
		props: {
			header: [...header],
			body: [...body[0]],
			footer: [...footer],
		},
	};
};
