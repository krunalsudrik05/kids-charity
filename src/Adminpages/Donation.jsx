import { Helmet } from "react-helmet";
import Aheader from "../Admincomponent/Aheader";
import Afooter from "../Admincomponent/Afooter";
import "./donation.css";
import Donationform from "../Admincomponent/Donation/Donationform";
const Donation = () => {
  const donationinfo = [
    { month: "Jan", donation: 55000 },
    { month: "Feb", donation: 45000 },
    { month: "Mar", donation: 52000 },
    { month: "Apr", donation: 58000 },
    { month: "May", donation: 62000 },
    { month: "Jun", donation: 49000 },
    { month: "Jul", donation: 60000 },
    { month: "Aug", donation: 59000 },
    { month: "Sep", donation: 50000 },
    { month: "Oct", donation: 51000 },
    { month: "Nov", donation: 59000 },
    { month: "Dec", donation: 100000 },
  ];
  return (
    <>
      <Helmet>
        <title>Donation</title>
      </Helmet>
      <Aheader />
      <Donationform />
      <div className="container-fluid dbg">
        <h2>DONATION INFORMATION</h2>
        <div className="row">
          {donationinfo.map((dcard, index) => (
            <div className="col-lg-3 col-md-3" key={index}>
              <div className="card">
                <h5 className="card-header">{dcard.month}</h5>
                <div className="card-body">
                  <h5 className="card-title">{dcard.donation}</h5>
                  <a href="#" className="btn">
                    DELETE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Afooter />
    </>
  );
};

export default Donation;
