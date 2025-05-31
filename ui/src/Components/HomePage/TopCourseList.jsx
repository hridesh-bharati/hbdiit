import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const images = [
  { id: 1, src: "images/course/oLevel.png", desc: "O-Level Computer Course" },
  { id: 2, src: "images/course/ccc.png", desc: "CCC Certification Course" },
  { id: 3, src: "images/course/software.png", desc: "Software Development Fundamentals" },
  { id: 4, src: "images/course/reactJs.png", title: "Course 4", desc: "React.js for Frontend Development" },
  { id: 5, src: "images/course/python.png", desc: "Python Programming Essentials" },
  { id: 6, src: "images/course/mongo.png", desc: "MongoDB for Beginners" },
  { id: 7, src: "images/course/iot.png", desc: "Introduction to IoT" },
  { id: 8, src: "images/course/tally.png", desc: "Tally ERP Accounting" },
];

export default function TopCourseList() {

  return (
    <div className=" container-fluid m-auto py-5 text-center">
      <h2 className="text-center mb-4 fw-bold text-primary">Top course list</h2>
      <div className="row d-flex w-100 m-auto justify-content-center">
        {images.map((image) => (
          <div key={image.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card shadow-lg border-0 m-2 rounded-lg overflow-hidden">
              <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="img-fluid"
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </div>
              <div className="card-body text-center bg-light pb-2">
                <p className="card-text text-muted small">{image.desc}</p>
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-play-circle me-1"></i> Start Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
