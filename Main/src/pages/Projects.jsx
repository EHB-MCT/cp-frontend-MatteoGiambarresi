import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	return (
    <div>
      <h1 className="title">All Projects</h1>
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
