import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";
const Main = () => {
	return (
		<div className="container">
			<h1>IN THE SPOTLIGHT</h1>
			<div className="project-card-container">
				{projects.slice(0, 4).map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			<div className="button main">
				<Link to={`/projects`}>
					<button className="making-of">
						<h3>all projects</h3>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Main;
