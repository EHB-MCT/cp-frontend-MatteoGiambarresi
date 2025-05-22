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
	async function getFairytaleCardItems() {
		const response = await fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch fairytale list");
		}
		const data = await response.json();
		console.log(data);
		return data;
	}

	getFairytaleCardItems();
	return (
		<BrowserRouter basename="/cp-frontend-MatteoGiambarresi/">
			<Routes>
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/parallax" element={<Parallax />} />
				<Route
					path="*"
					element={
						<>
							<div className="wrapper-portaal">
								<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
								<Routes>
									<Route path="/" element={<Main searchTerm={searchTerm} />} />
									<Route path="/projects" element={<Projects searchTerm={searchTerm} />} />
									<Route path="/making-of/:id" element={<MakingOf />} />

									<Route path="*" element={<Error />} />
								</Routes>
								<Footer />
							</div>
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
