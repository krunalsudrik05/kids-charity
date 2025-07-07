import "./contactbg.css";

const Contactbg = () => {
  return (
    <>
      <div className="contacttxt">
        <h2 className="p-4">CONTACT US</h2>
        <div className="contactform">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="firstname" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                id="firstname"
              />
            </div>
            <div class="col-md-6">
              <label for="lastname" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                id="lastname"
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">
                Password
              </label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Mobile No."
              />
            </div>
            <div class="col-12">
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
            <div class="col-12">
              <button type="submit" class="btn">
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
