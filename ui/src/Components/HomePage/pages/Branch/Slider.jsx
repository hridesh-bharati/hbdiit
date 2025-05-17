import React from 'react';

export default function Slider() {
    const carouselItems = [
        { src: './images/vender/d2.jpg', alt: 'DIIT' },
        { src: './images/vender/d1.jpg', alt: 'DIIT' },
    ];

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1000">
                        <img src={item.src} className="d-block w-100 img-fluid h-100" alt={item.alt} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
        </div>
    );
}
