import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter container-fluid">
      <div className="row align-items-center">
        {/* Left content */}
        <div className="col-lg-5 col-md-6 col-12 mb-4 mb-md-0 newsletter-content">
          <h4>
            <span className="newsletter-content-discount">$20 discount</span>
            <span> for your first order</span>
          </h4>
          <h3 className="newsletter-subtitle">
            Join our email subscription now to get..
          </h3>
          <p className="newsletter-description">
            Join our email subscription now to get updates <br /> on promotions and coupons.
          </p>
          <div className="input-group rounded border border-1 p-2 bg-white">
            <span className="input-group-text newsletter-icon">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control newsletter-input"
              placeholder="Your email address"
            />
            <button className="btn newsletter-button p-3 rounded" type="button">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right side (ticket) */}
        <div className="col-lg-7 col-md-6 col-12 d-flex justify-content-center position-relative">
          {/* background icons */}
          <div className="bg-icons">
            {Array.from({ length: 18 }).map((_, i) => (
              <div className="icon text-white" key={i}>🎁</div>
            ))}
          </div>

          {/* ticket */}
          <div className="ticket">
            <div className="edge-fold" aria-hidden="true"></div>
            <div className="inner">
              <div className="label">DISCOUNT</div>
              <div className="percent">50%</div>
              <div className="sub">CAMPAIGN</div>
              <div className="perforation" />
              <div className="row mt-2">
                <div className="col-6 text-start text-muted small">Code</div>
                <div className="col-6 text-end fw-bold small">#SAVE50</div>
              </div>
              <div className="row mt-1">
                <div className="col-12 text-center text-muted small">
                  Valid until 30 Sep 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
