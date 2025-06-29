import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Team = () => {
  const tpath = "images/team/team";

  const [hrideshData, setHrideshData] = useState({
    name: "Hridesh Rao",
    bio: "Frontend & MERN Stack Developer",
    image: "",
    repos: 0,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/hridesh-bharati")
      .then((res) => res.json())
      .then((data) => {
        setHrideshData({
          name: data.name || "Hridesh Rao",
          bio: data.bio || "Frontend & MERN Stack Developer",
          image: data.avatar_url || "",
          repos: data.public_repos || 0,
        });
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  const expertData = [
    {
      name: "Mr. Ajay Tiwari",
      role: "Director",
      bio: "Founder of DIIT with 20+ years of experience in IT and education. Leading with vision and passion.",
      image: `${tpath}1.png`,
      badges: ["🎓 Education Expert", "🥇 Top Mentor"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/ajaytiwari",
        github: "https://github.com/ajaytiwari",
        phone: "tel:+919876543210",
      },
    },
    {
      name: "Santosh Chauhan",
      role: "Center Head",
      bio: "Handles administrative operations, student support, and strategic decisions with utmost dedication.",
      image: `${tpath}2.png`,
      badges: ["🎯 Management Pro"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/santoshchauhan",
        github: "https://github.com/santoshchauhan",
        phone: "tel:+919812345678",
      },
    },
    {
      name: "Manjesh Vishwakarma",
      role: "Senior Accounts Executive",
      bio: "Specialist in digital finance, business accounting, and official documentation with a strong focus on accuracy and compliance.",
      image: `${tpath}3.png`,
      badges: ["📈 Financial Compliance"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/manjeshvishwakarma",
        github: "https://github.com/manjeshvishwakarma",
        phone: "tel:+918123456789",
      },
    },
    {
      name: hrideshData.name,
      role: "Technical Instructor & Lab Coordinator",
      bio: hrideshData.bio,
      image: hrideshData.image,
      repoCount: hrideshData.repos,
      badges: [
        "🚀 MERN Specialist",
        ...(hrideshData.repos >= 100
          ? ["🏆 GitHub Legend"]
          : hrideshData.repos >= 50
            ? ["🌟 GitHub Master"]
            : hrideshData.repos >= 20
              ? ["⭐ Star Developer"]
              : []),
      ],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hridesh-bharati-95867425b/",
        github: "https://github.com/hridesh-bharati",
        phone: "tel:+917267995307",
      },
    },
  ];

  const socialIcons = {
    phone: "bi-telephone-fill",
    linkedin: "bi-linkedin",
    twitter: "bi-twitter",
    github: "bi-github",
  };

  return (
    <>
      <style>{`
        #team.dark-mode {
          background: linear-gradient(135deg, #181c22 0%, #23293a 100%) !important;
        }
        .dark-mode .expert-card {
          background: #23293a;
          color: #fff;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.06);
        }
        .dark-mode .expert-name { color: #fff; }
        .dark-mode .expert-role { color: #b1b2ff; }
        .dark-mode .expert-bio { color: #ccc; }
        .dark-mode .badge-tag {
          background: linear-gradient(135deg, #2a2a2a, #333);
          color: #eee;
        }
        .dark-mode .expert-repos .badge {
          background-color: #1e1e1e !important;
        }
        .dark-mode .expert-social a {
          color: #bdbdbd;
        }

        .expert-card {
          position: relative;
          background: linear-gradient(135deg, #ffffffee, #f9f9f9);
          border-radius: 1rem;
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          padding: 12px 1.5rem;
          text-align: center;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: visible;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .expert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
        }
        .expert-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 10px;
          width: 100%;
          background: linear-gradient(90deg, #0d6efd, #6f42c1);
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .expert-avatar-wrapper {
          position: absolute;
          top: -60px;
          width: 118px;
          height: 118px;
          border-radius: 50%;
          padding: 4px;
           background: linear-gradient(90deg, #30cfd0 0%, #330867 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expert-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          background: #f4f4f4;
          border: 4px solid #fff;
        }
        .expert-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 65px;
          color: #222;
        }
        .expert-role {
          color: #6f42c1;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .expert-bio {
          font-size: 0.9rem;
          color: #444;
          margin: 0.5rem 0 0.8rem;
          padding: 0 0.6rem;
          line-height: 1.4;
        }
        .badge-tag {
          background: linear-gradient(135deg, #f0f0f0, #ffffff);
          color: #333;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.35em 0.7em;
          border-radius: 999px;
          margin: 3px;
          display: inline-block;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .expert-repos .badge {
          background-color: #343a40 !important;
          font-size: 0.75rem;
        }
        .expert-social a[title="Linkedin"] { color: #0077b5; }
        .expert-social a[title="Twitter"] { color: #1da1f2; }
        .expert-social a[title="Github"] { color: #24292e; }
        .expert-social a[title="Phone"] { color: #0d6efd; }
        .text-gradient {
          background: linear-gradient(45deg, #0d6efd, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section className="py-4" id="team">
        <div className="container-fluid">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: 600, margin: "auto" }}>
              Passionate educators and professionals shaping the future of tech and business education.
            </p>
          </div>

          <div className="row g-4">
            {expertData.map(({ name, role, bio, image, socialLinks, repoCount, badges }) => (
              <div className="col-12 col-sm-6 col-lg-3 my-5" key={name}>
                <div className="expert-card">
                  <div className="expert-avatar-wrapper">
                    <img src={image} alt={name} className="expert-avatar" loading="lazy" />
                  </div>

                  <div className="expert-name">{name}</div>
                  <div className="expert-role">{role}</div>

                  {badges?.length > 0 && (
                    <div className="d-flex flex-wrap justify-content-center mb-2">
                      {badges.map((badge, idx) => (
                        <span key={idx} className="badge-tag">{badge}</span>
                      ))}
                    </div>
                  )}

                  <div className="expert-bio">{bio}</div>

                  {typeof repoCount === "number" && (
                    <div className="expert-repos">
                      <span className="badge bg-dark">
                        <i className="bi bi-journal-code me-1" />
                        {repoCount} Public GitHub Repos
                      </span>
                    </div>
                  )}

                  <div className="expert-social mt-3">
                    {Object.entries(socialLinks).map(([key, url]) => {
                      if (!url) return null;
                      const isPhone = key === "phone";
                      return (
                        <a
                          key={key}
                          href={url}
                          target={isPhone ? undefined : "_blank"}
                          rel={isPhone ? undefined : "noopener noreferrer"}
                          className="m-2 fs-4"
                          title={key.charAt(0).toUpperCase() + key.slice(1)}
                        >
                          <i className={`bi ${socialIcons[key]}`}></i>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
