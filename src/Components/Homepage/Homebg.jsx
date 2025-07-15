import Infocard from "./Infocard";
import bg from "./images/homebg.jpg";
import aboutlg from "./images/aboutlg.avif";
import projrctlg from "./images/projectlg.avif";
import involvelg from "./images/involvelg.avif";
import homeevent from "./images/homeevent.jpg";
import "./Homebg.css";
import { Link } from "react-router-dom";

const Homebg = () => {
  return (
    <>
      {/* BG IMG  */}

      <div className="bgimg">
        <img src={bg} alt="" />
      </div>

      {/* INFORMATION  */}
      <div className="container-fluid hbg">
        <div className="row">
          <div className="col-md-4 vline">
            <Infocard img={aboutlg} title={"ABOUT"} ref={"/About"} />
          </div>
          <div className="col-md-4 vline">
            <Infocard img={projrctlg} title={"PROJECTS"} ref={"/Projects"} />
          </div>
          <div className="col-md-4 vline">
            <Infocard
              img={involvelg}
              title={"GET INVOLVE"}
              ref={"/Getinvolve"}
            />
          </div>
        </div>
      </div>

      {/* SUPPORT  */}

      <div className="container-fluid support">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="col1">
              <h3 className="text-center">SUPPORT THE CHILDREN</h3>
              <div className="card border-0">
                <div className="card-body">
                  <h4 className="card-title">HOW TO HELP</h4>
                  <ul className="card-text">
                    <li>Donate Money</li>
                    <li>Donate Goods</li>
                    <li>Volunteer Time</li>
                  </ul>
                  <h4 className="card-title">AWARD WINNER</h4>
                  <ul className="card-text">
                    <li>UNICEF Global Goals Awards</li>
                    <li>International Children’s Peace Prize</li>
                    <li>World of Children Awards</li>
                  </ul>
                  <h4 className="card-title">KIDS FESTIVAL</h4>
                  <ul className="card-text">
                    <li>Cultural Festivals</li>
                    <li>Educational Festivals</li>
                    <li>Entertainment Festivals</li>
                    <li>Charity or Cause-Based Festivals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col2">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={homeevent} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="card-title">EVENTS</h4>
                    <p className="card-text">
                      The Kids Charity Event was a heartwarming and impactful
                      program focused on supporting underprivileged children
                      through education, fun, and care. Held in collaboration
                      with volunteers, students, and local partners, the event
                      combined charity, learning, and celebration in a single
                      day.
                    </p>
                    <ul className="card-text">
                      <li>
                        Benefited over thousand number of childrens from
                        underserved communities
                      </li>
                      <li>
                        Created a joyful, safe, and educational space for every
                        child
                      </li>
                      <li>
                        Inspired community involvement and promoted the value of
                        giving and empathy
                      </li>
                    </ul>
                    <p className="card-text">
                      The event was a celebration of hope, learning, and
                      kindness, reminding everyone that small actions can lead
                      to big change in a child's life.
                    </p>
                    <Link to={"/Upcomingevents"} className="btn">
                      UPCOMING EVENTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebg;
