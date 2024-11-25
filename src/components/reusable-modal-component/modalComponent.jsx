import React from "react";
import flightSearch from "../../asset/images/flightssearchdirect.png";
import { MdEmail } from "react-icons/md";
import "../../css/modalComponent.css";

const Modal = ({ isOpen, onClose, customClass = "" }) => {
	if (!isOpen) return null;

	return (
		<div className={`modal-overlay ${customClass}`} onClick={onClose}>
			<div
				className={`modal-container ${customClass}`}
				onClick={(e) => e.stopPropagation()}
			>
				<nav className="modal-navbar">
					<img src={flightSearch} alt="" />

					<div>
						<h1>Cool deals landing in your inbox!</h1>
						<p>Plus: free price alerts for flights you're looking at</p>
					</div>

					<button className="modal-close-btn" onClick={onClose}>
						&times;
					</button>
				</nav>
				<div className={`modal-p-sign`}>
					<p>
						Sign up for our newsletter and get a heads-up when prices change:
					</p>
				</div>
				<div className="modal-content">
					<form>
						<div className={`modal-inputs ${customClass}`}>
							<input type="text" placeholder="Enter first input" />
							<input type="text" placeholder="Enter second input" />
						</div>
						<button type="button" className={`modal-button ${customClass}`}>
							<MdEmail className="modal-envelope" />I want to know about price
							drops
						</button>
					</form>
				</div>
				<footer className={`modal-footer ${customClass}`}>
					<p>You can unsubscribe at any moment</p>
					<button>Privacy Policy</button>
				</footer>
			</div>
		</div>
	);
};

export default Modal;
