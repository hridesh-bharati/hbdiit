import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const testimonials = [
  {
    name: "Rohit Sharma",
    img: "images/testimonial/testimonial1.jpg",
    text: "Drishtee Computer Center transformed my understanding of technology—top-notch training and hands-on support every step of the way."
  },
  {
    name: "Priya Singh",
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial2.jpg",
    text: "The expert guidance and practical approach here gave me the confidence to tackle complex computer problems with ease."
  },
  {
    name: "Neha Patel",
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    text: "I appreciated the personalized coaching and up-to-date resources. Drishtee truly prepares you for the real world of technology."
  },
  {
    name: "Amit Verma",
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial4.jpg",
    text: "From basic skills to advanced concepts, the team at Drishtee helped me grow my knowledge and problem-solving skills exponentially."
  } 
];

const getSlidesToShow = () => {
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};

const Testimonials = () => {
  const [centerIdx, setCenterIdx] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [carouselDirection, setCarouselDirection] = useState("next"); // for animation
  const intervalRef = useRef();

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => handleNext(), 2000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [centerIdx, slidesToShow]);
  
  const handlePrev = () => {
    setCarouselDirection("prev");
    setCenterIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselDirection("next");
    setCenterIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handleDot = (idx) => {
    setCarouselDirection(idx > centerIdx ? "next" : "prev");
    setCenterIdx(idx);
  };

  const getVisibleTestimonials = () => {
    const slides = [];
    let start =
      centerIdx - Math.floor(slidesToShow / 2) < 0
        ? testimonials.length + (centerIdx - Math.floor(slidesToShow / 2))
        : centerIdx - Math.floor(slidesToShow / 2);
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(testimonials[(start + i) % testimonials.length]);
    }
    return slides;
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Bootstrap carousel animation classes
  // We'll animate the whole testimonial row container
  const animationClass =
    carouselDirection === "next"
      ? "carousel slide carousel-fade animate-next"
      : "carousel slide carousel-fade animate-prev";

  return (
    <section className="testimonials py-5 bg-light" id="TestimonialParent">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Testimonials</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center position-relative" id="TestimonialChild">
          <button
            className="btn btn-outline-primary rounded-circle me-2"
            style={{ width: 44, height: 44, zIndex: 2 }}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div
            className={`d-flex overflow-hidden flex-grow-1 py-1 justify-content-center align-items-center ${animationClass}`}
            style={{ maxWidth: "100%", minHeight: 320 }}
            key={centerIdx + "-" + slidesToShow} 
          >
            {visibleTestimonials.map((testimonial, idx) => {
              const isCenter = idx === Math.floor(slidesToShow / 2);
              return (
                <div
                  key={testimonial.name + idx}
                  className={`testimonial-item text-center px-3`}
                  style={{
                    flex: `0 0 ${100 / slidesToShow}%`,
                    maxWidth: `${100 / slidesToShow}%`,
                    transform: `scale(${isCenter ? 1 : 0.85})`,
                    opacity: isCenter ? 1 : 0.4,
                    transition: "transform 0.6s ease, opacity 0.6s ease"
                  }}
                >
                  <div className="shadow-effect bg-white p-4 rounded shadow-sm">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: 80, height: 80, objectFit: "cover" }}
                    />
                    <p className="mb-2">{testimonial.text}</p>
                    <div className="testimonial-name bg-primary text-white rounded-pill py-1 px-3 d-inline-block mt-2">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-outline-primary rounded-circle ms-2"
            style={{ width: 44, height: 44, zIndex: 2 }}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`rounded-circle border-0 mx-1 ${
                centerIdx === idx ? "bg-primary" : "bg-secondary"
              }`}
              style={{
                width: 14,
                height: 14,
                opacity: centerIdx === idx ? 1 : 0.4
              }}
              onClick={() => handleDot(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        .animate-next {
          animation: carouselNext 0.6s;
        }
        .animate-prev {
          animation: carouselPrev 0.6s;
        }
        @keyframes carouselNext {
          0% { opacity: 0; transform: translateX(50px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        @keyframes carouselPrev {
          0% { opacity: 0; transform: translateX(-50px);}
          100% { opacity: 1; transform: translateX(0);}
        }

        /* Dark mode for testimonial section */
        .dark-mode #TestimonialParent {
          background: #23293a !important;
          color: #f1f1f1;
          transition: background 0.3s;
        }
        .dark-mode #TestimonialChild {
          background: #273043 !important;
        }
        .dark-mode #TestimonialParent .shadow-effect {
          background: #181c22 !important;
          color: #f1f1f1;
        }
        .dark-mode #TestimonialParent .testimonial-name {
          background: #ffe066 !important;
          color: #23293a !important;
        }
        .dark-mode #TestimonialParent .bg-primary {
          background-color: #ffe066!important;
          color: #23293a!important;
        }
        .dark-mode #TestimonialParent .bg-secondary {
          background-color: #bdbdbd!important;
        }
        .dark-mode #TestimonialParent .text-white {
          color: #23293a!important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;