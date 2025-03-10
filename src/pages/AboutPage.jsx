import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>About the project</h2>
        <p>This is a simple feedback app built with React and React Router.</p>
        <p>Version: 1.0.0</p>
        <p>Created by: John Doe</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
