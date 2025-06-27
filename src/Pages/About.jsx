import Header from "../Components/Header";
import Aboutbg from "../Components/Aboutpage/Aboutbg";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header />
      <Aboutbg />
      <Footer />
    </>
  );
};

export default About;
