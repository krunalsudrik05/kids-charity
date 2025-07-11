import { Helmet } from "react-helmet";
import "./signin.css";
import Header from "./Header";
import Footer from "./Footer";
const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Signin </title>
      </Helmet>
      <Header />
      <div className="signintxt">
        <h2>SIGN IN</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>
          <br />
          <button type="submit" className="btn">
            SIGN IN
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signin;
