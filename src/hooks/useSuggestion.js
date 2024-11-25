import { useState, useEffect } from "react";
import axios from "axios";

const useSuggestions = (apiUrl, query) => {
	const [suggestions, setSuggestions] = useState([]);
	const [debouncedQuery, setDebouncedQuery] = useState(query);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(query);
		}, 300);

		return () => clearTimeout(timer);
	}, [query]);

	const handleInputChange = async (event) => {
		const inputValue = event.target.value;
		if (inputValue.trim() === "") {
			setSuggestions([]);
			return;
		}
		try {
			const response = await axios.get(apiUrl, {
				params: { query: debouncedQuery },
				headers: {
					"Content-Type": "application/json",
					"X-RapidAPI-Key":
						"f158b2a47fmsh0752fcc81ebd7f9p162601jsn966ad5d59362",
					"X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
				},
			});
			setSuggestions(response.data.results || []);
		} catch (error) {
			console.error("Error fetching suggestions:", error);
			setSuggestions([]);
		}
	};

	return { suggestions, handleInputChange };
};

export default useSuggestions;
