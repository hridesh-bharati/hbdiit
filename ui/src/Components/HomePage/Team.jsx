import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpertTeam = () => {
    const team = `images/team/team`;

    // Expert Data
    const expertData = [
        {
            name: "Mr. Ajay Tiwari",
            role: "Owner of DIIT",
            image: `${team}1.png`,
            bio: "Founder of DIIT, with 20+ years of experience in education and IT training.",
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
        {
            name: "Santosh Chauhan",
            role: "Manager",
            image: `${team}2.png`,
            bio: "Oversees operations and management at DIIT, ensuring a smooth learning experience.",
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
        {
            name: "Manjesh Vishwakarma",
            role: "Teacher",
            image: `${team}3.png`,
            bio: "Expert in JavaScript and full-stack development, passionate about teaching.",
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
        {
            name: "Hridesh Bharati",
            role: "Teacher",
            image: `${team}4.jpg`,
            bio: "Frontend & MERN Stack developer with a passion for building interactive web apps.",
            linkedin: "#",
            twitter: "#",
            github: "https://github.com/hridesh-bharati",
        },
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h2
                    className="fw-bold d-inline-block px-4 py-2 position-relative"
                    style={{
                        background: "linear-gradient(45deg, #30cfd0, #330867)",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "28px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}>
                    <i className="bi bi-people-fill me-2"></i>
                    Expert Instructors
                </h2>
            </div>

            <div className="row">
                {expertData.map((expert, index) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={index}>
                        <div className="card shadow shadow-sm border-0 shadow shadow-sm p-3 m-1 text-center" style={{ borderRadius: "15px", height: "300px" }}>
                            <img
                                src={expert.image}
                                className="rounded-circle mx-auto border"
                                alt={expert.name}
                                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="fw-bold text-primary">{expert.name}</h5>
                                <p className="text-muted">{expert.role}</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href={expert.linkedin} className="text-primary fs-5">
                                        <i className="bi bi-telephone-fill"></i>
                                    </a>
                                    <a href={expert.linkedin} className="text-primary fs-5">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href={expert.twitter} className="text-success fs-5">
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                    <a href={expert.github} className="text-dark fs-5">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertTeam;
