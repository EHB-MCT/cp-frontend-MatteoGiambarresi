import { Link } from "react-router-dom";

export default function ProjectDetail({ project }) {
	return (
		<div className="container">
			<Link to="/projects">← Back to Projects</Link>
			<h1>{project.fable_title}</h1>
			<p>{project.description}</p>
		</div>
	);
}
