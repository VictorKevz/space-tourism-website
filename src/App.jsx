import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";

function App() {
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
