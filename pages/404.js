import React from "react";
import getAllBlogs from "../contentstack/queries/getAllBlogs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPageComponent";

export default function ErrorPageAdded(props) {
	return (
		<>
			<Header header={props.header} />
			<ErrorPage fourzerofour={props.fourzerofour} />
			<Footer footer={props.footer} />
		</>
	);
}

export const getStaticProps = async () => {
	const header = await getAllBlogs("blog_cms_header_saurav");
	const fourzerofour = await getAllBlogs("blog_cms_landingpage_saurav");
	const footer = await getAllBlogs("blog_cms_footer_saurav");
	return {
		props: {
			header: [...header],
			footer: [...footer],
			fourzerofour: [...fourzerofour],
		},
	};
};
