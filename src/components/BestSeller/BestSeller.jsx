import "./BestSeller.css";
import img from "../../assets/images/img1.jpg";
import bannerBg from "../../assets/images/download.jpeg"; // 👈 صورة الخلفية للبنر

const products = [
  {
    id: 1,
    name: "Italian-Style Chicken Meatballs",
    price: 7.25,
    oldPrice: 9.35,
    discount: "22%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 2,
    name: "Sweet & Salty Kettle Corn",
    price: 3.29,
    oldPrice: 4.29,
    discount: "23%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 3,
    banner: true,
    text1: "delicious",
    text2: "The freshest of",
    text3: "all products",
    text4: "JUST IN BACOLA",
    bg: bannerBg,
  },
  {
    id: 4,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 11.68,
    discount: "15%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 5,
    name: "Blueberries – 1 Pint Package",
    price: 3.99,
    oldPrice: 4.49,
    discount: "11%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 6,
    name: "Chao Cheese Creamy Original",
    price: 19.5,
    oldPrice: 24.6,
    discount: "19%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 7,
    name: "Crispy Classic Buffalo Wings",
    price: 49.99,
    discount: "20%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 9,
    name: "Fresh Organic Broccoli Crowns",
    price: 4.85,
    oldPrice: 6.77,
    discount: "28%",
    stock: "IN STOCK",
    img,
  },
  {
    id: 10,
    name: "Vanilla Greek Yogurt",
    price: 4.49,
    oldPrice: 5.49,
    discount: "18%",
    stock: "IN STOCK",
    img,
  },
];

const BestSeller = () => {
  // أقسم المنتجات: 4 شمال - البنر - 4 يمين
  const left = products.slice(0, 4);
  const banner = products.find((p) => p.banner);
  const right = products.slice(4, 8);

  return (
    <div className="container my-5">
      <h3 className="fw-bold">Best Seller</h3>
      <p className="text-muted">
        Do not miss the current offers until the end of month.
      </p>
      <div className="row g-4">
        {/* الشمال */}
        <div className="col-12 col-lg-4">
          <div className="row g-4">
            {products
              .filter((item) => !item.banner) // غير البانر
              .slice(0, 4) // أول 4 منتجات للشمال
              .map((item) => (
                <div className="col-6" key={item.id}>
                  <div className="product-card p-3 border rounded h-100 position-relative">
                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                      {item.discount}
                    </span>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid mb-3 product-img"
                    />
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-success small mb-1">{item.stock}</p>
                    <div className="d-flex align-items-center mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-secondary"></i>
                      <span className="ms-2 small">1 review</span>
                    </div>
                    <div>
                      {item.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-danger fw-bold">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* البانر في النص */}
        <div className="col-12 col-lg-4 d-flex">
          {products
            .filter((item) => item.banner) // بس البنر
            .map((item) => (
              <div
                key={item.id}
                className="banner-box text-center p-4 d-flex flex-column justify-content-center align-items-center rounded w-100"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  minHeight: "100%",
                }}
              >
                <h6 className="text-warning">{item.text1}</h6>
                <h4>{item.text2}</h4>
                <h3 className="fw-bold">{item.text3}</h3>
                <p className="text-light">{item.text4}</p>
              </div>
            ))}
        </div>

        {/* اليمين */}
        <div className="col-12 col-lg-4">
          <div className="row g-4">
            {products
              .filter((item) => !item.banner) // غير البانر
              .slice(4, 8) // 4 منتجات لليمين
              .map((item) => (
                <div className="col-6" key={item.id}>
                  <div className="product-card p-3 border rounded h-100 position-relative">
                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                      {item.discount}
                    </span>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid mb-3 product-img"
                    />
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-success small mb-1">{item.stock}</p>
                    <div className="d-flex align-items-center mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-secondary"></i>
                      <span className="ms-2 small">1 review</span>
                    </div>
                    <div>
                      {item.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-danger fw-bold">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
