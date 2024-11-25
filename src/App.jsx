import React from "react";
import "./App.scss";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Home from "./pages/Home.jsx";
import Prestamos from "./pages/Prestamos.jsx";
import Miembros from "./pages/Miembros.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <Router>
        <NavBar />
        <div className="flex">
          <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/prestamos" element={<Prestamos />} />
                <Route path="/miembros" element={<Miembros />} />
              </Routes>
            </div>
          </div>
      </Router>
  );
}

export default App;
