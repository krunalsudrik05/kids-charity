import "./aboutbg.css";
import India from "./images/India.png";

const Aboutbg = () => {
  return (
    <>
      <div className="abouttext">
        <h2 className="p-4">ABOUT US</h2>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="fw-bold">Who Are We ?</h4>
            <h6>
              Kids Charity is a child-focused initiative dedicated to supporting
              underprivileged and vulnerable children through education, care,
              and community involvement.
            </h6>
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold">Our Vision</h4>
            <h6>we aim to build brighter futures—one child at a time.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="fw-bold">Our Mission</h4>
            <h6>
              Our mission is to ensure that every child has access to learning,
              safety, and opportunities, regardless of their background. We
              believe that small acts of kindness can create a lasting impact in
              a child’s life.
            </h6>
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold">Our Work</h4>
            <h6>
              <ul className="list-unstyled">
                <li>
                  Providing books, school supplies, and basic needs to children
                  in need.
                </li>
                <li>
                  Organizing educational events, workshops, and awareness drives
                </li>
                <li>
                  Encouraging children to be part of giving through school and
                  community programs
                </li>
              </ul>
            </h6>
          </div>
        </div>
      </div>
      <div className="abimg">
        <img src={India} className="img-fluid" />
      </div>
      <div className="city">
        <h3>OUR BRANCHIES</h3>
        <ul className="list-unstyled">
          <li>Vadodara, Gujarat</li>
          <li>Ahemdabad, Gujarat</li>
          <li>Mumbai, Maharashtra</li>
          <li>Pune, Maharashtra</li>
          <li>New Dehli, Dehli</li>
          <li>Bangluru, Karnataka</li>
          <li>Kolkata, West Bengal</li>
          <li>Jaipur, Rajasthan</li>
          <li>Indor, Madhya Pradesh</li>
          <li>Shri Nagar, Jammu & Kashmir</li>
          <li>Lucknow, Uttar Pradesh</li>
          <li>Patna, Bihar</li>
          <li>Guwahti, Aasam</li>
          <li>Kochi, Kerala</li>
        </ul>
      </div>
    </>
  );
};

export default Aboutbg;
