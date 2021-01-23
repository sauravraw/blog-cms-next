import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/LandingPage.module.css";

export default function ErorPageComponent(props) {
	let pageerror = props.fourzerofour[0];
	return (
		<div
			style={{
				backgroundImage: `url(${pageerror.errorpage.url})`,
			}}
			className={styles.landingPage}
		></div>
	);
}
