import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
	return (
		<div className="project-card-container">
			<div className="project-card">
				<Link to={`/projects/${project.id}`}>
				<img src={project.imgThumbnail} alt={project.fairytale} />
				</Link>
				<div className="flex">
					<p className="project-card-title">
						{project.fairytale} <br />
						<b>
							{project.nameStudent}{" "}
						</b>
					</p>
					<Link to={`/making-of/${project.id}`}>
						<img src="/info-icon.png" alt="" className="project-card-info-icon" />
					</Link>
				</div>
			</div>
		</div>
		
	);
};

export default ProjectCard;
