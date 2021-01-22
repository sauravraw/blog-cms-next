import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer(props) {
	let footer = props.footer[0];
	return (
		<div className={styles.footerContainer}>
			<h1>{footer.copyright}</h1>
			<div className={styles.socialContainer}>
				{footer.social_link.map((link) => {
					return (
						<img
							className={styles.socialicon}
							src={link.social_image.url}
							alt={link.link_name}
							key={link.link_name}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Footer;
