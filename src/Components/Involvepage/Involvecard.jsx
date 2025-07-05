import "./involvecard.css";
const Involvecard = ({ title, img, info }) => {
  return (
    <>
      <div className="card involve">
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
        </div>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{info}</p>
          <a href="#" className="btn">
            APPLY
          </a>
        </div>
      </div>
    </>
  );
};

export default Involvecard;
