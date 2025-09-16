import "./Contact.css";

function Contact() {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-3">Get In Touch</h2>
      <p className="text-center text-muted mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
        veniam vel.
      </p>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm p-4 h-100 text-center">
            <div className="d-flex justify-content-center mb-3">
              <i className="fas fa-map-marker-alt fa-3x text-teal"></i>
            </div>
            <h6 className="fw-bold">102 Street 2714 Donovan</h6>
            <p className="text-muted">Lorem ipsum dolar site amet discont</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm p-4 h-100 text-center">
            <div className="d-flex justify-content-center mb-3">
              <i className="fas fa-phone-alt fa-3x text-teal"></i>
            </div>
            <h6 className="fw-bold">+02 1234 567 88</h6>
            <p className="text-muted">Lorem ipsum dolar site amet discont</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm p-4 h-100 text-center">
            <div className="d-flex justify-content-center mb-3">
              <i className="fas fa-envelope fa-3x text-teal"></i>
            </div>
            <h6 className="fw-bold">info@example.com</h6>
            <p className="text-muted">Lorem ipsum dolar site amet discont</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-5 border-0">
        <h2 className="text-center mb-3">Send Us</h2>
        <p className="text-center text-muted">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
        <hr />
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-teal px-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
