import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";

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

export default function Projects({ searchTerm = "" }) {
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
		<div>
			<div className="container">
				<h1>All Projects</h1>
			</div>
			<div className="container project">
				<div className="project-card-container">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
