import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="text-center fixed-bottom">
			<div className="container pt-4">
				<section className="mb-4">
					<a
						className="btn btn-link btn-floating btn-lg text-dark m-1"
						href="https://www.linkedin.com/in/chrisridder"
						role="button"
						data-mdb-ripple-color="dark">
						<FontAwesomeIcon icon={faLinkedin} />
						{/* <i className="fab fa-linkedin"></i> */}
					</a>

					<a
						className="btn btn-link btn-floating btn-lg text-dark m-1"
						href="https://github.com/cridder"
						role="button"
						data-mdb-ripple-color="dark">
						<FontAwesomeIcon icon={faGithub} />
						{/* <i className="fab fa-github"></i> */}
					</a>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
