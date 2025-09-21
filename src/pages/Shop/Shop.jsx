import "./Shop.css";
import ShopContext from "../../context/ShopContext.jsx";

import  {React,useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

import shop1 from "../../assets/images/shop1.jpeg";

function Shop() {
  const { state, dispatch } = useContext(ShopContext);
  const{t,i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('ar')
  }, []);
  return (
    <div className="container my-5">
      <div className="cont-shop row row-cols-12">
        <div className="check-inputs col-3 p-2">
          <div className="categories mb-5" id="categories">
            <h6 className="fw-bold text-uppercase">{t("product categories")}</h6>
            <div className="cont-input">
              <div className="d-flex gap-3">
                <input type="checkbox" name="shoes" id="shoes" />
                <label htmlFor="shoes">{t("shoes")}</label>
              </div>
            </div>
          </div>
          {/* brands */}
          {/* <div className="brands mb-5" id="brands">
            <h6 className="fw-bold text-uppercase">brands</h6>
            <div className="cont-input d-flex justify-content-between">
              <div className="d-flex gap-3">
                <input type="checkbox" name="puma" id="puma" />
                <label htmlFor="puma">puma</label>
              </div>
              <div>
                (<span id="lengthBrandsInputs">8</span>)
              </div>
            </div>
          </div> */}
          <div className="price mb-5" id="price">
            <h6 className="fw-bold text-uppercase">{t("price")}</h6>
            <div className="cont-input d-flex align-items-end gap-3">
              <div className="from d-flex flex-column">
                <label htmlFor="from">{t("from")}</label>
                <input
                  type="number"
                  name="from"
                  id="from"
                  className="range-price"
                  defaultValue={0}
                  maxLength={5}
                  min={0}
                />
              </div>
              <div>-</div>
              <div className="to d-flex flex-column">
                <label htmlFor="to">{t("to")}</label>
                <input
                  type="number"
                  name="to"
                  id="to"
                  className="range-price"
                  defaultValue={99.99}
                  maxLength={5}
                  max={99999}
                />
              </div>
            </div>
          </div>
          <div className="photo-ad">
            <img src={shop1} alt="photo" className="card-img-top" style={{ height: "400px", objectFit: "contain" }}/>
          </div>
        </div>
        <div className="col-9">
          <div className="hero-shop d-flex justify-content-center align-items-center my-3 p-3">
            <div className="cont-hero-shop d-flex justify-content-center align-items-start flex-column py-5">
              <p className="fs-3">organic products</p>
              <p className="fw-bold fs-3">delivered to <span className="text-success">your home</span></p>
              <p className="text-secondary">delivered nationwide.</p>
            </div>
          </div>
          <div className="product-length-sort rounded my-3 px-4 py-4 d-flex align-items-center justify-content-between">
            <div className="length">{state.products.length} products</div>
            <div className="sort">sort by: <span className="text-dark">aliphabetically, A-Z</span></div>
          </div>
          <div className="row">
            {state.products.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 viewer-blur">
                <div className="card border border-1 h-100">
                  <div className="top-card position-relative">
                    <img src={product.images[0]} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }}/>
                    <div className={product.offer ? "offer position-absolute top-0 left-0 m-2" : "d-none"}>
                      {product.offer}%
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column align-content-between p-3">
                    <div className="d-flex flex-column">
                      <h5 className="card-text">{product.title}</h5>
                      <div className="rate d-flex gap-2">
                        <div className="text-warning">
                          {product.rating}
                          <i className="fas fa-star"></i>
                        </div>
                        <span>{t("1 review")}</span>
                      </div>
                      <div className="offer-price d-flex gap-2">
                        <div className={product.offer ? "before-offer text-decoration-line-through": "d-none"}>
                          ${product.discountPercentage}
                        </div>
                        <div className="after-offer text-danger fs-5 card-text">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-success mt-auto"
                      onClick={
                        () => dispatch({ type: "ADD_TO_CART", payload: product })
                        
                      }
                    >
                      {t("Add to Cart")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;



// npx json-server --watch db.json --port 5000