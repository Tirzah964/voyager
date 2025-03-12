import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import HomeScreen from "./screens/Home/HomeScreen";
import ContactScreen from "./screens/Contact/ContactScreen";
import "./App.css";

const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="app-container">
      <HeaderMenu
        showNotification={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
