import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Upcomingeventsbg from "../Components/Upcomingeventspage/Upcomingeventsbg";
import Footer from "../Components/Footer";
const Upcomingevents = () => {
  return (
    <>
      <Helmet>
        <title>Upcomingevents</title>
      </Helmet>
      <Header />
      <Upcomingeventsbg />
      <Footer />
    </>
  );
};

export default Upcomingevents;
