import React from "react";
import Link from "next/link";
import styles from "../styles/Body.module.css";

export default function Body(props) {
	let body = props.body;
	return (
		<div className={styles.cardContainer}>
			{body.map((singleBlog) => {
				return (
					<div className={styles.flip} key={singleBlog.blog_author}>
						<div
							className={styles.front}
							style={{
								backgroundImage: `url(${singleBlog.blog_image.url})`,
							}}
						>
							<h1 className={styles.text_shadow}>{singleBlog.title}</h1>
						</div>
						<div className={styles.back}>
							<h2 className={styles.flipfont}>{singleBlog.title}</h2>
							<Link
								className={styles.singleBlogDiv}
								href={`/blog/${singleBlog.uid}`}
							>
								<a target="_new" className={styles.viewButton}>
									View More
								</a>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}
