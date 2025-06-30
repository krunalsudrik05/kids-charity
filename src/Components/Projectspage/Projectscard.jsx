import "./Projectscard.css";
const Projectscard = ({ img, title, info }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 p-3">
          <img src={img} alt="" className="image-fluid" />
        </div>
        <div className="col-lg-6 p-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{info}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectscard;
