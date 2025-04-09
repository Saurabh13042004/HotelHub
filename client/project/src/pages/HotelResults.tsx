import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import { HotelCard } from '../components/HotelCard';
import { Hotel } from '../types';

const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Alfa International',
    rating: 4.2,
    reviews: 128,
    price: 1499,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
    location: 'Mumbai',
    distance: '1.39 km from center',
    amenities: ['Free WiFi', 'Air Conditioning', 'Restaurant'],
    freeCancellation: true,
    breakfast: true
  },
  {
    id: '2',
    name: 'Hotel Cliffton',
    rating: 4.5,
    reviews: 256,
    price: 2499,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    location: 'Mumbai',
    distance: '2.1 km from center',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
    freeCancellation: true
  },
  {
    id: '3',
    name: 'The Taj Mahal Palace',
    rating: 4.8,
    reviews: 512,
    price: 12499,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    location: 'Mumbai',
    distance: '0.5 km from center',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Beach Access', 'Gym'],
    freeCancellation: true,
    breakfast: true
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const HotelResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Mumbai';
  const checkIn = searchParams.get('checkIn') || '2025-04-16';
  const checkOut = searchParams.get('checkOut') || '2025-04-17';
  const adults = searchParams.get('adults') || '2';
  const children = searchParams.get('children') || '0';
  const rooms = searchParams.get('rooms') || '1';

  const formattedCheckIn = formatDate(checkIn);
  const formattedCheckOut = formatDate(checkOut);
  const totalGuests = parseInt(adults) + parseInt(children);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search Bar */}
      <div className="bg-[#042759] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-4 flex gap-4 items-center">
            <div className="flex-1">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Where do you want to stay?"
                  className="ml-2 w-full outline-none"
                  defaultValue={destination}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="ml-2">{formattedCheckIn}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="ml-2">{formattedCheckOut}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="ml-2">
                  {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}, {rooms} {rooms === '1' ? 'room' : 'rooms'}
                </span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Modify Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex gap-8">
          {/* Filters */}
          <SearchFilters />

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Hotels in {destination}</h2>
              <p className="text-gray-600">
                {formattedCheckIn} - {formattedCheckOut} • {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}, {rooms} {rooms === '1' ? 'room' : 'rooms'}
              </p>
              <p className="text-gray-600 mt-1">Showing {mockHotels.length} properties</p>
            </div>

            <div className="space-y-4">
              {mockHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelResults;