import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import toast from 'react-hot-toast';

const BookingSearch = () => {
  const [bookingId, setBookingId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingId.trim()) {
      toast.error('Please enter a booking ID');
      return;
    }
    navigate(`/booking/${bookingId}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Search Your Booking</h1>
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label
                htmlFor="bookingId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Booking ID
              </label>
              <input
                type="text"
                id="bookingId"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your booking ID"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Search Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;