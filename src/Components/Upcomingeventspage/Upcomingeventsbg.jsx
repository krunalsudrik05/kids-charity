import "./Upcomingbg.css";
import ec from "./images/ec.jpg";

const Upcomingeventsbg = () => {
  return (
    <>
      <div className="upcomingtxt">
        <h2 className="p-4">EVENTS</h2>
        <h3 className="eventdetails">EDUCATION CONFERENCE</h3>
        <div>
          <h6 className="eventdetails">
            The Education Conference was a collaborative event bringing together
            educators, students, parents, and experts to discuss and explore new
            ideas in teaching, learning, and the future of education. The theme
            of the conference focused on innovation, inclusion, and quality
            education for all.
          </h6>
        </div>
        <img src={ec} />
        <h4 className="eventdetails">TIME & LOCATION</h4>
        <h6 className="eventdetails">
          Mon, Mar 26, 7:00 PM-11:00 PM,
          <br /> Vadodara, Gujarat
        </h6>
        <a href="#" className="btn">
          Participate
        </a>
      </div>
    </>
  );
};

export default Upcomingeventsbg;
