import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img from "../../assets/images/img1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const categories = [
  { id: 1, name: "Beverages", items: "11 Items", img },
  { id: 2, name: "Biscuits & Snacks", items: "6 Items", img },
  { id: 3, name: "Breads & Bakery", items: "6 Items", img },
  { id: 4, name: "Breakfast & Dairy", items: "8 Items", img },
  { id: 5, name: "Frozen Foods", items: "7 Items", img },
  { id: 6, name: "Frozen Foods", items: "7 Items", img },
];

export default function Slider() {
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
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="cat-card text-center">
                <div className="img-wrap">
                  <img src={cat.img} alt={cat.name} />
                </div>
                <div className="cat-info">
                  <h6 className="cat-title">{cat.name}</h6>
                  <p className="cat-items">{cat.items}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
