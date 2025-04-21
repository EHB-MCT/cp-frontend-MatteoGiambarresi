import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Main from "./components/Main";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
