import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import BookNow from "./Pages/BookNow";
import Location from "./Pages/Location";
import Rooms from "./Pages/Rooms";
import Amenities from "./Pages/Amenities";
import Gallery from "./Pages/Gallery";
import ExploreKasaragod from "./Pages/ExploreKasaragod";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/explore" element={<ExploreKasaragod />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
