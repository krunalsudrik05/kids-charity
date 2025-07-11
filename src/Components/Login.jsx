import { Helmet } from "react-helmet";
import "./login.css";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Header />
      <div className="logintxt">
        <h2>LOG IN</h2>
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
          <br />
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

          <button type="submit" className="btn">
            LOG IN
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
