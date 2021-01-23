import Head from "next/head";
import styles from "../styles/Home.module.css";
import getAllBlogs from "../contentstack/queries/getAllBlogs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function Blog(props) {
	return (
		<>
			<Header header={props.header} />
			<Body body={props.body} />
			<Footer footer={props.footer} />
		</>
	);
}

export const getStaticProps = async () => {
	const header = await getAllBlogs("blog_cms_header_saurav");
	const body = await getAllBlogs("blog_cms_saurav");
	const footer = await getAllBlogs("blog_cms_footer_saurav");
	return {
		props: { header: [...header], body: [...body], footer: [...footer] },
	};
};
