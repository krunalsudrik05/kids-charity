import Infocard from "./Infocard";
import bg from "./images/homebg.jpg";
import aboutlg from "./images/aboutlg.avif";
import projrctlg from "./images/projectlg.avif";
import involvelg from "./images/involvelg.avif";
import homeevent from "./images/homeevent.jpg";
import "./Homebg.css";

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
            <Infocard img={projrctlg} title={"PROJECTS"} />
          </div>
          <div className="col-md-4 vline">
            <Infocard img={involvelg} title={"GET INVOLVE"} />
          </div>
        </div>
      </div>

      {/* SUPPORT  */}

      <div className="container-fluid support">
        <div className="row">
          <div className="col-lg-6 col1">
            <h3>SUPPORT THE CHILDREN</h3>
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
          <div className="col-lg-6 col2">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src={homeevent} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="card-title">EVENTS</h4>
                    <h5 className="card-subtitle mb-2 text-muted">
                      Educational Events
                    </h5>
                    <p className="card-text">
                      A Kids Charity Education Event is a community-driven
                      initiative designed to promote education, awareness, and
                      compassion among and for children, especially those from
                      underprivileged backgrounds. These events combine learning
                      activities with social impact, aiming to make education
                      accessible, engaging, and meaningful for every child.
                    </p>
                    <ul className="card-text">
                      <li>Interactive learning stalls</li>
                      <li>Workshops</li>
                      <li>book/toy donations</li>
                      <li>Cultural performances</li>
                      <li>Guest talks by educators or social workers</li>
                    </ul>
                    <a href="#" className="btn">
                      UPCOMING EVENTS
                    </a>
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
