import Head from "next/head";
import getAllBlogs from "../contentstack/queries/getAllBlogs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

export default function Home(props) {
	return (
		<>
			<Header header={props.header} />
			<LandingPage banner={props.banner} />
			<Footer footer={props.footer} />
		</>
	);
}

export const getStaticProps = async () => {
	const header = await getAllBlogs("blog_cms_header_saurav");
	const banner = await getAllBlogs("blog_cms_landingpage_saurav");
	const footer = await getAllBlogs("blog_cms_footer_saurav");
	return {
		props: { header: [...header], footer: [...footer], banner: [...banner] },
	};
};
