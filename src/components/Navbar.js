import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="Contact">Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
