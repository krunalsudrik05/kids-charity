import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import Aheader from "../Admincomponent/Aheader";
import "./adminevent.css";
import ec from "../Admincomponent/Adminevent/images/ec.jpg";
import Afooter from "../Admincomponent/Afooter";

const Adminevent = () => {
  const [eventData] = useState({
    title: "EDUCATION CONFERENCE",
    description:
      "The Education Conference was a collaborative event bringing together educators, students, parents, and experts to discuss and explore new ideas in teaching, learning, and the future of education. The theme of the conference focused on innovation, inclusion, and quality education for all.",
    time: "Mon, Mar 26, 7:00 PM – 11:00 PM",
    location: "Vadodara, Gujarat",
    image: null,
  });
  return (
    <>
      <Helmet>
        <title>AdminEvent</title>
      </Helmet>
      <Aheader />
      <div className="admineventtxt">
        <h2 className="p-4">EVENTS</h2>
        <h3 className="eventdetails">{eventData.title}</h3>
        <div>
          <h6 className="eventdetails">{eventData.description}</h6>
        </div>
        <img src={ec} />
        <h4 className="eventdetails">TIME & LOCATION</h4>
        <h6 className="eventdetails">
          {eventData.time}
          <br /> {eventData.location}
        </h6>
        <Link to={"/Admin/Events/Eventform"} className="btn">
          Chane Event
        </Link>
      </div>
      <Afooter />
    </>
  );
};

export default Adminevent;
