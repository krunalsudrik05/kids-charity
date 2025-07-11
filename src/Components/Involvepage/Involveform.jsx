import { Helmet } from "react-helmet";
import "./involveform.css";
import Header from "../Header";
import Footer from "../Footer";
const Involveform = () => {
  return (
    <>
      <Header />
      <div className="involveformtxt">
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
          <select class="form-select" aria-label="Default select example">
            <option defaultValue={"Select Role"}>Select Role</option>
            <option value="1">Volunteer</option>
            <option value="2">Student</option>
            <option value="3">Educator</option>
          </select>

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

export default Involveform;
