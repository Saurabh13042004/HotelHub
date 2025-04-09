import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingSearch from './pages/BookingSearch';
import BookingDetails from './pages/BookingDetails';
import HotelView from './pages/HotelView';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Chatbot from './components/Chatbot';
import HotelResults from './pages/HotelResults';


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<BookingSearch />} />
            <Route path="/booking/:id" element={<BookingDetails />} />
            <Route path="/hotel/:hotelId" element={<HotelView />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/hotels" element={<HotelResults />} />
       
          <Route path="/contact" element={<ContactUs />} />
     
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;