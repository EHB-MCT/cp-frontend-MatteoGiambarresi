import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import "./App.css";
import SearchFilter from "./components/SearchFilter";
import MakingOf from "./pages/MakingOf";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/making-of/:id" element={<MakingOf />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}
