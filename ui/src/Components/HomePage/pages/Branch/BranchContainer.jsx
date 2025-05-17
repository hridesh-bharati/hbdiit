import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function ComputerCenter() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/vender/d1.jpg" className="d-block w-100" alt="Tech 1" />
          </div>
          <div className="carousel-item">
            <img src="images/vender/d2.jpg" className="d-block w-100" alt="Tech 2" />
          </div>
          <div className="carousel-item">
            <img src="images/vender/d3.jpg" className="d-block w-100" alt="Tech 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ComputerCenter;
