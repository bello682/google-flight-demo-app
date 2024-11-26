// import React from "react";
// import "../../css/herocomponent.css";

// const HeroComponent = ({
// 	custom_hero_styling,
// 	// h1_content,
// 	// p_content,
// 	// span_content_1,
// 	// span_content_2,
// 	// button_text,
// 	// travel_icon,
// }) => {
// 	return (
// 		<div>
// 			<div className={`background-hero-container ${custom_hero_styling}`}>
// 				<div className={`hero-center-content ${custom_hero_styling}`}>
// 					{/* <h1 className={`header-text ${custom_hero_styling}`}>{h1_content}</h1> */}
// 					<h1 className={`header-text ${custom_hero_styling}`}>
// 						Prepare for Takeoff... on the Cheapest Flights Around.
// 					</h1>
// 					{/* <p className={`paragraph-text ${custom_hero_styling}`}>{p_content}</p> */}
// 					<p className={`paragraph-text ${custom_hero_styling}`}>
// 						Direct Search - Direct Price
// 					</p>
// 					<div className={`travel-content-form ${custom_hero_styling}`}>
// 						<div className={`check-box-div`}>
// 							<div>
// 								<input type="checkbox" name="" id="" />
// 								{/* <span>{span_content_1}</span> */}
// 								<span>Round-Trip</span>
// 							</div>
// 							<div>
// 								<input type="checkbox" name="" id="" />
// 								{/* <span>{span_content_2}</span> */}
// 								<span>I prefer direct flights</span>
// 							</div>
// 						</div>

// 						<div className={`Travel-Form-Input ${custom_hero_styling}`}>
// 							<div className={`travel-input-wrapper`}>
// 								<div className={`texts-input-travel ${custom_hero_styling}`}>
// 									<input type="text" placeholder="Where from" />
// 									<input type="text" placeholder="Where to" />
// 								</div>
// 								<div
// 									className={`date-time-input-travel ${custom_hero_styling}`}
// 								>
// 									<input type="date" name="" id="" />
// 									<input type="time" name="" id="" />
// 								</div>
// 							</div>
// 							<div
// 								className={`custom-search-button-wrapper ${custom_hero_styling}`}
// 							>
// 								<button
// 									className={`custom-search-button ${custom_hero_styling}`}
// 								>
// 									{/* {travel_icon} */}
// 									{/* {button_text} */}
// 									Search
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroComponent;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "../../css/herocomponent.css";
// import { fetchAirports } from "../../store/actions/fetchAirportAction";
// import useSuggestions from "./../../hooks/useSuggestion";

// const HeroComponent = ({ custom_hero_styling }) => {
// 	const [lat, setLat] = useState("");
// 	const [lng, setLng] = useState("");
// 	const [date, setDate] = useState("");
// 	const [time, setTime] = useState("");
// 	const [fromValue, setFromValue] = useState("");
// 	const [toValue, setToValue] = useState("");

// 	const api_url =
// 		"https://sky-scrapper.p.rapidapi.com/api/v1/flights/getcountryData?lat=19.242218017578125&lng=72.85846156046128&locale=en-US";

// 	const {
// 		suggestions: fromSuggestions,
// 		handleInputChange: handleFromInputChange,
// 	} = useSuggestions(`${api_url}`, fromValue);

// 	const { suggestions: toSuggestions, handleInputChange: handleToInputChange } =
// 		useSuggestions(`${api_url}`, toValue);

// 	const dispatch = useDispatch();
// 	const { airports, loading, error } = useSelector((state) => state.flights);

// 	const handleSuggestionClick = (type, suggestion) => {
// 		if (type === "from") {
// 			setFromValue(suggestion.name);
// 			setLat(suggestion.latitude);
// 			setLng(suggestion.longitude);
// 		} else if (type === "to") {
// 			setToValue(suggestion.name);
// 			setLat(suggestion.latitude);
// 			setLng(suggestion.longitude);
// 		}
// 	};

// 	const handleSearch = () => {
// 		if (lat && lng) {
// 			dispatch(fetchAirports(lat, lng));
// 		}
// 	};

// 	console.log(airports);
// 	console.log(toValue);

// 	return (
// 		<div>
// 			<div className={`background-hero-container ${custom_hero_styling}`}>
// 				<div className={`hero-center-content ${custom_hero_styling}`}>
// 					<h1 className={`header-text ${custom_hero_styling}`}>
// 						Prepare for Takeoff... on the Cheapest Flights Around.
// 					</h1>
// 					<p className={`paragraph-text ${custom_hero_styling}`}>
// 						Direct Search - Direct Price
// 					</p>
// 					<div className={`travel-content-form ${custom_hero_styling}`}>
// 						<div className="Travel-Form-Input">
// 							<div className="travel-input-wrapper">
// 								{/* From Input */}
// 								<div className="texts-input-travel">
// 									<input
// 										type="text"
// 										value={fromValue}
// 										onChange={(e) => {
// 											setFromValue(e.target.value);
// 											handleFromInputChange(e);
// 										}}
// 										id="from"
// 										placeholder="Where from?"
// 										aria-label="From location"
// 									/>
// 									{fromSuggestions.length > 0 && (
// 										<ul
// 											className="suggestion-list"
// 											aria-label="From suggestions"
// 										>
// 											{fromSuggestions.map((suggestion) => (
// 												<li
// 													key={suggestion.id}
// 													onClick={() =>
// 														handleSuggestionClick("from", suggestion)
// 													}
// 													tabIndex={0}
// 												>
// 													{suggestion.name}
// 												</li>
// 											))}
// 										</ul>
// 									)}
// 								</div>

// 								{/* To Input */}
// 								<div className="texts-input-travel">
// 									<input
// 										type="text"
// 										value={toValue}
// 										onChange={(e) => {
// 											setToValue(e.target.value);
// 											handleToInputChange(e);
// 										}}
// 										id="to"
// 										placeholder="Where to?"
// 										aria-label="To location"
// 									/>
// 									{toSuggestions.length > 0 && (
// 										<ul className="suggestion-list" aria-label="To suggestions">
// 											{toSuggestions.map((suggestion) => (
// 												<li
// 													key={suggestion.id}
// 													onClick={() =>
// 														handleSuggestionClick("to", suggestion)
// 													}
// 													tabIndex={0}
// 												>
// 													{suggestion.name}
// 												</li>
// 											))}
// 										</ul>
// 									)}
// 								</div>

// 								{/* Date and Time Inputs */}
// 								<div className="texts-input-travel">
// 									<input
// 										type="date"
// 										placeholder="Date"
// 										value={date}
// 										onChange={(e) => setDate(e.target.value)}
// 									/>
// 									<input
// 										type="time"
// 										placeholder="Time"
// 										value={time}
// 										onChange={(e) => setTime(e.target.value)}
// 									/>
// 								</div>
// 							</div>

// 							{/* Search Button */}
// 							<div className="custom-search-button-wrapper">
// 								<button
// 									className="custom-search-button"
// 									onClick={handleSearch}
// 									disabled={!lat || !lng}
// 								>
// 									Search
// 								</button>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Loading and Error Feedback */}
// 					{loading && <p>Loading...</p>}
// 					{error && <p className="error">{error}</p>}

// 					{/* Airport Results */}
// 					<div className="airport-results">
// 						{airports?.current && (
// 							<div>
// 								<h4>Current Location:</h4>
// 								<p>{airports.current.presentation.title}</p>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroComponent;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/herocomponent.css";
import Adultchilren from "../selectModalComponent/adult_chiildren";
import EconomyClasses from "../selectModalComponent/classes";

const HeroComponent = ({ custom_hero_styling }) => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [fromValue, setFromValue] = useState("");
	const [toValue, setToValue] = useState("");
	const [filter, setFilter] = useState([]);
	const [fromSuggestions, setFromSuggestions] = useState([]);
	const [toSuggestions, setToSuggestions] = useState([]);
	const [isModalOpen, setModalOpen] = useState(false);
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [submissionCount, setSubmissionCount] = useState(0);
	const [isRoundTrip, setIsRoundTrip] = useState(false);
	const [isDirectFlight, setIsDirectFlight] = useState(false);

	const [isModalOpenEconomy, setModalOpenEconomy] = useState(false);
	const [selectedClass, setSelectedClass] = useState("");

	const EconomybuttonText = selectedClass || "Class";

	const buttonText =
		adults === 1 && children === 0
			? "1 Adult"
			: `${adults} Adults${children > 0 ? `, ${children} Children` : ""}`;

	const api_url = "https://sky-scrapper.p.rapidapi.com/api/v1/getConfig";

	useEffect(() => {
		const fetchAirports = async () => {
			try {
				const response = await axios.get(api_url, {
					headers: {
						"Content-Type": "application/json",
						"X-RapidAPI-Key":
							"f158b2a47fmsh0752fcc81ebd7f9p162601jsn966ad5d59362",
						"X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
					},
				});

				const countryData = response?.data?.data || [];
				setFilter(countryData);
			} catch (error) {
				console.error("Error fetching airports:", error);
			}
		};

		fetchAirports();
	}, []);

	const handleFilter = (e, setFunction, setSuggestions) => {
		const value = e.target.value.trim().toLowerCase();
		setFunction(e.target.value);

		if (value === "") {
			setSuggestions([]);
		} else {
			const filteredSuggestions = filter.filter((suggestion) =>
				suggestion?.country?.toLowerCase().includes(value)
			);
			setSuggestions(filteredSuggestions);
			console.log(filteredSuggestions);
		}
	};

	const handleSuggestionClick = (airport, setFunction, setSuggestions) => {
		// Combine only the values of the airport object into a single string
		// const formattedValue = Object.values(airport);
		const formattedValue = Object.values(airport).join("  ");
		setFunction(formattedValue);
		setSuggestions([]);
	};

	const handleRoundTripChange = (e) => setIsRoundTrip(e.target.checked);
	const handleDirectFlightChange = (e) => setIsDirectFlight(e.target.checked);

	const handleSearch = () => {
		setSubmissionCount((prev) => prev + 1);
		console.log("Form Values on Submit:", {
			fromValue,
			toValue,
			date,
			time,
			isRoundTrip,
			isDirectFlight,
			adults,
			children,
			selectedClass,
			submissionCount: submissionCount + 1,
		});
	};

	return (
		<div>
			<div className={`background-hero-container ${custom_hero_styling}`}>
				<div className={`hero-center-content ${custom_hero_styling}`}>
					<h1 className={`header-text ${custom_hero_styling}`}>
						Prepare for Takeoff... on the Cheapest Flights Around.
					</h1>
					<p className={`paragraph-text ${custom_hero_styling}`}>
						Direct Search - Direct Price
					</p>
					<div className={`travel-content-form ${custom_hero_styling}`}>
						<div className="check-box-div">
							<div>
								<input
									type="checkbox"
									name="checkbox_round_trip"
									id="checkbox_round_trip"
									checked={isRoundTrip}
									onChange={handleRoundTripChange}
								/>
								<label htmlFor="checkbox_round_trip">Round-Trip</label>
							</div>
							<div>
								<input
									type="checkbox"
									name="checkbox_direct_flight"
									id="checkbox_direct_flight"
									checked={isDirectFlight}
									onChange={handleDirectFlightChange}
								/>
								<label htmlFor="checkbox_direct_flight">
									I prefer direct flights
								</label>
							</div>
						</div>
						<div className="Travel-Form-Input">
							<div className="travel-input-wrapper">
								{/* From Input */}
								<div className="texts-input-travel">
									<input
										type="text"
										value={fromValue}
										onChange={(e) =>
											handleFilter(e, setFromValue, setFromSuggestions)
										}
										id="from"
										placeholder="Where from?"
										aria-label="From location"
									/>
									{/* Render filtered suggestions */}
									{fromSuggestions.length > 0 && (
										<ul className="search_result_from">
											{fromSuggestions.map((airport, index) => (
												<li
													key={index}
													className="airport-suggestion"
													onClick={() =>
														handleSuggestionClick(
															airport,
															setFromValue,
															setFromSuggestions
														)
													}
												>
													<spann className="suggestion-title">
														{airport?.currencyTitle}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.country}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.currencySymbol}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.countryCode}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.currency}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.market}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.site}
													</spann>
												</li>
											))}
										</ul>
									)}
								</div>

								{/* To Input */}
								<div className="texts-input-travel">
									<input
										type="text"
										value={toValue}
										onChange={(e) =>
											handleFilter(e, setToValue, setToSuggestions)
										}
										id="to"
										placeholder="Where to?"
										aria-label="To location"
									/>
									{/* Render filtered suggestions */}
									{toSuggestions.length > 0 && (
										<ul className="search_result_to">
											{toSuggestions.map((airport, index) => (
												<li
													key={index}
													className="airport-suggestion"
													onClick={() =>
														handleSuggestionClick(
															airport,
															setToValue,
															setToSuggestions
														)
													}
												>
													<spann className="suggestion-title">
														{airport?.currencyTitle}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.country}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.currencySymbol}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.countryCode}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.currency}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.market}
													</spann>
													<spann className="suggestion-subtitle">
														{airport?.site}
													</spann>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>

							{/* Date and Time Inputs */}
							<div className="date-time-input-travel">
								<input
									type="date"
									placeholder="Date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
									className="input-field"
								/>
								<input
									type="time"
									placeholder="Time"
									value={time}
									onChange={(e) => setTime(e.target.value)}
									className="input-field"
								/>
							</div>

							{/* Modal */}
							<div className="buttons_classes_adult_mobile_screen">
								<div>
									<button
										className="btn_children"
										onClick={() => setModalOpen(true)}
									>
										{buttonText}
									</button>
									<Adultchilren
										isOpen={isModalOpen}
										onClose={() => setModalOpen(false)}
										adults={adults}
										children={children}
										setAdults={setAdults}
										setChildren={setChildren}
									/>
								</div>

								<div>
									<button
										className="btn_class"
										onClick={() => setModalOpenEconomy(true)}
									>
										{EconomybuttonText}
									</button>
									<EconomyClasses
										isOpenEconomy={isModalOpenEconomy}
										onCloseEconomy={() => setModalOpenEconomy(false)}
										selectedClass={selectedClass}
										setSelectedClass={setSelectedClass}
									/>
								</div>
							</div>

							{/* Search Button */}
							<div className="custom-search-button-wrapper">
								<button className="custom-search-button" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
						{/* Modal */}
						<div className="buttons_classes_adult">
							<div>
								<button
									className="btn_children"
									onClick={() => setModalOpen(true)}
								>
									{buttonText}
								</button>
								<Adultchilren
									isOpen={isModalOpen}
									onClose={() => setModalOpen(false)}
									adults={adults}
									children={children}
									setAdults={setAdults}
									setChildren={setChildren}
								/>
							</div>

							<div>
								<button
									className="btn_class"
									onClick={() => setModalOpenEconomy(true)}
								>
									{EconomybuttonText}
								</button>
								<EconomyClasses
									isOpenEconomy={isModalOpenEconomy}
									onCloseEconomy={() => setModalOpenEconomy(false)}
									selectedClass={selectedClass}
									setSelectedClass={setSelectedClass}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroComponent;
