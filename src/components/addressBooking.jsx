import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pindrop from "../assets/images/pindrop.svg";
import { HashLink } from "react-router-hash-link";

export function AddressBooking() {
  const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const navigate = useNavigate();

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`,
        {
          params: {
            q: query,
            key: API_KEY,
            language: "en",
            countrycode: "us",
          },
        }
      );

      console.log(response.data);

      if (response.data.results) {
        const addressSuggestions = response.data.results
          .slice(0, 3)
          .map((result) => {
            // Extract components
            const { _normalized_city, state, state_code, postcode, village, town } =
              result.components;

            // Build the address string
            let address = "";

            // Only build the address if _normalized_city, town, or village is available
            if (_normalized_city || village || town) {
              // If the query looks like a zip code, return _normalized_city, state, and zip
              if (postcode && query.match(/^\d{5}(?:[-\s]?\d{4})?$/)) {
                address = `${_normalized_city || village || town}, ${
                  state || state_code
                } ${postcode}`;
              } else {
                // Otherwise, return just _normalized_city and state, with village or town if available
                if (_normalized_city || village || town) {
                  address += _normalized_city || village || town;
                }
                if (state || state_code) {
                  address += address
                    ? `, ${state || state_code}`
                    : `${state || state_code}`;
                }
                if (postcode) {
                  address += ` ${postcode}`;
                }
              }
            }

            // Only add the address if it has at least a city, town, or village
            return address ? address.trim() : null; // Return null if no valid address
          })
          .filter((address) => address !== null); // Filter out null values

        setSuggestions(addressSuggestions);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSelectedAddress(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        id="city"
        type="text"
        placeholder="Enter zipcode or city and state"
        value={query}
        onChange={handleInputChange}
        required
        autoComplete="off"
        className="w-full pl-10 pr-10 py-3 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer text-black hover:bg-blue-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddressBooking;
