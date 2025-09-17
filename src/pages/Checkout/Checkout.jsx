import React from "react";
import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  return (
    <div className="container checkout-container py-5">
      <div className="row">
        {/* ====== Left Side - Form ====== */}
        <div className="col-md-7">
          {/* Contact */}
          <h5 className="fw-bold mb-3">Contact</h5>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email or mobile phone number"
            />
          </div>
          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="offers" />
            <label htmlFor="offers" className="form-check-label">
              Email me with news and offers
            </label>
          </div>

          {/* Delivery */}
          <h5 className="fw-bold mb-3">Delivery</h5>
          <div className="mb-3">
            <select className="form-select">
              <option>United States</option>
              <option>Canada</option>
              <option>Egypt</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="First name (optional)" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Address" />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Apartment, suite, etc. (optional)" />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Postal code (optional)" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="City" />
            </div>
          </div>

          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label htmlFor="saveInfo" className="form-check-label">
              Save this information for next time
            </label>
          </div>

          {/* Shipping */}
          <h6 className="fw-bold">Shipping method</h6>
          <div className="shipping-method p-3 border rounded mb-4 d-flex justify-content-between align-items-center">
            <span>Standard</span>
            <span className="fw-bold text-success">FREE</span>
          </div>

          {/* Payment */}
          <h5 className="fw-bold">Payment</h5>
          <p className="text-muted">All transactions are secure and encrypted.</p>
          <div className="payment-box border rounded p-5 text-center">
            <i className="bi bi-credit-card fs-1"></i>
          </div>
        </div>

        {/* ====== Right Side - Order Summary ====== */}
        <div className="col-md-5">
          <div className="order-summary ps-md-5">
            {/* Product item */}
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="me-3 rounded"
              />
              <div className="flex-grow-1">
                <p className="mb-0 small">All Natural Italian-Style Chicken Meatballs</p>
              </div>
              <span className="small">$7.25</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="me-3 rounded"
              />
              <div className="flex-grow-1">
                <p className="mb-0 small">Coca-Cola – 2 L Bottle</p>
              </div>
              <span className="small">$3.85</span>
            </div>

            <div className="d-flex align-items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="me-3 rounded"
              />
              <div className="flex-grow-1">
                <p className="mb-0 small">Fairlife Lactose-Free 2% Milk</p>
              </div>
              <span className="small">$3.69</span>
            </div>

            {/* Totals */}
            <div className="d-flex justify-content-between mb-2">
              <span className="small">Subtotal · 3 items</span>
              <span className="small">$14.79</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="small">Shipping</span>
              <span className="small text-success">FREE</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-3">
              <span>Total</span>
              <span className="fs-5">$14.79</span>
            </div>
            <p className="text-muted small">Including $2.46 in taxes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
