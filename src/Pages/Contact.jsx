import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contactbg from "../Components/Contactpage/Contactbg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Header />
      <Contactbg />
      <Footer />
    </>
  );
};

export default Contact;
