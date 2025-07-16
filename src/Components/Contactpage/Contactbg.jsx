import "./contactbg.css";

const Contactbg = () => {
  return (
    <>
      <div className="contacttxt">
        <h2 className="p-4">CONTACT US</h2>
        <div className="contactform">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstname"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastname"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Contact No.
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Mobile No."
              />
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
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
    </>
  );
};

export default Contactbg;
