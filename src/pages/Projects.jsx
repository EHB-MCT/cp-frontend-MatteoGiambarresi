import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ searchTerm = "" }) {
	const filteredProjects = projectsData.filter(
		(project) =>
			project.fable_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.surname.toLowerCase().includes(searchTerm.toLowerCase())
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
