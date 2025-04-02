import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingSearch from './pages/BookingSearch';
import BookingDetails from './pages/BookingDetails';
import HotelView from './pages/HotelView';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;