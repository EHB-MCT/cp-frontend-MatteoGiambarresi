import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
	return (
		<div className="project-card-container">
			<div className="project-card">
				<Link to={`/projects/${project.id}`}>
					<img className="project-card-cover" src={project.cover} alt={project.fable_title} />
				</Link>
				<div className="flex">
					<p className="project-card-title">
						{project.fable_title} <br />
						<b>
							{project.name} {project.surname}{" "}
						</b>
					</p>
					<Link to={`/making-of/${project.id}`}>
						<img src="./images/info-icon.png" alt="" className="project-card-info-icon" />
					</Link>
				</div>
			</div>
		</div>
	);
}
