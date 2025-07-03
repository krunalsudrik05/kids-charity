import React from "react";
import Header from "../Components/Header";
import Projectsbg from "../Components/Projectspage/Projectsbg";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Header />
      <Projectsbg />
      <Footer />
    </>
  );
};

export default Projects;
