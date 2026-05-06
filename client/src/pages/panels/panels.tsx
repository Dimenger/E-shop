import { Link } from "react-router";

export const Panels = () => {
  return (
    <div>
      <h1>Panels List</h1>

      <div>For house</div>
      <div>For flate</div>
      <Link to="/single-phase">single-phase</Link>
      <Link to="/three-phase">three-phase</Link>
    </div>
  );
};
