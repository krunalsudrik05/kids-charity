import "./infocard.css";
import { Link } from "react-router-dom";

const Infocard = ({ img, title, ref }) => {
  return (
    <div>
      <div className="card border-0 ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <Link className="a" to={ref}>
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
