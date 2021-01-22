import React from "react";
import styles from "../styles/SinglePost.module.css";

export default function singlePost(props) {
	let single = props.single;
	console.log(single);
	return (
		<div className={styles.container}>
			<h1>{single.title}</h1>
			<section>
				<img
					src={single.blog_image.url}
					alt={single.title}
					className={styles.singleImage}
				/>
				<h2 className={styles.blogAuthor}>{single.blog_author}</h2>
				<p className={styles.blogContent}>{single.blog_content}</p>
			</section>

			<section>
				<aside>
					<ul>
						{/* {single.related_blogs_link.map((link)=>{
								return(
									<Link key={link._content_type_uid}>
										<a>
												{}
										</a>
									</Link>
								)
							})} */}
					</ul>
				</aside>
			</section>
		</div>
	);
}
