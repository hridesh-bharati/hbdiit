import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Typed from 'typed.js';
import TopCourseList from "./TopCourseList";
import Features from "./Features";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";
import QueryForm from "./pages/QueryFrom";
import Offers from "./Offers";
import NoticeBoard from "../HelperCmp/FeaturesUpdate/NoticeBoard";
import TimeTable from "../HelperCmp/FeaturesUpdate/TimeTable";
import CardSlider from "./Cardslider";
import Desc from "./pages/Desc";

// DRY: Static data
const homeItems = [
    {
        title: "Student-Centric Approach",
        content: "We prioritize the needs and aspirations of our students, providing a supportive learning environment.",
        aosDuration: 1000
    },
    {
        title: "Comprehensive Computer Courses",
        content: "We offer a wide range of courses, including programming, web development, networking, and software applications, designed to cater to all skill levels—from beginners to advanced learners.",
        aosDuration: 1500
    },
    {
        title: "Join the Drishtee Community",
        content: "At Drishtee Institute, we believe in creating a supportive community. Participate in workshops, seminars, and networking events that enhance your learning experience and connect you with peers and professionals in the field.",
        aosDuration: 1500
    }
];

const homeButtons = [
    { path: "/Download-Certificate", label: "Result", icon: "bi bi-file-text", color: "btn-danger" },
    { path: "/Contact-us", label: "Enquiry", icon: "bi bi-question-circle", color: "btn-dark" },
    { path: "/Student-Portal", label: "Students", icon: "bi bi-info-circle", color: "btn-info" },
    { path: "/AdmissionForm", label: "Admission", icon: "bi bi-person-plus", color: "btn-success" },
    { path: "/Gallery", label: "Gallery", icon: "bi bi-images", color: "btn-warning" },
    { path: "/OurCourses", label: "Course", icon: "bi bi-book", color: "btn-primary" }
];

const sliderImages = [
    'images/mainSlider/slider1.png',
    'images/mainSlider/slider2.webp',
    'images/mainSlider/slider3.png'
];

function Home() {
    // Greet user via TTS (Hindi)
    useEffect(() => {
        const welcomeText = "नमस्कार, डृष्टी कम्प्यूटर सेंटर में आपका स्वागत है। हम आपकी उज्जवल भविष्य की कामना करते हैं।";
        if ('speechSynthesis' in window) {
            const utterance = new window.SpeechSynthesisUtterance(welcomeText);
            utterance.lang = 'hi-IN';
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    // Redirect admin
    const navigate = useNavigate();
    const aToken = localStorage.getItem('aToken');
    useEffect(() => {
        if (aToken) navigate('/Admin-Pannel');
    }, [aToken, navigate]);

    // Typed.js for text animation
    useEffect(() => {
        const typed1 = new Typed('#element', {
            strings: [
                `<span class="hideFont">“<b style="color:red;">Drishtee </b> envisions a world where all communities are empowered to achieve shared prosperity.”</span>`
            ],
            typeSpeed: 55,
            loop: true,
        });

        const typed2 = new Typed('#diit', {
            strings: [
                "Empowering Tomorrow's Tech Leaders!",
                "Unlocking Your Digital Potential!",
                "Coding Your Future, Today!",
                "Where Innovation Meets Education!",
                "Building Skills for the Digital Age!",
                "Transforming Learners into Developers!",
                "Your Gateway to the Tech World!",
                "Learn. Code. Succeed.",
            ],
            typeSpeed: 55,
            loop: true,
        });
        const typed3 = new Typed('#admnow', {
            strings: [
                "Get your admission now"
            ],
            typeSpeed: 55,
            loop: true,
        });

        return () => {
            typed1.destroy();
            typed2.destroy();
            typed3.destroy();
        };
    }, []);


    return (
        <div id="home">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="2000"
            >
                <div className="carousel-inner MainCarousel">
                    {sliderImages.map((image, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                            <img
                                src={image}
                                loading={idx === 0 ? "eager" : "lazy"}
                                fetchpriority={idx === 0 ? "high" : "auto"}
                                width="1200"
                                height="600"
                                className="d-block w-100"
                                alt={`Slide ${idx + 1}`}
                            />
                        </div>
                    ))}
                    {['prev', 'next'].map(direction => (
                        <button
                            key={direction}
                            className={`carousel-control-${direction}`}
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide={direction}
                        >
                            <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
                            <span className="visually-hidden">
                                {direction === 'prev' ? 'Previous' : 'Next'}
                            </span>
                        </button>
                    ))}
                    <style>
                        {`
                        .carousel-control-prev-icon,
                        .carousel-control-next-icon {
                        width: 1px;
                        height: 1px;
                        }
                        `}
                    </style>
                </div>
                <div className="w-100 m-auto rounded-0 p-0 m-0 home-bg">
                    <div className="row g-0 mb-0">
                        <div className="col-12">
                            {/* About Welcome Card */}
                            <div className="container-fluid mt-2 py-4 about-section">
                                <div className="card my-3 rounded-2 shadow-sm border-0 about-card" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="card-body">
                                        <h5 className="fw-medium text-primary my-3">WELCOME TO DRISHTEE COMPUTER CENTER</h5>
                                        <span className="lh-base">Drishtee Institute of Information Technology inaugurated at a new place Paragpur Road, near Ramharsha Inter College, Nichaul, Maharajganj</span>
                                        <h6 className="text-danger small mt-3 position-relative">
                                            <b>Drishtee </b><span id="diit" />
                                            <style>{`.typed-cursor {display: none !important;}`}</style>
                                        </h6>

                                    </div>
                                    <div className="col-md-2 ms-auto m-2 py-1">
                                        <Link to="/Contact-us" className="btn fw-medium border-0 rounded-pill text-primary shadow-sm">
                                            Call To Action
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* About Section */}
                            <div className="container-fluid my-5 py-4 about-section">
                                <div className="row justify-content-center">
                                    <div className="col-md-5 text-center">
                                        <img src="images/vender/aboutBg.png" className="img-fluid p-2 rounded shadow-sm" alt="About Drishtee" loading="lazy" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="p-3">
                                            <h2 className="text-primary fw-bold">Drishtee Institute of Information Technology</h2>
                                            {homeItems.map((item, idx) => (
                                                <div className="card my-3 shadow-sm about-card" key={item.title} data-aos="fade-up" data-aos-duration={item.aosDuration}>
                                                    <div className="card-body">
                                                        <h5 className="text-primary">{item.title}</h5>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            <Link to="/About" className="btn btn-outline-primary mt-3">View All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ...rest unchanged */}
                        </div>
                    </div>
                </div>
            </div>

            <Desc />

            <div className="mb-4 pb-3" id='absirfdiitBg'>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className='col-md-6 p-md-5 pt-5 px-3'>
                        <h4 className='fs-1 fw-bolder text-white text-center' data-aos="fade-right" data-aos-duration="1000">Join the Drishtee Community</h4>
                        <div className='cardShdow p-4 p-lg-5 rounded-4 text-white' data-aos="fade-up" data-aos-duration="1000">
                            <b className="text-success">Where Dreams come!</b> Drishtee Institute Of Information Technology aims to impart Government approved & recognized courses in the field of computer application.....DIIT is a modern educational Institute setup to inculcate in its students values & attitude that will help them to keep up global perspective and work towards achieving high career growth.
                        </div>
                        <Link to="/Contact-us">
                            <button className="btn btn-primary btn-lg p-3 px-5 mt-5 ms-1">Join Now <i className="bi bi-arrow-right"></i></button>
                        </Link>
                    </div>
                    <div className="col-md-6 position-relative" data-aos="fade-left">
                        {/* SVG + founder */}
                        <svg viewBox="0 0 581 596" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M161.37 12.301C221.003 -53.0048 563.794 156.411 579.671 299.209C595.548 442.007 237.88 668.171 135.305 571.868C46.2938 488.252 -0.524429 189.658 161.37 12.301Z" fill="url(#paint0_linear_227_946)"></path>
                            <path d="M289.511 579.243C203.626 594.241 -34.778 302.771 4.28926 182.908C43.3565 63.0458 313.639 12.301 483.973 114.853C666.745 224.904 435.092 553.933 289.511 579.243Z" fill="url(#paint1_linear_227_946)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_227_946" x1="172.303" y1="27.9012" x2="521.418" y2="508.929" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#4F5DE4" stopOpacity="0"></stop>
                                    <stop offset="0.269374" stopColor="#9EA6F0" stopOpacity="0.550859"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_227_946" x1="123.876" y1="84.092" x2="408.261" y2="553.853" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#FF7200"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="d-flex text-center mPosition">
                            <div className="bg-white p-3 overflow-hidden pt-4 rounded-circle FounderCircle ">
                                <img src="images/vender/A.png" className="img-fluid pt-4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-1" id="CourseContainer">
                <div className="d-flex px-3 align-items-center justify-content-between">
                    <h1 id="courseTitle" data-aos="fade-up" data-aos-duration="1000">
                        <b className="fw-bolder text-center text-primary">
                            <b className="text-danger fs-5">DRISHTEE</b><br />TOP COURSE
                        </b>
                    </h1>
                    <Link className="nav-link text-success d-inline-block float-end bg-white shadow-sm p-1 px-2 me-2" to="/AdmissionForm">
                        <font size="2">Admission<i className="bi bi-arrow-right"></i></font>
                    </Link>
                </div>
                <TopCourseList />
            </div>

            <div className="container-fluid " id="mainCourseEle">
                <CardSlider />
            </div>

            <Features />

            <h2 className="fw-bold text-center text-secondary"><i className="bi bi-link-45deg me-2"></i>Important Links</h2>
            <div className="container text-center my-4">
                <div className="row">
                    {homeButtons.map((btn, idx) => (
                        <div key={btn.label} className="col-md-4 col-sm-6 my-2">
                            <Link to={btn.path}>
                                <button className={`btn ${btn.color} fw-bold w-100`}>
                                    <i className={`${btn.icon} me-2`}></i>{btn.label}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div id="TestimonialParent">
                <Testimonial />
            </div>
            <div className="mx-0 ">
                <div className="container-fluid m-1 mx-auto">
                    <h2 className="py-2 text-primary text-center fw-bolder" data-aos="fade-right" data-aos-duration="1500">Features And Updates</h2>
                    <center className="hideFont fw-medium" id="FeatureTextOne"
                        style={{ minHeight: "30px" }}>
                        <span id="element"></span>
                    </center>
                    <p className="showFont" data-aos="fade-left" data-aos-duration="1000" id="FeatureTextTwo">“<b style={{ color: 'red' }}>Drishtee</b> envisions a world where all communities are empowered to achieve shared prosperity.”</p>
                    <div className="container-fluid pt-0 ">
                        <div className="row">
                            <TimeTable />
                            <NoticeBoard />
                        </div>
                    </div>
                </div>
            </div>
            <div id="team">
                <Team />
            </div>
            <div className="row m-auto">
                <div className="col-md-5 mx-auto m-1 offer-section">
                    <Offers />
                </div>
                <div className="col-md-6 mx-auto m-1" id="signUpNow">
                    <QueryForm />
                </div>
            </div>
            <div
                className="row d-flex justify-content-between align-items-center"
                style={{ background: "#6a41ed", padding: "40px 20px" }}
            >
                <div className="col-md-7 d-flex align-items-center"
                    style={{ minHeight: "60px" }}>
                    <h1 className="text-white mb-0" style={{ minHeight: "48px", lineHeight: "48px" }}>
                        <span id="admnow"></span>
                    </h1>
                </div>
                <div className="col-md-5 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                    <Link to="/AdmissionForm">
                        <button
                            className="btn btn-light rounded-pill"
                            style={{
                                width: "200px",
                                animation: "amt 1s infinite",
                            }}
                        >
                            Enroll
                        </button>
                    </Link>
                </div>

                <style>{`
    h1 {
      font-size: 48px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 28px;
        text-align: center;
        width: 100%;
        min-height: 32px;
        line-height: 32px;
      }
    }

    @keyframes amt {:
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `}</style>
            </div>


            <Footer />
        </div>
    );
}

export default Home;