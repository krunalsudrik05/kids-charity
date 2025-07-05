import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Involvebg from "../Components/Involvepage/Involvebg";

const Involve = () => {
  return (
    <>
      <Helmet>
        <title>GetInvolve</title>
      </Helmet>
      <Header />
      <Involvebg />
      <Footer />
    </>
  );
};

export default Involve;
