import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import img from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/logo.png";
import img3 from "../../assets/images/download.jpeg";
import img4 from "../../assets/images/img2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./ProductDetails.css"; 



const product = {
  name: "SkinnyPop Popcorn SkinnyPack Original",
  priceRange: "$15.00 - $25.00",
  sizes: ["small", "medium", "large"],
  description: `Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin B1, Riboflavin Vitamin B2, Folic Acid), Palm and/or Canola Oil, Cocoa (Processed with Alkali), High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt...`,
  images: [
    { src: img, label: "Front View" },
    { src: img2, label: "Side View" },
    { src: img3, label: "Back View" },
    { src: img4, label: "Top View" },
  ],
};

const relatedProducts = [
  { id: 1, name: "Fresh Green Leaf Lettuce", price: "$2.64", oldPrice: "$2.74", img },
  { id: 2, name: "Leafy Romaine Mixed Lettuce", price: "$2.50", oldPrice: "$2.70", img },
  { id: 3, name: "Fresh Express Iceberg Garden Salad Blend", price: "$25.00 - $40.00", img },
  { id: 4, name: "Organic Girl Lettuce", price: "$1.50", img },
  { id: 5, name: "Organic Spring Mix", price: "$2.60", oldPrice: "$3.00", img },
];

export default function ProductDetails() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left: Image Gallery */}
        <div className="col-md-6">
          {/* السلايدر الكبير */}
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
            initialSlide={selectedIndex}
          >
            {product.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="position-relative text-center">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="img-fluid border rounded"
                    style={{ maxHeight: "350px", objectFit: "contain" }}
                  />
                  <span
                    className="position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white px-2 py-1 rounded"
                    style={{ fontSize: "14px" }}
                  >
                    {img.label}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* الصور الصغيرة تحت الكبير */}
          <div className="d-flex gap-2 justify-content-center mt-3">
            {product.images.map((thumb, i) => (
              <img
                key={i}
                src={thumb.src}
                alt={thumb.label}
                className={`border rounded p-1 ${
                  selectedIndex === i ? "border-success border-2" : ""
                }`}
                style={{
                  width: "70px",
                  height: "70px",
                  cursor: "pointer",
                  objectFit: "contain",
                }}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <h5 className="text-success mb-3">{product.priceRange}</h5>

          <p className="fw-bold">Available In:</p>
          <div className="d-flex gap-2 mb-3">
            {product.sizes.map((size) => (
              <button key={size} className="btn btn-outline-secondary btn-sm">
                {size}
              </button>
            ))}
          </div>

          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary">−</button>
            <span className="px-3">1</span>
            <button className="btn btn-outline-secondary">+</button>
          </div>

          <button className="btn btn-success px-4">Add to Cart</button>

          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-light border">
              <i className="far fa-heart me-2"></i> Wishlist
            </button>
            <button className="btn btn-light border">
              <i className="fas fa-share me-2"></i> Share
            </button>
          </div>

          <div className="mt-3">
            <span className="badge bg-light text-dark me-2">Fast Food</span>
            <span className="badge bg-light text-dark me-2">Organic Corn</span>
            <span className="badge bg-light text-dark me-2">Flavoured</span>
            <span className="badge bg-light text-dark">Dry Food</span>
          </div>

          <div className="mt-4">
            <h6>Product Details:</h6>
            <p className="text-muted">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
        <h4 className="mb-4">Related products</h4>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          loop={true}
        >
          {relatedProducts.map((rp) => (
            <SwiperSlide key={rp.id}>
              <div className="card h-100 text-center d-flex flex-column">
                <img
                  src={rp.img}
                  alt={rp.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-success">{rp.price}</h6>
                    {rp.oldPrice && (
                      <small className="text-muted text-decoration-line-through">
                        {rp.oldPrice}
                      </small>
                    )}
                    <p className="mb-1">{rp.name}</p>
                  </div>
                  <button className="btn btn-outline-success btn-sm mt-2">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
