import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

function MakingOf() {
	const { id } = useParams();
	const project = projects.find((project) => project.id === parseInt(id));

	return (
		<div className="container">
			<h1>MAKING OF - {project.fable_title}</h1>
			<img className="banner" src={project.banner} alt="" />

			<p>{project.description}</p>
		</div>
	);
}

export default MakingOf;
