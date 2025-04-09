import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  School as Pool, 
  Dumbbell, 
  Calendar,
  Share2,
  X,
  Check,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  LinkedinShareButton
} from 'react-share';

interface RoomSelection {
  roomId: number;
  roomName: string;
  price: string;
  date: Date;
}

interface BookingForm {
  name: string;
  email: string;
  whatsapp: string;
  guests: number;
  specialRequests: string;
}

interface SuggestedBooking {
  rooms: RoomSelection[];
  savings: string;
  description: string;
}

const HotelView: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState<RoomSelection[]>([]);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: '',
    email: '',
    whatsapp: '',
    guests: 1,
    specialRequests: ''
  });

  const hotel = {
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

  const getSuggestedBooking = (currentRooms: RoomSelection[]): SuggestedBooking | null => {
    if (currentRooms.length === 0) return null;

    const totalPrice = currentRooms.reduce((sum, room) => {
      return sum + parseInt(room.price.replace(/[^0-9]/g, ''));
    }, 0);

    const hasSuiteRooms = currentRooms.some(room => room.roomName === "Suite Room");
    
    if (hasSuiteRooms) {
      const suggestedRooms = currentRooms.map(room => {
        if (room.roomName === "Suite Room") {
          return {
            ...room,
            roomId: 1,
            roomName: "Deluxe Room",
            price: "₹15,999"
          };
        }
        return room;
      });

      const newTotal = suggestedRooms.reduce((sum, room) => {
        return sum + parseInt(room.price.replace(/[^0-9]/g, ''));
      }, 0);

      const savings = totalPrice - newTotal;

      return {
        rooms: suggestedRooms,
        savings: `₹${savings.toLocaleString()}`,
        description: "Switch to Deluxe Rooms and save while enjoying similar amenities!"
      };
    }

    return null;
  };

  const handleRoomSelection = (roomId: number, date: Date) => {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
      const newSelection: RoomSelection = {
        roomId,
        roomName: room.name,
        price: room.price,
        date
      };

      const existingSelection = selectedRooms.find(
        s => s.roomId === roomId && s.date.getTime() === date.getTime()
      );

      if (existingSelection) {
        setSelectedRooms(selectedRooms.filter(
          s => !(s.roomId === roomId && s.date.getTime() === date.getTime())
        ));
      } else {
        setSelectedRooms([...selectedRooms, newSelection]);
      }
    }
  };

  const calculateTotalPrice = (rooms = selectedRooms) => {
    const total = rooms.reduce((sum, selection) => {
      const price = parseInt(selection.price.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0);
    return `₹${total.toLocaleString()}`;
  };

  const handleBookNowClick = () => {
    if (selectedRooms.length > 0) {
      setShowBookingModal(true);
    }
  };

  const handleSuggestedBooking = (suggestedRooms: RoomSelection[]) => {
    setSelectedRooms(suggestedRooms);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { selectedRooms, bookingForm });
    setShowBookingModal(false);
    setSelectedRooms([]);
    setBookingForm({
      name: '',
      email: '',
      whatsapp: '',
      guests: 1,
      specialRequests: ''
    });
  };

  const renderCalendar = () => (
    <div className="space-y-6">
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
                {room.availability.map((available, index) => {
                  const isSelected = selectedRooms.some(
                    s => s.roomId === room.id && s.date.getTime() === days[index].getTime()
                  );
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-center">
                      {available ? (
                        <button
                          onClick={() => handleRoomSelection(room.id, days[index])}
                          className={`relative w-16 h-16 rounded-lg transition-all duration-300 transform hover:scale-105 
                            ${isSelected 
                              ? 'bg-green-500 ring-4 ring-green-200 shadow-lg scale-110' 
                              : 'bg-white border-2 border-green-400 hover:bg-green-50'
                            }`}
                        >
                          {isSelected ? (
                            <>
                              <div className="absolute inset-0 bg-green-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-y-full animate-slide" />
                              </div>
                              <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white" />
                            </>
                          ) : (
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-600">
                              Select
                            </span>
                          )}
                        </button>
                      ) : (
                        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-lg flex items-center justify-center border-2 border-red-200">
                          Booked
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRooms.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={handleBookNowClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md flex items-center space-x-2"
          >
            <span>Book Now</span>
            <span className="bg-blue-500 px-2 py-1 rounded-lg text-sm">
              {selectedRooms.length} {selectedRooms.length === 1 ? 'Room' : 'Rooms'}
            </span>
          </button>
        </div>
      )}
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

  const suggestedBooking = getSuggestedBooking(selectedRooms);

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
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900">Complete Booking</h3>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              {suggestedBooking && (
                <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Suggested Booking</h4>
                      <p className="text-sm text-yellow-800 mt-1">{suggestedBooking.description}</p>
                      <div className="mt-2 text-yellow-900 font-medium">Save {suggestedBooking.savings}!</div>
                      <button
                        onClick={() => handleSuggestedBooking(suggestedBooking.rooms)}
                        className="mt-2 w-full bg-yellow-100 text-yellow-900 px-3 py-2 rounded hover:bg-yellow-200 transition-colors"
                      >
                        Switch to Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="text-sm text-blue-600">Total Amount</div>
                    <div className="text-lg font-bold text-blue-900">{calculateTotalPrice()}</div>
                  </div>
                  <div className="text-sm text-blue-600">
                    {selectedRooms.length} {selectedRooms.length === 1 ? 'Room' : 'Rooms'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={bookingForm.whatsapp}
                      onChange={(e) => setBookingForm({...bookingForm, whatsapp: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="WhatsApp"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({...bookingForm, guests: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Guests"
                    />
                  </div>
                  <div className="col-span-2">
                    <textarea
                      rows={2}
                      value={bookingForm.specialRequests}
                      onChange={(e) => setBookingForm({...bookingForm, specialRequests: e.target.value})}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Special requests (optional)"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Confirm Booking
                </button>
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