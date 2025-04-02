import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const BookingDetails = () => {
  const { id } = useParams();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');

  // Mock booking data - In real app, fetch from API
  const booking = {
    id,
    hotelName: 'Grand Hotel',
    checkIn: '2025-02-28',
    checkOut: '2025-03-02',
    guests: 2,
    roomType: 'Deluxe Room',
    status: 'confirmed',
    modifyDeadline: '2025-02-18', // 10 days before check-in
  };

  const handleModify = () => {
    const today = new Date();
    const deadline = new Date(booking.modifyDeadline);
    
    if (today > deadline) {
      toast.error('Modification not allowed within 10 days of check-in. Please contact the property directly.');
      return;
    }
    
    setShowOtpModal(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, verify OTP with API
    if (otp === '123456') {
      toast.success('OTP verified successfully');
      // Redirect to modification page
    } else {
      toast.error('Invalid OTP');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-3xl font-bold">Booking Details</h1>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {booking.status}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">{booking.hotelName}</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Check-in</p>
                    <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Check-out</p>
                    <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Modification Deadline</p>
                    <p className="font-medium">{new Date(booking.modifyDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Room Type</p>
                <p className="font-medium">{booking.roomType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Guests</p>
                <p className="font-medium">{booking.guests} persons</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Booking ID</p>
                <p className="font-medium">{booking.id}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleModify}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Modify Booking
              </button>
              <button
                onClick={handleModify}
                className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700"
              >
                Reschedule
              </button>
              <button
                onClick={handleModify}
                className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700"
              >
                Cancel Booking
              </button>
            </div>
          </div>

          {showOtpModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl p-8 max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Enter OTP</h3>
                <p className="text-gray-600 mb-6">
                  Please enter the OTP sent to your registered email address.
                </p>
                <form onSubmit={handleOtpSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter OTP"
                    maxLength={6}
                  />
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
                    >
                      Verify OTP
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOtpModal(false)}
                      className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;