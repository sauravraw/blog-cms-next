// import Stack from "../../contentstack/Stack";
import React from "react";
import SinglePost from "../../components/SinglePost";

import getAllBlogs from "../../contentstack/queries/getAllBlogs";

export default function singleBlog(props) {
	return <SinglePost single={props.single} />;
}

export const getStaticProps = async (context) => {
	let data = await getAllBlogs("blog_cms_saurav", `${context.params.id}`);
	console.log("hello", data);
	return {
		props: {
			single: { ...data },
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
