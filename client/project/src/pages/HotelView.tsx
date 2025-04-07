import React, { useState } from 'react';
import { 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  School as Pool, 
  Dumbbell, 
  Calendar,
  Share2,
  X
} from 'lucide-react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  LinkedinShareButton
} from 'react-share';

interface BookingDetails {
  roomId: number;
  roomName: string;
  price: string;
  date: Date;
}

interface Hotel {
  name: string;
  location: string;
  rating: number;
  price: string;
  description: string;
  image: string;
  amenities: {
    icon: React.ElementType;
    name: string;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const HotelView: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingDetails | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequests: ''
  });

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

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹15,999",
      capacity: "Up to 2 guests",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
      availability: [true, true, false, true, false, true, true, true, false]
    },
    {
      id: 2,
      name: "Suite Room",
      price: "₹25,999",
      capacity: "Up to 4 guests",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
      availability: [true, true, true, true, true, true, true, true, true]
    },
  ];

  const days = Array.from({ length: 9 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleBookingClick = (roomId: number, date: Date) => {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
      setSelectedBooking({
        roomId,
        roomName: room.name,
        price: room.price,
        date
      });
      setShowBookingModal(true);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission here
    console.log('Booking submitted:', { selectedBooking, bookingForm });
    setShowBookingModal(false);
    setSelectedBooking(null);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      guests: 1,
      specialRequests: ''
    });
  };

  const renderCalendar = () => (
    <div className="overflow-x-auto bg-gray-50 rounded-lg p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rooms
            </th>
            {days.map((day, index) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                    <div className="text-sm text-gray-500">{room.price}/night</div>
                    <div className="text-xs text-gray-400">{room.capacity}</div>
                  </div>
                </div>
              </td>
              {room.availability.map((available, index) => (
                <td key={index} className="px-6 py-4 whitespace-nowrap text-center">
                  {available ? (
                    <button
                      onClick={() => handleBookingClick(room.id, days[index])}
                      className="w-24 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
                    >
                      Available
                    </button>
                  ) : (
                    <div className="w-24 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center">
                      Booked
                    </div>
                  )}
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
          <div className="flex gap-4">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
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

      {/* Booking Modal */}
      {showBookingModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Book Your Stay</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="px-6 py-4">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Selected Room</div>
                      <div className="font-semibold text-gray-900">{selectedBooking.roomName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Date</div>
                      <div className="font-semibold text-gray-900">
                        {selectedBooking.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Price</div>
                      <div className="font-semibold text-gray-900">{selectedBooking.price}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="4"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({...bookingForm, guests: parseInt(e.target.value)})}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Special Requests</label>
                  <textarea
                    rows={4}
                    value={bookingForm.specialRequests}
                    onChange={(e) => setBookingForm({...bookingForm, specialRequests: e.target.value})}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Any special requirements or requests..."
                  ></textarea>
                </div>
                
                <div className="sticky bottom-0 bg-white px-6 py-4 -mx-6 mt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Share Menu */}
      {showShareMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Share this hotel</h3>
              <button
                onClick={() => setShowShareMenu(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FacebookShareButton url={window.location.href}>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Facebook
                </button>
              </FacebookShareButton>
              <TwitterShareButton url={window.location.href}>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                  Twitter
                </button>
              </TwitterShareButton>
              <WhatsappShareButton url={window.location.href}>
                <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  WhatsApp
                </button>
              </WhatsappShareButton>
              <LinkedinShareButton url={window.location.href}>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  LinkedIn
                </button>
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelView;