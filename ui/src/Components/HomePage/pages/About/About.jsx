import React, { useState, useMemo, useCallback } from "react";
import CounterCard from "./CounterCard";
import Footer from "../../../Footer/Footer";
import { Link } from "react-router-dom";
import Certificate from "./Certificate";

// --- DATA ---
const EST_YEAR = "2004";
const VISION = `Our vision is to improve the youth of rural India, by giving them high-class training atmosphere at a very affordable cost.
We work on the philosophy of “SHINING INDIA”, which can be achieved by developing only rural India.
We are committed to impart quality computer education among the students.`;

const BASIC_INFO = [
  { icon: "images/icon/homeTwo.png", label: "Address", value: "Paragpur Road near Ramharsh inter collage" },
  { icon: "bi bi-map-fill text-success mx-1", label: "City", value: "Nichlaul" },
  { icon: "bi bi-globe-central-south-asia text-success mx-1", label: "District", value: "Maharajganj" },
  { icon: "bi bi-pin-map-fill text-danger mx-1", label: "State", value: "Uttar Pradesh" },
  { icon: "bi bi-journal-text text-primary mx-1", label: "Library", value: "Yes" },
  { icon: "bi bi-journal-text text-primary mx-1", label: "Wify", value: "Yes" },
  { icon: "bi bi-bank2 fw-bold text-success mx-1", label: "Establishment(in year)", value: EST_YEAR }
];

const ACCORDION = [
  {
    id: "collapseOne",
    title: "Our Aim",
    content: "We will provide high and quality education for all very nominal fees to maximize the value of our students, as well as the community we serve in the progress and development of the nation."
  },
  {
    id: "collapseTwo",
    title: "Our Mission 1",
    content: "To be leader in the development of I.T. oriented Quality education and Training and be the Country’s premier organization for examination and certification in the field of IT."
  },
  {
    id: "collapseThree",
    title: "Our Mission 2",
    content: "All the training programs are designed and developed by the team of experts as per the industry input. It is our utmost satisfaction when our student is placed in various companies and firms on completion of his/her."
  },
  {
    id: "collapseFour",
    title: "Our Mission 3",
    content: VISION
  }
];

const DIGITAL_FEATURES = [
  {
    img: "/images/vender/digital.jpg",
    icon: "bi bi-display me-2",
    title: "Digital Board for Classes",
    text: "Interactive smart boards enhance visualization, boost understanding, and make learning engaging."
  },
  {
    img: "/images/vender/onlineclass.jpg",
    icon: "bi bi-code-slash me-2",
    title: "Live Project Training",
    text: "Gain hands-on experience with real-world projects under industry expert guidance."
  },
  {
    img: "/images/vender/teacher.jpg",
    icon: "bi bi-award me-2",
    title: "Certified Trainers",
    text: "Learn from certified professionals with years of real industry experience."
  },
  {
    img: "/images/vender/officed.jpg",
    icon: "bi bi-building-check me-2",
    title: "Real Office Environment",
    text: "Our setup simulates a professional office, preparing students for real work culture."
  },
  {
    img: "/images/vender/placement1.webp",
    icon: "bi bi-briefcase me-2",
    title: "Placement Assistance",
    text: "We support our students with job prep, interview training & hiring partner access."
  },
  {
    img: "/images/vender/gameing.jpg",
    icon: "bi bi-controller me-2",
    title: "Gamified Learning",
    text: "Stay motivated with interactive quizzes, level-based progress, and learning rewards."
  }
];

const LEARNING_ADV = [
  {
    icon: "bi bi-lightbulb fs-1 text-warning mb-3",
    title: "Creative Problem Solving",
    text: "Projects are designed to challenge students and develop real-world problem solving skills."
  },
  {
    icon: "bi bi-people fs-1 text-success mb-3",
    title: "Group Learning",
    text: "Peer-to-peer sessions improve collaboration and boost confidence among students."
  },
  {
    icon: "bi bi-puzzle fs-1 text-danger mb-3",
    title: "Weekly Coding Challenges",
    text: "Keep your skills sharp and compete in fun logic-based competitions every weekend."
  }
];

const IMPACT_STATS = [
  { value: "1500+", color: "text-primary", label: "Students Trained" },
  { value: "95%", color: "text-success", label: "Job Success Rate" },
  { value: "30+", color: "text-warning", label: "Tech Courses" },
  { value: "300+", color: "text-danger", label: "Live Projects Delivered" }
];

// --- COMPONENTS ---
const BasicInfoItem = React.memo(({ item }) => (
  <li className="list-group-item d-flex align-items-center gap-2 ps-2 border-0" data-aos="fade-right" style={{ backgroundColor: "transparent" }}>
    {item.icon.includes("bi") ? <i className={item.icon}></i> : <img src={item.icon} alt="" width="18" height="18" />}
    <span className="fw-semibold text-dark">{item.label}:</span>
    <span className="text-muted">{item.value}</span>
  </li>
));

const AccordionItem = React.memo(({ item, index, active, onClick }) => (
  <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button
        className={`accordion-button rounded-0 ${active === index ? "bg-primary text-white" : "bg-white"}`}
        type="button"
        onClick={() => onClick(index)}
        data-bs-toggle="collapse"
        data-bs-target={`#${item.id}`}
        aria-controls={item.id}
      >
        {item.title}
      </button>
    </h2>
    <div id={item.id} className={`accordion-collapse collapse ${active === index ? "show" : ""}`}>
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

// --- MAIN ---
function About() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordion = useCallback(idx => setActiveAccordion(idx), []);

  // CSS for dark mode is kept DRY and minimal
  const darkCss = `
    .dark-mode #aboutBg { background: #23293a !important; color: #f1f1f1; }
    .dark-mode #dText, .dark-mode .fw-bold.text-primary, .dark-mode .card-title.text-primary, .dark-mode h3.text-primary, .dark-mode h2.text-primary, .dark-mode .text-primary { color: #ffe066 !important; }
    .dark-mode .CeoText { color: #bdbdbd !important; }
    .dark-mode .bg-light, .dark-mode .card.bg-light, .dark-mode .card.bg-transparent, .dark-mode .card { background: #273043 !important; color: #f1f1f1 !important; }
    .dark-mode .card-header, .dark-mode #MyCardBg .card-header { background: #181c22 !important; color: #ffe066 !important; }
    .dark-mode .list-group-item, .dark-mode .basicStuctureShadow { background: transparent !important; color: #bdbdbd !important; }
    .dark-mode .accordion-button { background: #23293a !important; color: #ffe066 !important; }
    .dark-mode .accordion-button.bg-primary { background: #ffe066 !important; color: #23293a !important; }
    .dark-mode .accordion-body { background: #181c22 !important; color: #f1f1f1 !important; }
    .dark-mode .border-0, .dark-mode .shadow, .dark-mode .shadow-sm { background: #273043 !important; }
    .dark-mode .text-muted { color: #bdbdbd !important; }
    .dark-mode .btn-primary, .dark-mode .btn-primary:active, .dark-mode .btn-primary:focus, .dark-mode .btn-primary:hover { background: #ffe066 !important; color: #23293a !important; border: none !important; }
    .dark-mode .btn-lg { background: #ffe066 !important; color: #23293a !important; }
  `;

  // --- JSX ---
  return (
    <div className="mt-4 pt-3">
      <style>{darkCss}</style>
      <div style={{ borderRadius: "0 !important" }}>
        <div className="row m-0 p-0 border-0 shadow-sm" id="aboutBg">
          <div className="col-12 py-2">
            <div className="row">
              <div className="col-md-6 pb-2" data-aos="zoom-in" data-aos-duration="700">
                <img src="images/vender/homepic.png" className="w-100 p-0 m-0 border border-0" alt="DIIT" />
              </div>
              <div className="col-md-6 px-4" data-aos="zoom-in" data-aos-duration="700">
                <h3 className="pt-1 fw-bolder" id="dText">Drishtee Institute Information Of Technology</h3>
                <small style={{ color: "green" }}>A Complete I.T. Institute.</small>
                <p className="CeoText" data-aos="zoom-in" data-aos-duration="900">
                  <span className="text-danger">Drishtee Institute Of Information Technology </span> In
                  Nichlaul Is One Of The Leading Businesses In The Computer I.T Training Institutes. Also
                  Known For Computer Training Institutes, Computer Training Institutes For
                  CCC, PGDCA, C Programming, C++, Python, HTML, CSS,
                  Bootstrap, JavaScript, W3-CSS, SASS, JQuery, PHP, VB.NET, Hardware Networking,
                  Software Development, Web Development and Much More.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="card-group border-0 m-0 p-0 my-2">
          <div className="card rounded-0 border-0 mx-1 shadow-sm bg-transparent">
            <div className="card-body m-0 p-0" data-aos="fade-down" data-aos-duration="300">
              <ol className="list-group border-0 list-group-numbered">
                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft1">
                  <div className="me-auto">
                    <div className="fw-bold text-primary"><span className="px-1">Our Vision</span></div>
                    <span className="m-0 p-0 CeoText">{VISION}</span>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft2">
                  <div className="me-auto border-0">
                    <div className="fw-bold text-primary"><span className="px-1">Our Mission</span></div>
                    <p className="m-0 p-0 CeoText">
                      DIIT is committed to impart Professional education by inculcating three basic values among the youth-----“Building National Character, quality education and developing Management Skills”.
                      <span className="text-danger">We believe in doing & learning.</span>
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="card rounded-0 border-0 mx-1 shadow-sm" id="MissionRight">
            <div className="card-body">
              <h5 className="card-title text-primary">THE REASONS ARE HERE………………………….</h5>
              <p className="m-0 p-0 CeoText" data-aos="fade-down">
                An ISO 9001:2008 Certified institute by BSI. Online examination facility and quick result. Training on Live project. High-class technology. Hi-tech lab. Govt. recognize institute. Affordable fees. Free bags, books, and I-cards to each admission. Monthly test facility, to understand the grasping power of students. Tie-ups with Global companies. Microsoft certified courses and study materials. Conducted by well-experienced I.T. professionals. 100 % job-oriented Courses. Free English speaking and personality development class. Classes by well-experienced and qualified trainers. …………………………. & many more reasons to Join Drishtee.
              </p>
            </div>
          </div>
        </div>

        {/* Lab & Facilities */}
        <div className="card rounded-0 border-0 mx-1 shadow-sm bg-transparent">
          <div className="card-body" data-aos="fade-down" data-aos-duration="500">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-12 mb-4">
                    <img src="images/vender/office.jpg" className="w-100 mb-3" alt="Office Space" />
                  </div>
                  <div className="col-12">
                    <h5 className="text-primary">State-of-the-Art Computer Lab</h5>
                    <p className="CeoText">
                      Our modern computer laboratory is equipped with the latest hardware and software, providing students with hands-on experience in a professional environment.
                    </p>
                    <h5 className="text-primary">Learning Environment</h5>
                    <p className="CeoText">
                      At DIIT, we believe in creating an optimal learning environment that combines theoretical knowledge with practical application. Our infrastructure is designed to support both individual and collaborative learning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-12">
                    <h5 className="text-primary">Student Facilities</h5>
                    <p className="CeoText">
                      We provide comprehensive facilities to ensure students have everything they need for effective learning. This includes high-speed internet, digital resources, and dedicated study areas for both individual and group work.
                    </p>
                    <h5 className="text-primary">Professional Office Environment</h5>
                    <p className="CeoText">
                      Students learn in a professional office-like atmosphere that simulates real-world working conditions. Our facilities include dedicated spaces for group projects, individual study, and practical training sessions.
                    </p>
                  </div>
                  <img src="images/vender/lab.jpg" className="w-100 mb-3" alt="Computer Lab" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion & Basic Info */}
        <div className="row p-0 m-0">
          <div className="col-md-8 m-0 p-0">
            <div className="card m-2 rounded border-0">
              <div className="accordion bg-white">
                {ACCORDION.map((item, idx) => (
                  <AccordionItem key={item.id} item={item} index={idx} active={activeAccordion} onClick={handleAccordion} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="card m-2 rounded-3 shadow-sm border-0" id="MyCardBg">
              <div className="card-header rounded-top fs-5 fw-semibold d-flex align-items-center justify-content-between" style={{ background: "var(--d-blue)", color: "white" }}>
                <span><i className="bi bi-card-list text-warning me-2"></i>Basic Information</span>
              </div>
              <ul className="list-group list-group-flush small">
                {BASIC_INFO.map((item, idx) => <BasicInfoItem key={item.label} item={item} />)}
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Features */}
        <div className="container py-5" id="digital-features">
          <h2 className="text-center fw-bold text-primary mb-4" data-aos="fade-up">Digital Boards & Smart Features</h2>
          <p className="text-center mb-5 text-muted" data-aos="fade-up" data-aos-delay="100">
            Explore our advanced classroom tech and skill-building features that ensure every student is future-ready.
          </p>
          <div className="row g-4 justify-content-center">
            {DIGITAL_FEATURES.map((f, idx) => (
              <div className="col-md-4" data-aos="zoom-in" key={f.title}>
                <div className="card h-100 shadow-sm border-0">
                  <img src={f.img} className="card-img-top" alt={f.title} />
                  <div className="card-body">
                    <h5 className="card-title text-primary"><i className={f.icon}></i>{f.title}</h5>
                    <p className="card-text CeoText">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Certificate />

        {/* Learning Advantages */}
        <div className="container py-5" id="digital-features">
          <h3 className="text-center text-secondary mb-4" data-aos="fade-up">More Learning Advantages</h3>
          <div className="row g-4 justify-content-center">
            {LEARNING_ADV.map((a, idx) => (
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 100} key={a.title}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <i className={a.icon}></i>
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text">{a.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-5" />
          <div className="row text-center mb-5" data-aos="fade-up">
            {IMPACT_STATS.map((stat, i) => (
              <div key={stat.label} className={`col-md-3 col-6 ${i >= 2 ? "mt-4 mt-md-0" : ""}`}>
                <h2 className={`${stat.color} fw-bold`}><span className="counter">{stat.value}</span></h2>
                <p className="text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center bg-light p-5 rounded shadow-sm" data-aos="fade-up">
            <h4 className="mb-3 text-dark">Ready to Build Your Career?</h4>
            <p className="mb-4 text-muted">Join our next batch and transform your skills into a profession.</p>
            <Link to="/Contact-us" className="btn btn-primary btn-lg">
              <i className="bi bi-rocket-takeoff me-2"></i>Join Now
            </Link>
          </div>
        </div>

        <CounterCard text={EST_YEAR} />
        <Footer />
      </div>
    </div>
  );
}

export default React.memo(About);