import { Helmet } from "react-helmet";
import "./apform.css";
import Aheader from "../Aheader";
import Afooter from "../Afooter";

const Apform = () => {
  return (
    <>
      <Helmet>
        <title>ProjectForm</title>
      </Helmet>
      <Aheader />
      <div className="addproject">
        <h2 className="p-4">ADD PROJECT</h2>
        <div className="apform">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <br />
              <input type="file" accept="image/*" id="image" />
            </div>
            <div className="col-12">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Project Title"
              />
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="info" className="form-label">
                  About Project
                </label>
                <textarea
                  className="form-control"
                  id="info"
                  name="onfo"
                  rows="4"
                  placeholder="About Your Project..."
                ></textarea>
              </div>
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

export default Apform;
