import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage(props) {
	let banner = props.banner[0];
	return (
		<div
			style={{
				backgroundImage: `url(${banner.banner_image.url})`,
			}}
			className={styles.landingPage}
		>
			<div className={styles.blur}>
				<h1>{banner.title}</h1>
				<h3>{banner.landing_page_quotes}</h3>
			</div>
		</div>
	);
}
