import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

async function getFairytaleCardItems() {
	const response = await fetch(
		"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
	);
	if (!response.ok) {
		throw new Error("Failed to fetch fairytale list");
	}
	const data = await response.json();
	return data;
}

export default function Main({ searchTerm = "" }) {
	const [fairytaleItems, setFairytaleItems] = useState([]);

	useEffect(() => {
		getFairytaleCardItems()
			.then(setFairytaleItems)
			.catch((err) => console.error(err));
	}, []);

	const filteredProjects = fairytaleItems.filter(
		(project) =>
			(project.fairytale && project.fairytale.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(project.nameStudent && project.nameStudent.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	return (
		<div className="wrapper-portaal">
			<div className="container">
				<h1>IN THE SPOTLIGHT</h1>
				<div className="project-card-container">
					{filteredProjects.slice(0, 3).map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
				<div className="button main">
					<Link to={`/projects`}>
						<button className="making-of">
							<h3>ALL PROJECTS</h3>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
