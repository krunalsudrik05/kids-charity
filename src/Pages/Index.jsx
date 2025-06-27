import Header from "../Components/Header";
import Homebg from "../Components/Homepage/Homebg";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

function Index() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Homebg />
      <Footer />
    </>
  );
}

export default Index;
