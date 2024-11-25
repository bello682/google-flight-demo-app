import React from "react";
import "../../css/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="footer-links">
				<li>
					<a href="#about">About Us</a>
				</li>
				<li>|</li>
				<li>
					<a href="#contact">Contact Us</a>
				</li>
				<li>|</li>
				<li>
					<a href="#privacy">Privacy Policy</a>
				</li>
				<li>|</li>
				<li>
					<a href="#terms">Terms & Conditions</a>
				</li>
				<li>|</li>
				<li>
					<a href="#blog">Blog</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
