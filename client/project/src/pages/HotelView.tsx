import React, { useState } from 'react';
import { Building2, MapPin, Wifi, Car, Coffee, School as Pool, Dumbbell, Calendar } from 'lucide-react';

interface Amenity {
  icon: React.ElementType;
  name: string;
}

interface Hotel {
  name: string;
  location: string;
  rating: number;
  price: string;
  description: string;
  image: string;
  amenities: Amenity[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const HotelView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const hotel: Hotel = {
    name: "Luxury Mountain Resort",
    location: "Swiss Alps, Switzerland",
    rating: 4.8,
    price: "₹15,999",
    description: "Experience luxury at its finest with breathtaking mountain views and world-class amenities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      { icon: Wifi, name: "Free High-Speed WiFi" },
      { icon: Car, name: "Free Parking" },
      { icon: Coffee, name: "24/7 Restaurant" },
      { icon: Pool, name: "Infinity Pool" },
      { icon: Dumbbell, name: "Fitness Center" }
    ],
    coordinates: {
      lat: 46.8182,
      lng: 8.2275
    }
  };

  // Mock data for room availability
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹15,999/night",
      capacity: "Up to 2 guests",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
      availability: [
        true, true, false, true, false, true, true, true, false, // Days 1-9
      ]
    },
    {
      id: 2,
      name: "Suite Room",
      price: "₹25,999/night",
      capacity: "Up to 4 guests",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
      availability: [
        true, true, true, true, true, true, true, true, true, // Days 1-9
      ]
    },
  ];

  const days = Array.from({ length: 9 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const renderCalendar = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rooms
            </th>
            {days.map((day, index) => (
              <th
                key={index}
                className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rooms.map((room) => (
            <tr key={room.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-20 w-32">
                    <img className="h-20 w-32 object-cover rounded-lg" src={room.image} alt={room.name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{room.name}</div>
                    <div className="text-sm text-gray-500">{room.price}</div>
                    <div className="text-xs text-gray-400">{room.capacity}</div>
                  </div>
                </div>
              </td>
              {room.availability.map((available, index) => (
                <td key={index} className="px-6 py-4 whitespace-nowrap text-center">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                      ${available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {available ? 'Available' : 'Booked'}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderHotelDetails = () => (
    <div className="border-t border-gray-200 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About this property</h3>
          <p className="text-gray-600">{hotel.description}</p>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Property amenities</h4>
            <div className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">{amenity.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">{hotel.location}</span>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${hotel.coordinates.lat},${hotel.coordinates.lng}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">HotelHub</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Search Booking</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Download App
            </button>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hotel Info */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">{hotel.name}</h1>
              <div className="flex items-center mt-2 text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{hotel.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">{hotel.price}</span>
                  <span className="text-gray-600 ml-2">per night</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-600">{hotel.rating} (245 reviews)</span>
                </div>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                View Details
              </button>
            </div>

            {showDetails && renderHotelDetails()}

            <div className="mt-8">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Room Availability Calendar</h2>
              </div>
              {renderCalendar()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelView;