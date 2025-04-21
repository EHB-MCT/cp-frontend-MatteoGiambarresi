import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 >All Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
