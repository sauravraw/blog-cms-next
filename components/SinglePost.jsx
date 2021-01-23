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
					<div className={styles.wrapper}>
						<div
							className={styles.card}
							style={{
								backgroundImage: `url(${single.blog_image.url})`,
							}}
						></div>
					</div>

					<h1 className={styles.blogTitle}>{single.title}</h1>
					<p className={styles.blogContent}>{single.blog_content}</p>

					<h3 className={styles.blogAuthor}>
						<span>Author</span> : {single.blog_author}
					</h3>
				</section>
			</div>
			<div className={styles.relatedLinkConatiner}>
				<h1>Related Links</h1>
				<div className={styles.relatedBlog}>
					{single.related_blogs_link.map((link) => {
						return (
							<div
								className={styles.relatedBlogConatiner}
								key={link.title}
							>
								<div className={styles.box}>
									<div className={styles.boxcard}>
										<div className={styles.imgBx}>
											<img
												src={link.blog_image.url}
												alt={link.title}
											/>
										</div>
										<div className={styles.details}>
											<Link href={`/blog/${link.uid}`}>
												<a className={styles.relatedBlogTitle}>
													<h2>
														{link.title}
														<br />
														<span> {link.blog_author}</span>
													</h2>
												</a>
											</Link>
										</div>
									</div>
								</div>
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
