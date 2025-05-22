import {Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const project = projects.find(project => project.id);

  return (
    <div>
      <Link to="/projects">← Back to Projects</Link>
      <h1>{project.fable_title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
