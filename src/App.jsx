import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailContact from "./view/DetailContact";
import CategoryContact from "./view/CategoryContact";
import ContactApps from "./view/ContactApps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactApps />} />
        <Route path="/detail/:id" element={<DetailContact />} />
        <Route path="/:category" element={<CategoryContact />} />
      </Routes>
    </>
  );
}

export default App;
