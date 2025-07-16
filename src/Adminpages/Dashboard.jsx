import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Aheader from "../Admincomponent/Aheader";
import "./dashboard.css";
import Ainfocard from "../Admincomponent/Dashboard/Ainfocard";
import Achart from "../Admincomponent/Dashboard/Achart";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [admininfo] = useState([
    {
      title: "PROJECTS",
      info: "8",
    },
    {
      title: "DONATION",
      info: "7,00,000$",
    },
    {
      title: "VOLUNTEERS",
      info: "80",
    },
    {
      title: "UPCOMING EVENTS",
      info: "5",
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Aheader />
      <div className="container-fluid dbbg">
        <div className="row">
          {admininfo.map((acard, index) => (
            <div className="col-lg-3 col-md-3" key={index}>
              <Ainfocard title={acard.title} info={acard.info} />
            </div>
          ))}
        </div>
      </div>
      <Achart />
      <Footer />
    </>
  );
};

export default Dashboard;
