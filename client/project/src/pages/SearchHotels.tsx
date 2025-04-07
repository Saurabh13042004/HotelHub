import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { toast } from "react-hot-toast";

const SearchHotels: React.FC = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState<number | ''>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!location || !checkInDate || !checkOutDate || !guests) {
      toast.error("Please fill in all fields!");
      return;
    }

    navigate(
      `/search?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&guests=${guests}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="relative bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Hotels</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
              Find the best hotels for your next trip.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Search Hotels</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Number of Guests
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition duration-200"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchHotels;
