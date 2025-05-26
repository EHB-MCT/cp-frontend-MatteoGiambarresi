import { Link } from "react-router-dom";

export default function ProjectCard({ project}) {
	return (
		<div className="project-card-container">
			<div className="project-card">
				<Link to={project.fairytaleLink}>
					<img src={project.imgThumbnail} />
				</Link>
				<div className="flex">
					<p className="project-card-title">
						{project.fairytale} <br />
						<b>{project.nameStudent} </b>
					</p>
					<Link to={`/making-of/${project.id}`}>
						<div className="project-card-info-icon">
							<img
								src="https://res.cloudinary.com/dhvigmhgw/image/upload/v1747943203/info-icon_vcvzld.png"
								className="info-icon-image"
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
