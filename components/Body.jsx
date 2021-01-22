import React from "react";
import Link from "next/link";
import styles from "../styles/Body.module.css";

export default function Body(props) {
	let body = props.body;
	return (
		<div className={styles.cardContainer}>
			{body.map((singleBlog) => {
				return (
					<Link
						className={styles.singleBlogDiv}
						href={`/blog/${singleBlog.uid}`}
						key={singleBlog.blog_author}
					>
						<a>
							<div className={styles.card1} id={singleBlog.blog_author}>
								<img
									className={styles.singleBlogImage}
									src={singleBlog.blog_image.url}
									alt={singleBlog.blog_author}
								/>
								<h1 className={styles.singleBlogAuthor}>
									{singleBlog.title}
								</h1>
							</div>
						</a>
					</Link>
				);
			})}
		</div>
	);
}
