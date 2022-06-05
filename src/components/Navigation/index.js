import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/">Overview</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
