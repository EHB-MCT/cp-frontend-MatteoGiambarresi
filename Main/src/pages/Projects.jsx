import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	return (
		<div>
			<div className="container">
				<h1>All Projects</h1>
			</div>
			<div className="container project">
				<div className="project-card-container">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
