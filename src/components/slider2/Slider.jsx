import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HomeContext } from "../../context/HomeContext";
import { useEffect ,useContext } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";
import { useTranslation } from "react-i18next";

export default function Slider() {
    const { homeProducts } = useContext(HomeContext);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    // i18n.changeLanguage("ar");
  }, [i18n]);
  return (
    <div className="categories-wrapper container my-5">
      <div className="categories-box position-relative p-3 rounded-3">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {homeProducts.slice(14,24).map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="cat-card card">
                <div className="img-wrap">
                  <img src={cat.images} alt={cat.title} />
                </div>
                <span>{cat.title}</span>
                <span id="sp-1" className="text-success">{cat.stock}. {t("IN STOCK")} </span>
                <span>{cat.reviews.length}{t("1 review")} </span>
                <div>
                  {/* <span id="sp-2" className="text-decoration-line-through">${(cat.price/(1-(cat.discountPercentage)/100)).toFixed(2)} </span>  */}
                  <span id="sp-3" className="text-danger">${cat.price}</span>
                </div>
                <div className="cat-info">
                <button type="button" id="btn" className="btn btn-warning">{t("Add to cart")}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
