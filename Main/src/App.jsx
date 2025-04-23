import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import "./App.css";
import MakingOf from "./pages/MakingOf";

export default function App() {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<Router>
			<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Routes>
				<Route path="/" element={<Main searchTerm={searchTerm}/>} />
				<Route path="/projects" element={<Projects searchTerm={searchTerm} />} />
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/making-of/:id" element={<MakingOf />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}
