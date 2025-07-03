import logo from "../assets/logo.avif";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
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
                <Link className="nav-link" to={"/"}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/About"}>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Projects"}>
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Upcomingevents"}>
                  UPCOMING EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GET INVOLVED
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <button type="button" className="btn">
              LOG IN
            </button>
            <button type="button" className="btn">
              SIGN IN
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
