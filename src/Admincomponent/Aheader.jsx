import logo from "../assets/logo.avif";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Aheader.css";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="container-fluid logo">
        <img src={logo} className="d-flex justify-content-center" alt="" />
      </div>
      <div className="htext">
        <h1>KIDS CHARITY</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin"}>
                  DASHBOARD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Projects"}>
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Projects"}>
                  DONATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Upcomingevents"}>
                  VOLUNTEERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Events"}>
                  UPCOMING EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Contact"}>
                  MESSAGES
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            {isLoggedIn ? (
              <button className="btn btn-danger" onClick={handleLogout}>
                LOG OUT
              </button>
            ) : (
              <>
                <Link to="/Login" className="btn">
                  LOG IN
                </Link>
                <Link to="/Signin" className="btn">
                  SIGN IN
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
