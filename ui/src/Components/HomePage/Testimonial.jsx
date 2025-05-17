import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "This computer center has helped me improve my coding skills immensely. The instructors are very knowledgeable!",
    course: "Full Stack Web Development",
  },
  {
    name: "Anjali Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "I learned so much about programming here. The practical approach and real-world projects made learning fun!",
    course: "Python for Beginners",
  },
  {
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    feedback:
      "Great environment and excellent faculty! The hands-on exercises really made a difference in my learning experience.",
    course: "Data Science & AI",
  },
];

const Testimonials = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-5 fw-bold text-uppercase text-primary">What Our Students Say</h2>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4 rounded-4 text-center bg-light">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle p-1"
                  style={{
                    // background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    background:   "linear-gradient(45deg, #30cfd0, #330867)",
                    padding: "5px",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle border border-4 border-white"
                    width="100"
                    height="100"
                  />
                </div>
                <h5 className="fw-bold text-dark mt-3 mb-1">{testimonial.name}</h5>
                <span className="text-primary fw-semibold mb-3">{testimonial.course}</span>
              </div>
              <p className="text-muted fst-italic border-start border-4 border-primary ps-3">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
