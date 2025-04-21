import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Fables</h1>
      <Link to="/projects">
        <button>View Projects</button>
      </Link>
    </div>
  );
}