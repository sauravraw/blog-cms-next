import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Header(props) {
	let header = props.header[0];
	return (
		<div className={styles.navContainer}>
			<div className={styles.navHeader}>
				<Link href="/">
					<a>
						<img
							className={styles.navImage}
							src={header.header_image.blog_header_image.url}
							alt={header.header_image.blog_header_title}
						/>
					</a>
				</Link>
				<h1>{header.header_image.blog_header_title}</h1>
			</div>
			<div className={styles.navLinkContainer}>
				<p className={styles.navLink}>
					{header.navlink.map((link) => {
						return (
							<Link href={link.href} key={link.title}>
								<a>{link.title}</a>
							</Link>
						);
					})}
				</p>
			</div>
			<GiHamburgerMenu className={styles.hamburger} />
		</div>
	);
}

export default Header;
