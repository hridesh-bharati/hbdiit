import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const certificates = [
  { title: 'ISO 9001:2015', image: 'images/thumbnails/Certificate1.png' },
  { title: 'CE Certification', image: 'images/thumbnails/Certificate2.png' },
];

const SLIDE_INTERVAL = 5000;

const Certificate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(3);
  const intervalRef = useRef();
  // Update slides visible based on window width
  useEffect(() => {
    const updateSlides = () => setSlidesVisible(window.innerWidth < 768 ? 2 : 3);
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Swipe handlers for mobile
  useEffect(() => {
    let startX = null;
    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      if (startX === null) return;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > 50) {
        setActiveIndex((prev) =>
          deltaX < 0 ? (prev + 1) % certificates.length : prev === 0 ? certificates.length - 1 : prev - 1
        );
      }
      startX = null;
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Duplicate slides for smooth looping
  const extended = [...certificates, ...certificates.slice(0, slidesVisible)];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="arial-black">Our Authorizations & Certifications</h1>
        <p className="text-muted">
          We are proud to be recognized by leading global authorities for our commitment to quality, safety, and sustainability.
        </p>
      </div>
      <div className="row">
        <div className="col-md-5 p-3">
          <img src="images/vender/alp.webp" className="img-fluid" alt="Vendor" />
        </div>
        <div className="col-md-7">
          <div className="carousel-wrapper position-relative mx-2">
            <div className="overflow-hidden">
              <div
                className="d-flex"
                style={{
                  width: `${(extended.length / slidesVisible) * 100}%`,
                  transform: `translateX(-${(activeIndex * 100) / slidesVisible}%)`,
                  transition: 'transform 0.6s ease',
                }}
              >
                {extended.map((cert, i) => (
                  <div key={i} style={{ flex: `0 0 calc(100% / ${slidesVisible})`, padding: '0 0.5rem' }}>
                    <div className="card h-100 shadow border-0">
                      <div className="bg-light p-3 d-flex align-items-center justify-content-center" style={{ minHeight: 190 }}>
                        <img src={cert.image} alt={cert.title} className="img-fluid" style={{ maxHeight: 400, objectFit: 'contain' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Controls, visible only on desktop */}
            <button
              className="btn btn-outline-primary rounded-circle d-none d-md-flex"
              style={{
                position: 'absolute',
                top: '50%',
                left: '-30px',
                transform: 'translateY(-50%)',
                width: 40,
                height: 40,
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
              onClick={() =>
                setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
              }
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left" style={{ fontSize: '1.5rem' }}></i>
            </button>
            <button
              className="btn btn-outline-primary rounded-circle d-none d-md-flex"
              style={{
                position: 'absolute',
                top: '50%',
                right: '-30px',
                transform: 'translateY(-50%)',
                width: 40,
                height: 40,
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
              onClick={() => setActiveIndex((prev) => (prev + 1) % certificates.length)}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right" style={{ fontSize: '1.5rem' }}></i>
            </button>
          </div>

          {/* Dots */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-circle border-0 ${activeIndex === idx ? 'bg-primary' : 'bg-secondary'}`}
                style={{
                  width: 12,
                  height: 12,
                  opacity: activeIndex === idx ? 1 : 0.4,
                  border: '1px solid #fff',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 rounded-4 shadow bg-primary text-white text-center">
        <h4>Why Certifications Matter?</h4>
        <p>
          Certifications are more than just formalities—they are a testament to our dedication to excellence, customer trust, safety, and environmental stewardship. Each certificate strengthens our reputation and ensures that we deliver products and services that are reliable, safe, and globally accepted.
        </p>
      </div>

      <style>{`
        .arial-black {
          font-family: 'Arial Black', Gadget, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Certificate;
