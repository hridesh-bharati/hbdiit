import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const certificates = [
    {
        title: 'ISO 9001:2015',
        image: 'images/thumbnails/Certificate1.png',
    },
    {
        title: 'CE Certification',
        image: 'images/thumbnails/Certificate2.png',
    },
    {
        title: 'FDA Approved',
        image: 'images/thumbnails/Certificate3.png',
    },
    {
        title: 'Environmental Certificate',
        image: 'images/thumbnails/Certificate4.png',
    },
    {
        title: 'GMP Certified',
        image: 'images/thumbnails/Certificate5.png',
    },
    {
        title: 'ISO 14001',
        image: 'images/thumbnails/Certificate6.png',
    },
];

const SLIDES_VISIBLE = 3;
const SLIDE_INTERVAL = 5000;

const Certificate = () => {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
        AOS.refresh();
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef();
    const intervalRef = useRef();

    // Autoslide
    useEffect(() => {
        intervalRef.current = setInterval(handleNext, SLIDE_INTERVAL);
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line
    }, []);

    // Swipe navigation
    useEffect(() => {
        let startX = null;
        const handleTouchStart = (e) => (startX = e.touches[0].clientX);
        const handleTouchEnd = (e) => {
            if (startX === null) return;
            const delta = e.changedTouches[0].clientX - startX;
            if (Math.abs(delta) > 50) delta < 0 ? handleNext() : handlePrev();
            startX = null;
        };
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const handlePrev = () => {
        setActiveIndex((prev) =>
            prev === 0 ? certificates.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) =>
            (prev + 1) % certificates.length
        );
    };

    const handleSelect = (idx) => {
        setActiveIndex(idx);
    };

    const extendedCertificates = [...certificates, ...certificates.slice(0, SLIDES_VISIBLE)];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 data-aos="fade-up" className="arial-black">
                    Our Authorizations & Certifications
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-muted">
                    We are proud to be recognized by leading global authorities for our commitment to quality, safety, and sustainability.
                </p>
            </div>
            <div className="row">
                <div className="col-5">
                    <img src="images/vender/alp.jpg" className='img-fluid' alt="" />
                </div>

                <div className="col-7">
                    <div className="carousel-wrapper mx-2 position-relative">
                        <div className="carousel-track-container overflow-hidden">
                            <div
                                className="carousel-track d-flex"
                                ref={trackRef}
                                style={{
                                    transform: `translateX(-${activeIndex * (100 / SLIDES_VISIBLE)}%)`,
                                    transition: 'transform 0.6s ease',
                                    width: `${(extendedCertificates.length / SLIDES_VISIBLE) * 100}%`,
                                }}
                            >
                                {extendedCertificates.map((cert, i) => (
                                    <div className="carousel-slide" key={i}>
                                        <div className="card h-100 shadow border-0 mx-2" style={{ minWidth: '100%', maxWidth: '100%' }}>
                                            <div className="bg-light p-3 d-flex align-items-center justify-content-center" style={{ minHeight: 190 }}>
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="img-fluid"
                                                    style={{ maxHeight: 400, objectFit: 'contain' }}
                                                />
                                            </div>
                                            <div className="card-body text-center d-flex flex-column">
                                                <p className="card-title mb-1">{cert.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                      {/* Controls */}
<button
    className="btn btn-outline-primary rounded-circle d-none d-md-flex"
    style={{
        position: 'absolute',
        top: '50%',
        left: '-30px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    }}
    onClick={handlePrev}
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
        zIndex: 2,
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    }}
    onClick={handleNext}
    aria-label="Next"
>
    <i className="bi bi-chevron-right" style={{ fontSize: '1.5rem' }}></i>
</button>

                    </div>

                    {/* Dots */}
                    <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
                        {certificates.map((_, idx) => (
                            <button
                                key={idx}
                                className={`rounded-circle border-0 ${activeIndex % certificates.length === idx ? 'bg-primary' : 'bg-secondary'}`}
                                style={{
                                    width: 12,
                                    height: 12,
                                    opacity: activeIndex % certificates.length === idx ? 1 : 0.4,
                                    border: '1px solid #fff'
                                }}
                                onClick={() => handleSelect(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 rounded-4 shadow bg-primary text-white text-center" data-aos="fade-up" data-aos-delay="400">
                <h4>Why Certifications Matter?</h4>
                <p className="mb-0">
                    Certifications are more than just formalities—they are a testament to our dedication to excellence, customer trust, safety, and environmental stewardship. Each certificate strengthens our reputation and ensures that we deliver products and services that are reliable, safe, and globally accepted.
                </p>
            </div>
            <style>{`
                .carousel-wrapper {
                    position: relative;
                    max-width: 100%;
                    margin: auto;
                }

                .carousel-track-container {
                    width: 100%;
                }

                .carousel-track {
                    display: flex;
                }

                .carousel-slide {
                    flex: 0 0 calc(100% / ${SLIDES_VISIBLE});
                    transition: all 0.5s ease;
                }

                .arial-black {
                    font-family: 'Arial Black', Gadget, sans-serif;
                }
            `}</style>
        </div>
    );
};

export default Certificate;
