import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LibraryFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const facilities = [
    {
      title: 'Reading Hall',
      img: 'images/vender/lb.jpg',
      description:
        'A quiet, spacious, and well-lit area dedicated to uninterrupted self-study and reading. Ideal for students preparing for exams.',
    },
    {
      title: 'Cafeteria',
      img: 'images/vender/officed.jpg',
      description:
        'Hygienic and affordable meals, snacks, and beverages served fresh. Perfect for a quick break between classes.',
    },
    {
      title: 'Digital Library',
      img: 'images/vender/digital_library.jpeg',
      description:
        'Access a vast collection of e-books, video lectures, tutorials, and research materials from leading platforms.',
    },
    {
      title: 'Meeting Rooms',
      img: 'images/vender/meeting_hall.jpeg',
      description:
        'Well-equipped spaces for group discussions, online interviews, and collaborative project work with privacy and comfort.',
    },
  ];

  const amenities = [
    "High-speed internet and Wi-Fi connection",
    "Fully air-conditioned environment",
    "Safe and secure with high-tech CCTV surveillance",
    "Uninterrupted power backup",
    "Ergonomic chairs for long study sessions",
    "Relaxation rooms for breaks",
    "Separate dining area",
    "Secure lockers",
    "Free RO water",
    "Stationery supplies (notebooks, pens, etc.)",
    "Clean western bathrooms (separate for boys and girls)",
    "Complimentary newspapers",
    "Ample parking",
    "Modern pantry with microwave, refrigerator, and OTG",
  ];

  return (
    <div className="container-fluid py-5 bg-light">
      {/* Facilities Section */}
      <div className="container py-5">
        <div className="mb-5 text-center" data-aos="fade-down">
          <h1 className="display-4 mb-4 text-primary fw-bolder">Our Facility</h1>
          <p className="mb-0">
            At Drishtee Computer Center, we provide a student-friendly environment equipped with modern amenities
            to ensure optimal learning and comfort. Our mission is to empower students with resources that enhance
            focus, productivity, and well-being.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {facilities.map((facility, index) => (
            <div
              className="col-md-6 col-lg-4 col-xl-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={facility.img}
                  className="card-img-top"
                  alt={facility.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body bg-light">
                  <h5 className="card-title text-primary">{facility.title}</h5>
                  <p className="card-text">{facility.description}</p>
                  <a href="#" className="btn btn-outline-primary w-100">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <a href="#" className="btn btn-primary px-4 py-2">More Services</a>
        </div>
      </div>

      {/* About & Amenities Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <img
              src="images/vender/library2.jpg"
              className="img-fluid rounded"
              alt="Library Interior"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <h2 className="text-primary mb-4">
              Premium Study Lounge with Top-Notch Amenities
            </h2>
            <ul className="list-unstyled">
              {amenities.map((item, index) => (
                <li key={index} className="mb-2" data-aos="fade-up" data-aos-delay={index * 10}>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryFeatures;
