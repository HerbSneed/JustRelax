"use client";

import { useState, useEffect } from "react";
import "../styles/ContactUs.css";
import thai from "../assets/images/JR_Thai.webp";
import axios from "axios";
import { useLocation } from "react-router-dom";

// Debounce Hook
const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const ContactUs = () => {
  const location = useLocation();
  const [query, setQuery] = useState(""); // Search query state
  const [address, setAddress] = useState(""); // Address field state
  const [searchResults, setSearchResults] = useState([]); // API search results
  const [showResults, setShowResults] = useState(false); // Toggle results visibility
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message state
  const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

  // Debounced query
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    // Prepopulate the address field if passed from the previous component
    if (location.state?.address) {
      setAddress(location.state.address);
    }
  }, [location.state]);

  useEffect(() => {
    // Perform search when the debounced query changes
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    setError("");

    const endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      searchQuery
    )}&key=${API_KEY}&language=en&countrycode=us`;

    try {
      const response = await axios.get(endpoint);
      setSearchResults(response.data.results);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching address data:", error);
      setError("Failed to fetch address data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = (formattedAddress) => {
    setAddress(formattedAddress); // Update the address input
    setShowResults(false); // Hide search results
  };

  return (
    <>
      <section id="contact" className="relative bg-background h-full">
        {/* Background Image */}
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-60 h-full object-cover"
            src={thai}
            alt="Relaxing Ocean Waves"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute left-0 right-0 h-full pointer-events-none opacity-85 bg-gradient-to-b from-primary/100 to-white"></div>
        <div className="flex pt-5">
          <h1 className="z-10 font-bold text-center mb-0 text-primary">
            Book Your Next Massage
          </h1>
        </div>

        {/* Contact Form */}
        <form className="w-full mx-auto p-4 bg-white sm:rounded-lg sm:shadow-md">
          {/* Name Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* Address Search */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="query"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter city or zip code"
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
            />
            <label
              htmlFor="query"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Search Address
            </label>
            {loading && <p className="text-gray-500 mt-1">Loading...</p>}
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>

          {/* Search Results */}
          {showResults && (
            <ul className="bg-white border rounded shadow-md max-h-40 overflow-y-auto">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(result.formatted)}
                >
                  {result.formatted}
                </li>
              ))}
            </ul>
          )}

          {/* Address Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="z-10 text-white bg-blue-700 hover:ring-1 hover:outline-none hover:ring-blue-700 hover:bg-buttonFocus font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
