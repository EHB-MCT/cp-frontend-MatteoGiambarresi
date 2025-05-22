import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

export default function Main({ searchTerm = "" }) {
	const filteredProjects = projectsData.filter(
		(project) =>
			project.fable_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.surname.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<div className="wrapper-portaal">
		<div className="container">
			<h1>IN THE SPOTLIGHT</h1>
			<div className="project-card-container">
				{filteredProjects.slice(0, 4).map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			<div className="button main">
				<Link to={`/projects`}>
					<button className="making-of">
						<h3>all projects</h3>
					</button>
				</Link>
				<Link to={`/parallax`}>
					<button className="making-of">
						<h3>sprrokje</h3>
					</button>
				</Link>
			</div>
		</div>
		</div>
	);
}
