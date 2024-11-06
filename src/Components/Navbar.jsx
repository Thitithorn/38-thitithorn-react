import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div>
          <div>
            <Link to="/">Homepage</Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;