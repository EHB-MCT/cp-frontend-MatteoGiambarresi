import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

async function getFairytaleCardItems() {
	const response = await fetch(
		"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
	);
	if (!response.ok) {
		throw new Error("Failed to fetch fairytale list");
	}
	const data = await response.json();
	return data;
}

export default function MakingOf() {
	const { id } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		getFairytaleCardItems()
			.then((items) => {
				const found = items.find((item) => String(item.id) === String(id));
				setProject(found);
			})
			.catch((err) => console.error(err));
	}, [id]);

	if (!project) return <div>Loading...</div>;

	return (
		<div className="container">
			<div>
				<h1>MAKING OF - {project.fairytale}</h1>
				<img className="banner" src={project. imgBanner} alt="" />
			</div>
			<div className="lower-part">
				<div className="making-of-video">
					<h3>Explainer Video</h3>
					<iframe width="700" height="350" src={project.videoExplainer} allowFullScreen></iframe>
				</div>
				<div className="description">
					<h3>Description</h3>
					<p>{project.description}</p>
					<div className="button">
						<Link to={`https://ehb-mct.github.io/cp-frontend-Sam-Hoeterickx/#/fairy-tale`}>
							<button className="making-of">
								<h3>visit website</h3>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
