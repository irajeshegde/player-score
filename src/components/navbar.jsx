import React from "react";

const NavBar = ({ totalPlayers }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h4 className="navbar-brand mb-0 h1">
        Score Board{" "}
        <span className="badge badge-pill badge-secondary">
          Total players: {totalPlayers}
        </span>
      </h4>
    </nav>
  );
};

export default NavBar;
