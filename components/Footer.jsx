import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer(props) {
	let footer = props.footer[0];
	return (
		<div className={styles.footerContainer}>
			<h3>{footer.copyright}</h3>
			<div className={styles.socialContainer}>
				{footer.social_link.map((link) => {
					return (
						<Link
							href={link.link_url.href}
							key={link.link_name}
							target="_new"
						>
							<a>
								<img
									className={styles.socialicon}
									src={link.social_image.url}
									alt={link.link_name}
								/>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Footer;
