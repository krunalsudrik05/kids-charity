import "./involvecard.css";
import { Link } from "react-router-dom";
const Involvecard = ({ title, img, info, ref }) => {
  return (
    <>
      <div className="card involve">
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
        </div>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{info}</p>
          <Link
            to={ref}
            className="btn text-white"
            style={{ backgroundColor: "#ed6124" }}
          >
            APPLY HERE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Involvecard;
