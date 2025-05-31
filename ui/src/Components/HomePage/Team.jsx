import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Add 'team' as id to main section for DarkMode targeting
const ExpertTeam = () => {
  const tpath = "images/team/team";
  const expertData = [
    {
      name: "Mr. Ajay Tiwari",
      role: "Owner of DIIT",
      bio: "Founder of DIIT, with 20+ years of experience in education and IT training.",
      image: `${tpath}1.png`,
      socialLinks: {
        linkedin: "https://linkedin.com/in/ajaytiwari",
        twitter: "https://twitter.com/ajaytiwari",
        github: "https://github.com/ajaytiwari",
        phone: "tel:+919876543210",
      },
    },
    {
      name: "Santosh Chauhan",
      role: "Manager",
      bio: "Oversees operations and management at DIIT, ensuring a smooth learning experience.",
      image: `${tpath}2.png`,
      socialLinks: {
        linkedin: "https://linkedin.com/in/santoshchauhan",
        twitter: "https://twitter.com/santoshchauhan",
        github: "https://github.com/ajaytiwari",
        phone: "tel:+919812345678",
      },
    },
    {
      name: "Manjesh Vishwakarma",
      role: "Teacher",
      bio: "Expert in JavaScript and full-stack development, passionate about teaching.",
      image: `${tpath}3.png`,
      socialLinks: {
        linkedin: "https://linkedin.com/in/ajaytiwari",
        twitter: "https://twitter.com/ajaytiwari",
        github: "https://github.com/ajaytiwari",
        phone: "tel:+919876543210",
      },
    },
    {
      name: "Hridesh Bharati",
      role: "Teacher (Web Developer)",
      bio: "Frontend & MERN Stack developer with a passion for building interactive web apps.",
      image: `${tpath}4.jpg`,
      socialLinks: {
        linkedin: "https://linkedin.com/in/ajaytiwari",
        twitter: "https://twitter.com/ajaytiwari",
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

  const socialColors = {
    phone: "#0d6efd",
    linkedin: "#0077b5",
    twitter: "#1da1f2",
    github: "#333",
  };

  return (
    <>
      <style>{`
        .alu-bg {
          background: linear-gradient(135deg, #f5f6fa 0%, #e3e6ec 100%);
        }
        .alu-title {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          color:rgb(39, 39, 39);
          margin-bottom: 1.5rem;
        }
        .alu-highlight {
          color: #6741d9;
          background: linear-gradient(90deg, #ffe66d 0%, #b1b2ff 100%);
          padding: 0.1em 0.5em;
          border-radius: 0.5em;
          margin-left: 0.4em;
        }
        .alu-card {
          background: #fff;
          border-radius: 2.2rem;
          box-shadow: 0 12px 48px 0 rgba(44, 62, 80, 0.14);
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
          border: none;
          position: relative;
          padding: 3rem 2rem 2rem 2rem;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .alu-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 9px;
          background: linear-gradient(90deg, #30cfd0 0%, #330867 100%);
        }
        .alu-card:hover {
          transform: translateY(-8px) scale(1.045);
          box-shadow: 0 16px 48px 0 rgba(44, 62, 80, 0.18);
          z-index: 2;
        }
        .alu-avatar-wrapper {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          overflow: hidden;
          background: #e3e6ec;
          margin: -84px auto 0 auto;
          border: 5px solid #fff;
          box-shadow: 0 4px 16px rgba(44,62,80,0.09);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .alu-avatar {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .alu-name {
          font-size: 1.45rem;
          font-weight: 700;
          color: #2e3168;
          margin-bottom: 0.25rem;
          margin-top: 1.4rem;
        }
        .alu-role {
          color: #6741d9;
          font-size: 1.13rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .alu-bio {
          color: #6c757d;
          font-size: 1.04rem;
          min-height: 66px;
          margin-bottom: 1.3rem;
        }
        .alu-social {
          margin-top: 0.7rem;
          display: flex;
          justify-content: center;
          gap: 1.6rem;
        }
        .alu-social-link {
          font-size: 1.5rem;
          color: #adb5bd;
          transition: color 0.22s;
        }
        .alu-social-link:hover {
          color: #ff4081 !important;
        }
        @media (max-width: 991px) {
          .alu-card { min-height: 490px; }
        }
        @media (max-width: 767px) {
          .alu-title { font-size: 1.3rem; }
          .alu-card {
            padding: 2rem 1rem 1.5rem 1rem;
            min-height: 420px;
          }
          .alu-avatar-wrapper {
            width: 100px;
            height: 100px;
            margin-top: -62px;
          }
        }
        /* Dark mode styles */
        .dark-mode .alu-bg,
        #team.dark-mode,
        .dark-mode #team {
          background: linear-gradient(135deg, #181c22 0%, #23293a 100%) !important;
        }
        .dark-mode .alu-title,
        #team.dark-mode .alu-title,
        .dark-mode #team .alu-title {
          color: #fff;
        }
        .dark-mode .alu-highlight,
        #team.dark-mode .alu-highlight,
        .dark-mode #team .alu-highlight {
          color: #ffd700;
          background: linear-gradient(90deg, #3a3d4d 0%, #181c22 100%);
        }
        .dark-mode .alu-card,
        #team.dark-mode .alu-card,
        .dark-mode #team .alu-card {
          background: #23293a;
          box-shadow: 0 12px 48px 0 rgba(13, 17, 23, 0.24);
        }
        .dark-mode .alu-card::before,
        #team.dark-mode .alu-card::before,
        .dark-mode #team .alu-card::before {
          background: linear-gradient(90deg, #2a5298 0%, #1e3c72 100%);
        }
        .dark-mode .alu-avatar-wrapper,
        #team.dark-mode .alu-avatar-wrapper,
        .dark-mode #team .alu-avatar-wrapper {
          background: #31394b;
          border: 5px solid #23293a;
        }
        .dark-mode .alu-name,
        #team.dark-mode .alu-name,
        .dark-mode #team .alu-name {
          color: #fff;
        }
        .dark-mode .alu-role,
        #team.dark-mode .alu-role,
        .dark-mode #team .alu-role {
          color: #b1b2ff;
        }
        .dark-mode .alu-bio,
        #team.dark-mode .alu-bio,
        .dark-mode #team .alu-bio {
          color: #bdbdbd;
        }
        .dark-mode .alu-social-link,
        #team.dark-mode .alu-social-link,
        .dark-mode #team .alu-social-link {
          color: #adb5bd;
        }
        .dark-mode .alu-social-link:hover,
        #team.dark-mode .alu-social-link:hover,
        .dark-mode #team .alu-social-link:hover {
          color: #ffd700 !important;
        }
        /* Optional: container dark bg */
        .dark-mode .team-container,
        #team.dark-mode .team-container,
        .dark-mode #team .team-container {
          background: #23293a;
          border-radius: 1rem;
          transition: background 0.3s;
        }
      `}</style>
      {/* Add id="team" for DarkMode util and dark-mode class support */}
      <section className="alu-bg py-1 " id="team">
        <div className="container-fluid my-5 team-container">
          <div className="text-center py-4 mb-3">
            <span className="alu-title">
              Meet Our <span className="alu-highlight">Expert Team</span>
            </span>
            <p className="text-primary mt-4 mb-0" style={{ maxWidth: 540, margin: "0 auto" }}>
              Dedicated instructors with years of experience in teaching and technology, committed to your growth.
            </p>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            {expertData.map(({ name, role, bio, image, socialLinks }) => (
              <div className="col-12 col-sm-6 col-lg-3 d-flex" key={name}>
                <div className="alu-card w-100 text-center shadow-lg">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center h-100 w-100 p-0 mt-1">
                    <div className="alu-avatar-wrapper">
                      <img
                        src={image}
                        alt={`Portrait of ${name}`}
                        className="alu-avatar"
                        loading="lazy"
                      />
                    </div>
                    <div className="alu-name">{name}</div>
                    <div className="alu-role">{role}</div>
                    <div className="alu-bio">{bio}</div>
                    <div className="alu-social">
                      {Object.entries(socialLinks).map(([key, url]) => {
                        if (!url || url === "#") return null;
                        const isPhone = key === "phone";
                        return (
                          <a
                            key={key}
                            href={url}
                            target={isPhone ? undefined : "_blank"}
                            rel={isPhone ? undefined : "noopener noreferrer"}
                            aria-label={key}
                            title={key.charAt(0).toUpperCase() + key.slice(1)}
                            className="alu-social-link"
                            style={{
                              color: socialColors[key] || "#adb5bd",
                            }}
                          >
                            <i className={`bi ${socialIcons[key]}`}></i>
                          </a>
                        );
                      })}
                    </div>
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

export default ExpertTeam;