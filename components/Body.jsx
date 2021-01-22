import React from "react";
import Link from "next/link";
import styles from "../styles/Body.module.css";

export default function Body(props) {
	let body = props.body;
	console.log(body);
	return (
		<div className={styles.cardContainer}>
			{body.map((singleBlog) => {
				return (
					<div
						className={styles.card}
						id={singleBlog.blog_author}
						key={singleBlog.blog_author}
					>
						<img
							className={styles.singleBlogImage}
							src={singleBlog.blog_image.url}
							alt={singleBlog.blog_author}
						/>
						<h1 className={styles.singleBlogAuthor}>
							{singleBlog.blog_author}
						</h1>
					</div>
				);
			})}
		</div>
	);
}
