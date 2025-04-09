import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Hotel } from '../types';

interface HotelCardProps {
  hotel: Hotel;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200">
      <div className="flex">
        <div className="w-1/3">
          <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{hotel.rating}/5</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{hotel.reviews} reviews</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{hotel.distance}</p>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-end">
            <div>
              {hotel.freeCancellation && (
                <p className="text-green-600 text-sm mb-1">Free cancellation</p>
              )}
              {hotel.breakfast && (
                <p className="text-green-600 text-sm">Breakfast included</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Price per night</p>
              <p className="text-2xl font-bold text-gray-900">₹{hotel.price.toLocaleString()}</p>
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};