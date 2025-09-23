import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";


import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";


export default function Slider() {
    const { homeProducts } = useContext(HomeContext);

  return (
    <div className="categories-wrapper container my-5">
      <div className="categories-box position-relative p-3 rounded-3">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5.25}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {homeProducts.slice(20,30).map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="cat-card text-center">
                <div className="img-wrap">
                  <img src={cat.images} alt={cat.title} />
                </div>
                <div className="cat-info">
                  <h6 className="cat-title">{cat.title}</h6>
                  <p className="cat-items">{cat.stock} items</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
