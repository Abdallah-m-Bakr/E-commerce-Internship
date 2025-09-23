import Google_Play from "../../assets/images/Google_Play.svg";
import app_store from "../../assets/images/app-store.svg";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function Footer() {
  const {t,i18n}=useTranslation();
  useEffect(() => {
    // i18n.changeLanguage('ar'); 
  },[i18n])
  return (
    <footer className="pt-5 border-top">
      <div className="container">
        {/* Top Features */}
        <div className="row text-center mb-4 border-bottom pb-3">
          <div className="col-md-3 col-6 mb-3 h6">
            <i className="fa fa-leaf me-2"></i>
            {t("Everyday fresh products")}
          </div>
          <div className="col-md-3 col-6 mb-3 h6">
            <i className="fa fa-truck me-2"></i>
            {t("Free delivery for order over $70")}
          </div>
          <div className="col-md-3 col-6 mb-3 h6">
            <i className="fa fa-bolt me-2"></i>
            {t("Daily Mega Discounts")}
          </div>
          <div className="col-md-3 col-6 mb-3 h6">
            <i className="fa fa-dollar-sign me-2"></i>
            {t("Best price on the market")}
          </div>
        </div>

        {/* Links */}
        <div className="row text-start">
          <div className="col-md-2 col-6 mb-4">
            <h6>FRUIT & VEGETABLES</h6>
            <ul className="list-unstyled">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h6>BREAKFAST & DAIRY</h6>
            <ul className="list-unstyled">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Cheese</li>
              <li>Eggs Substitutes</li>
              <li>Honey</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Yogurt</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h6>MEAT & SEAFOOD</h6>
            <ul className="list-unstyled">
              <li>Breakfast Sausage</li>
              <li>Dinner Sausage</li>
              <li>Beef</li>
              <li>Chicken</li>
              <li>Sliced Deli Meat</li>
              <li>Shrimp</li>
              <li>Wild Caught Fillets</li>
              <li>Crab and Shellfish</li>
              <li>Farm Raised Fillets</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h6>BEVERAGES</h6>
            <ul className="list-unstyled">
              <li>Water</li>
              <li>Sparkling Water</li>
              <li>Soda & Pop</li>
              <li>Coffee</li>
              <li>Milk & Plant-Based Milk</li>
              <li>Tea & Kombucha</li>
              <li>Drink Boxes & Pouches</li>
              <li>Craft Beer</li>
              <li>Wine</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <h6>BREADS & BAKERY</h6>
            <ul className="list-unstyled">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Cheese</li>
              <li>Eggs Substitutes</li>
              <li>Honey</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Yogurt</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="row border-top pt-4 mt-4 align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3">
            <i className="fa fa-phone me-2"></i>
            <strong className="h5">8 800 555-55-55</strong>
            <div className="small h6">{t("Working 8:00 - 22:00")}</div>
          </div>
          <div className="col-md-4 text-center mb-3">
            <span className="me-2">{t("Download App on Mobile :")}</span>
            <img
              src={Google_Play}
              alt="Google Play"
              height="36"
              className="me-2"
            />
            <img
              src={app_store}
              alt="App Store"
              height="36"
            />
            <div className="small">{t("15% discount on your first purchase")}</div>
          </div>
          <div className="col-md-4 text-center text-md-end mb-3 icons-footer">
            <a href="#" className="me-3 icon-social-media">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-3 icon-social-media">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-3 icon-social-media">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="row border-top pt-3 mt-3 small">
          <div className="col-md-6 text-center text-md-start mb-2 h6">
            {t("© 2025 All rights reserved by Blackrise Theme")}
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="me-3 h6">{t("Privacy Policy")}</span>
            <span className="me-3 h6">{t("Terms and Conditions")}</span>
            <span className="me-3 h5">{t("Cookie")}</span>
            <i className="fab fa-cc-visa me-2 h4"></i>
            <i className="fab fa-cc-mastercard me-2 h4"></i>
            <i className="fab fa-cc-paypal me-2 h4"></i>
            <i className="fab fa-cc-stripe h4"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
