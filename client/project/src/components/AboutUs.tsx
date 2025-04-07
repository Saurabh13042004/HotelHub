import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Star, Award, Leaf, Heart, Hotel, ArrowLeft } from 'lucide-react';

const AboutUs: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Alexandra Reynolds",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
      bio: "With over 15 years in luxury hospitality, Alexandra has transformed HotelHub into a global leader."
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
      bio: "Michael oversees our daily operations across all properties, ensuring consistent quality."
    },
    {
      name: "Sophia Williams",
      role: "Head of Guest Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
      bio: "Sophia is dedicated to creating memorable moments for all our guests."
    }
  ];

  const values = [
    { icon: <Star className="w-8 h-8 text-amber-500" />, title: "Excellence in Service", description: "We strive for perfection in every guest interaction" },
    { icon: <Leaf className="w-8 h-8 text-emerald-500" />, title: "Sustainability", description: "Committed to eco-friendly practices across all our properties" },
    { icon: <Hotel className="w-8 h-8 text-blue-500" />, title: "Innovation", description: "Continuously evolving to enhance the guest experience" },
    { icon: <Heart className="w-8 h-8 text-rose-500" />, title: "Cultural Respect", description: "Embracing diverse traditions in every location we operate" },
    { icon: <Award className="w-8 h-8 text-purple-500" />, title: "Community Engagement", description: "Making positive impacts in local communities" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation */}
   

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
              Established 2010
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About HotelHub</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
              Elevating hospitality through exceptional service and unparalleled luxury experiences across the globe.
            </p>
            <div className="flex justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('our-story')}
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('team-section')}
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20"></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('our-story')}>
          <ArrowDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>

      {/* Our Story Section */}
      <div id="our-story" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=2674&auto=format&fit=crop" 
                    alt="Luxury hotel lobby" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to <span className="font-semibold text-blue-600">HotelHub</span>, where luxury meets comfort. Since our
                  establishment in 2010, we've been committed to providing exceptional hospitality
                  experiences to guests from around the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our dedication to excellence has earned us several accolades in the industry,
                  including the prestigious{' '}
                  <span className="font-medium text-blue-600">
                    "Best Luxury Hotel Chain"
                  </span>{' '}
                  award for three consecutive years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To create memorable experiences for our guests through personalized service,
              luxurious accommodations, and sustainable practices that respect the environment
              and local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-6 bg-white w-16 h-16 rounded-full shadow-sm mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">40+</p>
              <p className="text-gray-600">Luxury Properties</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">15</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">5,000+</p>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">1M+</p>
              <p className="text-gray-600">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                {/* Image with gradient overlay */}
                <div className="relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-300 mb-2">{member.role}</p>
                    
                    {/* Bio - visible on hover */}
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white/90 mt-3">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
