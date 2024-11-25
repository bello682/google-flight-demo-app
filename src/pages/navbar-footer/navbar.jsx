import React, { useState } from "react";
import flightLogo from "../../asset/images/flightsLogo.png";
import unitedFlag from "../../asset/images/unitedKingdom.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../../css/navbar.css";

const Navbar = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};

	return (
		<div className="nav--container-wrap">
			<nav className="navbar">
				{/* Logo and Links */}
				<div className="navbar-links">
					<div className="logo">
						<img src={flightLogo} alt="" />
					</div>
					<ul className="links">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>

				{/* Button with Dropdown */}
				<div className="navbar-actions">
					<div className="navbar--dropdown-menu">
						<div className="dropdown-btn" onClick={toggleDropdown}>
							<img src={unitedFlag} alt="" />
							English <IoIosArrowDown />
							{dropdownVisible && (
								<ul className="dropdown-list">
									<li>
										<a href="#profile">Profile</a>
									</li>
									<li>
										<a href="#settings">Settings</a>
									</li>
									<li>
										<a href="#logout">Logout</a>
									</li>
								</ul>
							)}
						</div>
					</div>
					<div className="custom-div">
						<div>
							<FaPhoneAlt className="nav-phone" />
						</div>
						<div className="navbar-phone-span">
							<a href="#">+1-833-7481763 </a>
							<span>Call Now for Unpublished Phone Fares</span>
						</div>
					</div>

					<button className="phone-button-div">
						<FaPhoneAlt className="nav-second-phone" /> Free call
					</button>
				</div>
			</nav>

			<div>
				<ul className="links-responsive">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
