import { Helmet } from "react-helmet";
import Aheader from "../Aheader";
import "./admineventform.css";
import Afooter from "../Afooter";

const Admineventform = () => {
  return (
    <>
      <Helmet>
        <title>EventForm</title>
      </Helmet>
      <Aheader />
      <div className="addevent">
        <h2 className="p-4">CHANGE EVENT</h2>
        <div className="apform">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="eventtitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="eventtitle"
                placeholder="Event Title"
              />
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="eventinfo" className="form-label">
                  About Event
                </label>
                <textarea
                  className="form-control"
                  id="eventinfo"
                  name="onfo"
                  rows="4"
                  placeholder="About Your Event..."
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="eventimage" className="form-label">
                Image
              </label>
              <br />
              <input type="file" accept="image/*" id="eventimage" />
            </div>
            <div className="col-md-4">
              <label htmlFor="eventdate" className="form-label">
                Date
              </label>
              <br />
              <input type="date" id="eventdate" />
            </div>
            <div className="col-md-4">
              <label htmlFor="eventstarttime" className="form-label">
                Start Time
              </label>
              <br />
              <input type="time" id="eventstarttime" />
            </div>
            <div className="col-md-4">
              <label htmlFor="eventendtime" className="form-label">
                End Time
              </label>
              <br />
              <input type="time" id="eventendtime" />
            </div>
            <div className="col-12">
              <label htmlFor="eventlocation" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="eventlocation"
                placeholder="Enter Location"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <Afooter />
    </>
  );
};

export default Admineventform;
