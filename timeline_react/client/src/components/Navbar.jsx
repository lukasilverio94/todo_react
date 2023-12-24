import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary py-3 px-5 "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold text-uppercase">
          Timeline
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {token && (
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/create"
                >
                  New Post
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to={token ? "/logout" : "/login"}
              >
                {token ? "Logout" : "Login"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
