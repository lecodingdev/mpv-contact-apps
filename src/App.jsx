import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailContact from "./view/DetailContact";
import CategoryContact from "./view/CategoryContact";
import ContactApps from "./view/ContactApps";
import NotFound from "./view/NotFound";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactApps />} />
        <Route path="/detail/:id" element={<DetailContact />} />
        <Route path="/category/:category" element={<CategoryContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
