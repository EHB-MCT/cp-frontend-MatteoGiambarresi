import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));


  return (
    <div>
      <Link to="/projects">← Back to Projects</Link>
      <h1>{project.fable_title}</h1>
      <p>{project.description}</p>
      </div>
  );
}

export default ProjectDetail;
