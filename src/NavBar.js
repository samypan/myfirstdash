import React from "react";
import "bulma/css/bulma.min.css";
function NavBar() {
  return (
    <div style={{ marginBottom: 10 }}>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        Top 10 Movies
      </nav>
    </div>
  );
}

export default NavBar;
