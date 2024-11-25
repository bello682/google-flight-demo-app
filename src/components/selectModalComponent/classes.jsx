import React from "react";
import "../../css/classesEconomy.css";

const EconomyClasses = ({
	isOpenEconomy,
	onCloseEconomy,
	selectedClass,
	setSelectedClass,
}) => {
	const classes = ["Economy", "Business", "First Class"];

	if (!isOpenEconomy) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-container">
				{/* Modal Navbar */}
				<div className="modal-navbar-economy">
					<span>{selectedClass || "Class"}</span>
					<button className="close-button" onClick={onCloseEconomy}>
						✖
					</button>
				</div>

				{/* Modal Body */}
				<div className="modal-body">
					<div className="class-selection">
						{classes.map((classType) => (
							<label key={classType} className="class-option">
								<input
									type="radio"
									name="class"
									value={classType}
									checked={selectedClass === classType}
									onChange={() => setSelectedClass(classType)}
								/>
								<span className="circle"></span>
								{classType}
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EconomyClasses;
