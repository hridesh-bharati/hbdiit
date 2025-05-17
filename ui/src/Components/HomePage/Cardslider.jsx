import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CardSlider() {
    const x = `images/thumbnails`
    const slides = [
        `${x}/dtp.png`,
        `${x}/bootstrap.png`,
        `${x}/c2-lang.png`,
        `${x}/funda.png`,
        `${x}/ms_office.png`,
        `${x}/dtp.png`,
        `${x}/bootstrap.png`,
        `${x}/c2-lang.png`,
        `${x}/funda.png`,
    ];

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <Swiper
                className="py-5"
                style={{ height: "100%", width: "100%" }}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={7}
                slidesPerGroup={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                spaceBetween={10}
                centeredSlides={false}
                watchSlidesProgress={true}
                grabCursor={true}
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index} className="swiper-slide-custom p-3">
                        <img src={src} alt={`Slide ${index + 1}`} className="slide-image img-fluid" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                .swiper-slide-custom {
                    width: 210px !important;
                    height: 130px !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }

                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .swiper-pagination-bullet {
                    width: 15px !important;
                    height: 6px !important;
                    border-radius: 9px !important;
                    background: #001297 !important;
                }
            `}</style>
        </div>
    );
}
