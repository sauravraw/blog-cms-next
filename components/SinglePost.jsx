import React from "react";
import styles from "../styles/SinglePost.module.css";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function singlePost(props) {
	let single = props.single;
	console.log(single);
	return (
		<>
			<div className={styles.container}>
				<section className={styles.singlePost}>
					<img
						src={single.blog_image.url}
						alt={single.title}
						className={styles.singleImage}
					/>
					<h1 className={styles.blogTitle}>{single.title}</h1>
					<p className={styles.blogContent}>{single.blog_content}</p>

					<h3 className={styles.blogAuthor}>
						<span>Author</span> : {single.blog_author}
					</h3>
				</section>
			</div>
			<div className={styles.container}>
				<h1>Related Links</h1>
				<div className={styles.relatedBlog}>
					{single.related_blogs_link.map((link) => {
						return (
							<div
								className={styles.relatedBlogConatiner}
								key={link.title}
							>
								<Link href={`/blog/${link.uid}`}>
									<a className={styles.relatedBlogTitle}>
										<img
											src={link.blog_image.url}
											alt={link.title}
											className={styles.relatedBlogImage}
										/>

										{link.title}
									</a>
								</Link>
							</div>
						);
					})}
				</div>
				<Link href="/#">
					<a className={styles.backButton}>Back</a>
				</Link>
			</div>
		</>
	);
}
