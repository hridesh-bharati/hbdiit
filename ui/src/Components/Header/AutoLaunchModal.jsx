import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modal from "bootstrap/js/dist/modal";

const WelcomeModal = () => {
useEffect(() => {
  const modalElement = document.getElementById("drishteeWelcomeModal");
  if (modalElement) {
    const modal = new Modal(modalElement);
    modal.show();

    const timer = setTimeout(() => {
      modal.hide();
    }, 5000);

    return () => clearTimeout(timer); 
  }
}, []);


  const textStyles = {
    title: { fontSize: "12px" },
    description: { fontSize: "11px" },
    footerNote: { fontSize: "10px" },
  };

  return (
    <div
      className="modal fade"
      id="drishteeWelcomeModal"
      tabIndex="-1"
      aria-labelledby="welcomeModalLabel"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <div className="modal-dialog modal-floating-card">
        <div className="modal-content modal-small-card">
          
          {/* Header */}
          <div className="modal-header bg-gradient-primary text-white py-2 px-3 d-flex align-items-center gap-2">
            <img
              src="images/icon/logo.png"
              alt="Drishtee Logo"
              style={{ width: "24px", height: "24px" }}
            />
            <h6 className="modal-title mb-0" id="welcomeModalLabel">
              Welcome to Drishtee
            </h6>
            <button
              type="button"
              className="btn-close btn-close-white ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ fontSize: "0.75rem" }}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body p-2 text-center small">
            <p className="fw-bold text-dark mb-1" style={textStyles.title}>
              📚 Skill-based Courses for a Bright Future
            </p>
            <p className="text-muted mb-2" style={textStyles.description}>
              Join 10,000+ learners mastering{" "}
              <strong>CCC</strong>, <strong>Tally</strong>, <strong>Typing</strong>, <strong>Programming</strong> & more.
            </p>
            <Link
              to="/Contact-Us"
              className="btn btn-sm btn-success rounded-pill px-3 mb-2"
            >
              Enquiey now
            </Link>
            <hr className="my-2" />
            <p className="text-muted mb-0" style={textStyles.footerNote}>
              ✅ Govt. Recognized | 💼 Practical Training
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .modal-floating-card {
          position: fixed;
          bottom: 10px;
          left: 10px;
          z-index: 1080;
          max-width: 190px;
          animation: slideInLeft 0.6s ease forwards;
        }

        .modal-small-card {
          border-radius: 1rem;
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          background-color: #fff;
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd, #6610f2);
        }
      `}</style>
    </div>
  );
};

export default WelcomeModal;
