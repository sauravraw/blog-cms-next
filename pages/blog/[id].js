import React from "react";
import SinglePost from "../../components/SinglePost";

import getAllBlogs from "../../contentstack/queries/getAllBlogs";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function singleBlog(props) {
	return (
		<>
			<Header header={props.header} />
			<SinglePost single={props.single} />
			<Footer footer={props.footer} />
		</>
	);
}

export const getStaticProps = async (context) => {
	const header = await getAllBlogs("blog_cms_header_saurav");
	const footer = await getAllBlogs("blog_cms_footer_saurav");
	let data = await getAllBlogs("blog_cms_saurav", `${context.params.id}`);
	return {
		props: {
			single: { ...data },
			header: [...header],
			footer: [...footer],
		},
	};
};

export const getStaticPaths = async () => {
	let data = await getAllBlogs("blog_cms_saurav");
	let paths = data.map((blog) => {
		return {
			params: {
				id: `${blog.uid}`,
			},
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
};
