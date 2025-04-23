import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

const MakingOf = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === parseInt(id));

	return (
		<div className="container">
			<div>
				<h1>MAKING OF - {project.fable_title}</h1>
				<img className="banner" src={project.banner} alt="" />
			</div>
			<div className="lower-part">
				<div className="making-of-video">
					<h3>Explainer Video</h3>
					<iframe width="700" height="350" src={project.video_making_off} allowFullScreen></iframe>
				</div>
				<div className="description">
					<h3>Description</h3>
					<p>{project.description}</p>
					<div className="button">
						<Link to={`/projects/${project.id}`}>
							<button className="making-of">
								<h3>visit webiste</h3>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakingOf;
