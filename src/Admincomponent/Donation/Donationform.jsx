import { Helmet } from "react-helmet";
import "./donationform.css";

const Donationform = () => {
  return (
    <>
      <Helmet>
        <title>DonationForm</title>
      </Helmet>
      <div className="adddonation">
        <h2 className="p-4">DONATION FORM</h2>
        <div className="donationform">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="dmonth" className="form-label">
                Month
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="dmonth"
              >
                <option selected>-- Choose Month --</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="damount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="damount"
                placeholder="Enter Total Amount"
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
    </>
  );
};

export default Donationform;
