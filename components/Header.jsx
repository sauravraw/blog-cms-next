import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

function Header(props) {
	let header = props.header[0];
	console.log(props.header[0]);
	return (
		<div className={styles.navContainer}>
			<div className={styles.navHeader}>
				<img
					className={styles.navImage}
					src={header.header_image.blog_header_image.url}
					alt={header.header_image.blog_header_title}
				/>
				<h1>{header.header_image.blog_header_title}</h1>
			</div>
			<div className={styles.navLinkContainer}>
				<p className={styles.navLink} key={header.uid}>
					{header.navlink.map((link) => {
						return (
							<Link href={link.href}>
								<a>{link.title}</a>
							</Link>
						);
					})}
				</p>
			</div>
		</div>
	);
}

export default Header;
