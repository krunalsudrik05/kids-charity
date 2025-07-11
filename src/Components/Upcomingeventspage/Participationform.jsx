import { Helmet } from "react-helmet";
import "./participationform.css";
import Header from "../Header";
import Footer from "../Footer";
const Participationform = () => {
  return (
    <>
      <Helmet>
        <title>EventParticipation</title>
      </Helmet>
      <Header />
      <div className="participatetxt">
        <h2>ADD YOUR DETAILS</h2>
        <form>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstname"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastname"
              />
            </div>
          </div>
          <br />
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />

          <br />

          <button type="submit" className="btn">
            SUBMIT
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Participationform;
