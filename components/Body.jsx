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
							<div className={styles.flip}>
								<div
									className={styles.front}
									style={{
										backgroundImage: `url(${singleBlog.blog_image.url})`,
									}}
								>
									<h1 className={styles.text_shadow}>
										{singleBlog.title}
									</h1>
								</div>
								<div className={styles.back}>
									<h2 className={styles.flipfont}>
										{singleBlog.title}
									</h2>
									<a className={styles.viewButton}>View More</a>
								</div>
							</div>
						</a>
					</Link>
				);
			})}
		</div>
	);
}
