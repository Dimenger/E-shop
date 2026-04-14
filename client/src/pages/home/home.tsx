import { Link } from "react-router";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/single-phase">
        <button type="button">single-phase</button>
      </Link>
      <Link to="/three-phase">
        <button type="button">three-phase</button>
      </Link>
    </div>
  );
};
