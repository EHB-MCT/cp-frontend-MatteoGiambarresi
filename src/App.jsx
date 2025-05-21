import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import "./App.css";
import MakingOf from "./pages/MakingOf";
import Parallax from "./pages/Parallax";

const App = () => {
	const redirect = new URLSearchParams(window.location.search).get("redirect");
	if (redirect) {
		window.history.replaceState(null, "", `/cp-frontend-MatteoGiambarresi${redirect}`);
	}

	const [searchTerm, setSearchTerm] = useState("");
	return (
		<BrowserRouter basename="/cp-frontend-MatteoGiambarresi/">
			<Routes>
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route
					path="*"
					element={
						<>
							<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
							<Routes>
								<Route path="/" element={<Main searchTerm={searchTerm} />} />
								<Route path="/projects" element={<Projects searchTerm={searchTerm} />} />
								<Route path="/making-of/:id" element={<MakingOf />} />
								<Route path="/parallax" element={<Parallax />} />
								<Route path="*" element={<Error />} />
							</Routes>
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
