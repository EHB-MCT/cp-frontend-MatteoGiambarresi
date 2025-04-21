import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, margin: 20, width: 300 }}>
      {project.cover && <img src={project.cover} alt={project.fable_title} width="100%" />}
      <h2>{project.fable_title}</h2>
      <p>By {project.name} {project.surname}</p>
      <p><strong>Genre:</strong> {project.genre}</p>
      <Link to={`/projects/${project.id}`}>
        <button>Check fable</button>
      </Link>
    </div>
  );
}