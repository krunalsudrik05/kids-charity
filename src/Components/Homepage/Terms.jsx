import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import "./terms.css";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms&conditions</title>
      </Helmet>
      <Header />
      <div className="termstxt">
        <h2 className="p-4">TERMS & CONDITIONS</h2>
        <h3>
          Welcome to the official website of Kids Charity. By accessing or using
          this site, you agree to the following terms and conditions.
        </h3>
        <ul>
          <li>
            Kids Charity is a non-profit initiative focused on supporting
            underprivileged children through education, awareness campaigns, and
            resource distribution.
          </li>
          <li>
            This website is intended for informational and charitable purposes
            only. You agree not to misuse the site or engage in activities that
            disrupt its operation. Content may not be copied or reproduced
            without prior written consent.
          </li>
          <li>
            All donations made through the website are voluntary and
            non-refundable. Donations will be used strictly for children’s
            education and welfare projects. We reserve the right to use donated
            funds as needed within our program areas.
          </li>
          <li>
            Volunteers must provide accurate and truthful information during
            registration. Minors must obtain parental or guardian consent before
            participating. All volunteers are expected to follow our Code of
            Conduct.
          </li>
          <li>
            Photos/videos taken at events may be used for promotional,
            educational, or reporting purposes on our website and social media.
            If you do not wish to appear in such content, please notify us in
            advance.
          </li>
        </ul>
        <h2 className="p-4">PRIVACY & POLICY</h2>
        <h3>
          We respect your privacy. Personal data collected through forms or
          registrations will be securely stored and used only for communication
          related to our activities. We do not sell, share, or rent user
          information to third parties.
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
