import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Green Leaf Lettuce",
      price: 2.64,
      oldPrice: 2.74,
      img: "https://images.unsplash.com/photo-1582515073490-dc0c4a19d2f1?auto=format&fit=crop&w=300&q=80",
      qty: 1,
    },
    {
      id: 2,
      name: "Organic Spring Mix",
      price: 2.6,
      oldPrice: 3.0,
      img: "https://images.unsplash.com/photo-1592924357228-91a5d4d28698?auto=format&fit=crop&w=300&q=80",
      qty: 2,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container my-5">
      <h3 className="mb-4">Shopping Cart</h3>
      <div className="row g-4">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between border-bottom py-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded me-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-success">${item.price.toFixed(2)}</small>{" "}
                      {item.oldPrice && (
                        <small className="text-muted text-decoration-line-through ms-1">
                          ${item.oldPrice.toFixed(2)}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-secondary">−</button>
                    <span className="px-3">{item.qty}</span>
                    <button className="btn btn-sm btn-outline-secondary">+</button>
                  </div>

                  {/* Total per item */}
                  <div className="fw-bold">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>

                  <button className="btn btn-sm btn-outline-danger ms-2">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="d-flex justify-content-between fw-bold border-top pt-2">
                <span>Total</span>
                <span>${(subtotal + 5).toFixed(2)}</span>
              </div>
              {/* <button className="btn btn-success w-100 mt-3"> */}
                <Link className="btn btn-success w-100 mt-3" to="/checkout">Proceed to Checkout</Link>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
