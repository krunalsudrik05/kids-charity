import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-4 vline">
            <div className="card border-0">
              <div className="card-body">
                <h4 className="card-title">Contact Us:</h4>
                <p className="card-text">
                  +91 9106587096
                  <br />
                  kidscharity111@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 vline">
            <div className="card border-0">
              <div className="card-body">
                <h4 className="card-title">Find Us:</h4>
                <p className="card-text">
                  A -16 Shri Yogi Nagar-1, B/H . Narayan Wadi, Opp Treehouse
                  school, Atladra, Vadodara
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 vline">
            <div className="card border-0">
              <div className="card-body">
                <h4 className="card-title">Our Policy:</h4>
                <Link
                  to="/Terms&conditions"
                  className="text-decoration-none text-white"
                >
                  Privacy Policy Terms & Conditions <br /> Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          © 2025 by Kids Charity. Powered and secured by PI Production
        </div>
      </div>
    </>
  );
};

export default Footer;
