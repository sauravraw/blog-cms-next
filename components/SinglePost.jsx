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
				<h1 className={styles.blogTitle}>{single.title}</h1>
				<section className={styles.singlePost}>
					<img
						src={single.blog_image.url}
						alt={single.title}
						className={styles.singleImage}
					/>
					<h2 className={styles.blogAuthor}>
						Author: {single.blog_author}
					</h2>
					<p className={styles.blogContent}>{single.blog_content}</p>
				</section>

				<section className={styles.singleAside}></section>
				<h1>Related Links</h1>
				{single.related_blogs_link.map((link) => {
					return (
						<Link href={`/blog/${link.uid}`}>
							<a>{link.title}</a>
						</Link>
					);
				})}
				<Link href="/#">
					<a className={styles.backButton}>Back</a>
				</Link>
			</div>
		</>
	);
}
