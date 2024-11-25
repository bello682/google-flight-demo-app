import React from "react";
import "../../css/adult_children.css";

const Adultchilren = ({
	isOpen,
	onClose,
	adults,
	children,
	setAdults,
	setChildren,
}) => {
	const incrementAdults = () => setAdults((prev) => prev + 1);
	const decrementAdults = () => setAdults((prev) => (prev > 0 ? prev - 1 : 0));

	const incrementChildren = () => setChildren((prev) => prev + 1);
	const decrementChildren = () =>
		setChildren((prev) => (prev > 0 ? prev - 1 : 0));

	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-container">
				{/* Modal Navbar */}
				<div className="modal-navbar-adult">
					<span>{`${adults} Adults, ${children} Children`}</span>
					<button className="close-button" onClick={onClose}>
						✖
					</button>
				</div>

				{/* Modal Body */}
				<div className="modal-body">
					<div className="counter">
						<span>Adults</span>
						<button onClick={decrementAdults}>-</button>
						<span>{adults}</span>
						<button onClick={incrementAdults}>+</button>
					</div>
					<div className="counter">
						<span>Children</span>
						<button onClick={decrementChildren}>-</button>
						<span>{children}</span>
						<button onClick={incrementChildren}>+</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Adultchilren;
