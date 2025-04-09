import React from 'react';
import { Star } from 'lucide-react';

export const SearchFilters: React.FC = () => {
  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          {['₹0 - ₹1,500', '₹1,500 - ₹3,000', '₹3,000 - ₹4,500', '₹4,500+'].map((range) => (
            <label key={range} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Star Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <label key={stars} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 flex">
                {Array(stars).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Amenities</h3>
        <div className="space-y-2">
          {['Free WiFi', 'Breakfast Included', 'Pool', 'Parking', 'Air Conditioning'].map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};