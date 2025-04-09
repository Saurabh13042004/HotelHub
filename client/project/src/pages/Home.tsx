import React from 'react';
import { Link } from 'react-router-dom';
import { Download,LogIn, PhoneCall,MapPin,Search, Key , PiggyBank,Wifi, Dumbbell, HeadphonesIcon, School as  BookOpen, Star, Send } from 'lucide-react';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const rooms = [
    {
      name: 'Family Room',
      price: 149,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
      perNight: true
    },
    {
      name: 'Deluxe Room',
      price: 199,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
      perNight: true
    },
    {
      name: 'Single Room',
      price: 99,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
      perNight: true
    },
    {
      name: 'Luxury Suite',
      price: 299,
      image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80',
      perNight: true
    },
    {
      name: 'Guest Room',
      price: 129,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
      perNight: true
    },
    {
      name: 'Deluxe Suite',
      price: 249,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      perNight: true
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Business Traveler',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      text: 'Outstanding service and luxurious accommodations. The staff went above and beyond to ensure my comfort.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Family Vacation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      text: 'Perfect for our family vacation. The rooms were spacious and the amenities were excellent.'
    },
    {
      name: 'David Chen',
      role: 'Leisure Stay',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      text: 'A truly memorable experience. The location and facilities are top-notch.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
      className="relative min-h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hotel-navy bg-opacity-60"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20 pb-20">
        <div className="text-white max-w-2xl mb-12 md:mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Best Apartment & Hotel{' '}
            <span className="text-hotel-blue">Service</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
            Experience luxury and comfort in our carefully curated selection of premium accommodations. Book your perfect stay today.
          </p>
        </div>
        
        {/* Search Form */}
        <div className="w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <SearchForm />
        </div>
      </div>
    </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white-100 p-4 rounded-full">
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure booking process</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white-100 p-4 rounded-full">
              <Key className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Instant Acess</h3>
              <p className="text-gray-600">No Login Just walk in</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white-100 p-4 rounded-full">
              <PiggyBank className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Zerofees</h3>
              <p className="text-gray-600">More bookings, zero deductions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Rooms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Popular Rooms</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our most sought-after accommodations, each designed to provide the perfect blend of comfort and luxury for your stay.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-500 font-bold">
                      INR {room.price} {room.perNight ? '/night' : ''}
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of services to ensure your booking experience is seamless and enjoyable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Sign Up</h3>
              <p className="text-gray-600">
              Instant Booking, No Sign-Up
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2"> Map-Based Discovery</h3>
              <p className="text-gray-600">
              Explore hotels visually on an interactive map
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2"> Direct Hotel Contact</h3>
              <p className="text-gray-600">
                Get in touch with hotel staff directly for inquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Guests Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Read what our valued guests have to say about their experience with us.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest offers, news, and exclusive deals.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 flex items-center gap-2"
            >
              <Send className="h-5 w-5" />
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Download the HotelHub App
          </h2>
          <p className="text-xl text-white mb-8">
            Get started with our mobile app for hotel owners. Manage bookings, update availability, and more.
          </p>
          <a
            href="/app-release.apk"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100"
          >
            <Download className="h-5 w-5" />
            Download APK
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;