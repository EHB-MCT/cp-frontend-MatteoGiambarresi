import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

async function getFairytaleCardItems() {
	const response = await fetch(
		"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
	);
	if (!response.ok) throw new Error("Failed to fetch fairytale list");
	return response.json();
}

export default function MakingOf() {
	const { id } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		getFairytaleCardItems()
			.then((items) => setProject(items.find((item) => item.id == id)))
			.catch(console.error);
	}, [id]);

	if (!project) return <div>Loading...</div>;

	return (
		<div className="container">
			<h1>MAKING OF - {project.fairytale}</h1>
			<img className="banner" src={project.imgBanner} alt={`${project.fairytale} banner`} />

			<div className="lower-part">
				<section className="making-of-video">
					<h3>Explainer Video</h3>
					<iframe
						width="700"
						height="350"
						src={`https://www.youtube.com/embed/${project.videoExplainer}`}
						allowFullScreen
					></iframe>
				</section>

				<section className="description">
					<h3>Description</h3>
					<p>{project.description}</p>
					<Link to={project.fairytaleLink}>
						<button className="making-of">
							<h3>Visit Website</h3>
						</button>
					</Link>
				</section>
			</div>
		</div>
	);
}
