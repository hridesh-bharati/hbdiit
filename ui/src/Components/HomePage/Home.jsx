import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
import DarkMode from "../HelperCmp/Darkmode/DarkMode";
import CardSlider from "./Cardslider";
import Desc from "./pages/Desc";
// import LiveChatPage from "../HelperCmp/LiveChat/LiveChatPage";
function Home() {
    useEffect(() => {
        const greetUser = () => {
            const welcomeText = "नमस्कार, डृष्टी कम्प्यूटर सेंटर में आपका स्वागत है। हम आपकी उज्जवल भविष्य की कामना करते हैं।";
            // Check if browser supports Web Speech API
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(welcomeText);
                utterance.lang = 'hi-IN';
                window.speechSynthesis.speak(utterance);
            } else {
                // Web Speech API is not supported
                console.error("Text-to-speech is not supported in your browser.");
            }
        };
        greetUser();
    }, []);
    const navigate = useNavigate();
    const aToken = localStorage.getItem('aToken');

    useEffect(() => {
        if (aToken) {
            navigate('/Admin-Pannel');
        }
    }, [])
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['<span className="hideFont">“<b style="color:red !important;">Drishtee </b> envisions a world where all communities are empowered to achieve shared prosperity.”</span>'],
            typeSpeed: 55,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    const items = [
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
    const buttons = [
        { path: "/Download-Certificate", label: "Result", icon: "bi bi-file-text", color: "btn-danger" },
        { path: "/Contact-us", label: "Enquiry", icon: "bi bi-question-circle", color: "btn-dark" },
        { path: "/Student-Portal", label: "Students", icon: "bi bi-info-circle", color: "btn-info" },
        { path: "/AdmissionForm", label: "Admission", icon: "bi bi-person-plus", color: "btn-success" },
        { path: "/Gallery", label: "Gallery", icon: "bi bi-images", color: "btn-warning" },
        { path: "/OurCourses", label: "Course", icon: "bi bi-book", color: "btn-primary" }
    ];

    // ---------------------Dynamic Carousel -----------------------
    const images = ['images/mainSlider/slider1.png', 'images/mainSlider/slider2.webp', 'images/mainSlider/slider3.png']
    return (
        <div id="Home" >
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner MainCarousel">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={image} loading="lazy" className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="w-100 m-auto rounded-0 p-0 m-0" id="homeBg">
                    <div className="row g-0 mb-0"  >
                        <div className="col-12" >
                            <div className="row p-1 shadow-sm m-1 justify-content-center" id='homeA'>
                                <div className="col-md-10">
                                    <h5 className="fw-medium text-danger my-3">WELCOME TO DRTISHTEE COMPUTER CENTER</h5>
                                    <span className="lh-base">
                                        Drishtee Institute of Information Technology inaugurated at a new place Paragpur Road, near Ramharsha Inter College, Nichaul, Maharajganj</span>
                                    <h6 className="vlColor mt-3">DIIT: Empowering Your Digital Future!</h6>
                                </div>
                                <br /><br />

                                <div className="col-md-2 py-1">
                                    <Link to="/Contact-us" className="btn fw-medium border-0 text-primary shadow-sm mt-3">Call To Action </Link>
                                </div>
                            </div>
                            <div className="container-fluid bg-white my-2 py-5">
                                <div className="row justify-content-center align-items-center">
                                    {/* Left Image Column */}
                                    <div className="col-md-5 p-3 text-center">
                                        <img
                                            src="images/vender/aboutBg.png"
                                            className="img-fluid homeAboutPic p-2"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                            alt="About"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Right Content Column */}
                                    <div className="col-md-7 mt-4 mt-md-0">
                                        <div className="d-flex align-items-start" data-aos="fade-left" data-aos-duration="1000">
                                            <img
                                                src="images/icon/welcome-girl.png"
                                                alt="Welcome Icon"
                                                className="img-fluid me-3"
                                                style={{ maxWidth: '60px' }}
                                                loading="lazy"
                                            />
                                            <h2 className="text-primary fw-bold">Drishtee Institute of Information Technology</h2>
                                        </div>

                                        <div className=" p-3 rounded mt-3 shadow-sm">
                                            {items.map((item, index) => (
                                                <div key={index} data-aos="fade-right" data-aos-duration={item.aosDuration}>
                                                    <h5 className="text-primary mb-1">{item.title}</h5>
                                                    <p className="text-muted">{item.content}</p>
                                                </div>
                                            ))}
                                            <div data-aos="fade-left" className="text-end mt-3">
                                                <Link to="/About" className="btn btn-outline-primary btn-sm">
                                                    View All
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Desc />
            <div className="mb-4 pb-3" id='absirfdiitBg'>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className='col-md-6 p-md-5 pt-5 px-3'>
                        <h4 className='fs-1 fw-bolder text-white text-center' data-aos="fade-right" data-aos-duration="1000" >Join the Drishtee Community</h4>
                        <div className='cardShdow p-4 p-lg-5 rounded-4 text-white' data-aos="fade-up" data-aos-duration="1000">
                            {/* Learning is not just an individual journey; it's a community experience. Connect with fellow learners, share insights, and collaborate on projects within the vibrant Richind community. Together, we're building a network of digital pioneers. */}
                            <b className="text-success"  >Where Dreams come true</b> Drishtee Institute Of information Technology aims to impart Government approved & recognized courses in the field of computer application.....DIIT is a modern educational Institute setup to inculcate in its students values & attitude that will help them to keep up global perspective and work towards achieving high career grow.
                        </div>
                        <Link to={'/Contact-us'} >
                            <button className="btn btn-primary btn-lg p-3 px-5 mt-5 ms-1">Join Now <i className="bi bi-arrow-right"></i></button>
                        </Link>
                    </div>
                    <div className="col-md-6 position-relative" data-aos="fade-left">
                        <>
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
                        </>
                        <div className="d-flex text-center mPosition">
                            <div className="bg-white p-3 overflow-hidden pt-4 rounded-circle FounderCircle ">
                                <img src="images/vender/A.png" className="img-fluid pt-4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-1" id="CourseContainer" >
                <div className="d-flex px-3 align-items-center justify-content-between">
                    <h1 id="courseTitle" data-aos="fade-up" data-aos-duration="1000"><b className="fw-bolder text-center text-primary">
                        <b className="text-danger fs-5">DRISHTEE</b> <br /> TOP COURSE</b></h1>
                    <Link className="nav-link text-success d-inline-block float-end bg-white shadow-sm p-1 px-2 me-2" to='AdmissionForm'><font size='2'>
                        Admisssion <i className="bi bi-arrow-right"></i></font></Link>
                </div>
                <TopCourseList />
            </div>
            <div className="container-fluid">
                <CardSlider />
            </div>
            <Features />
            <h2 className="fw-bold text-center text-secondary"><i className="bi bi-link-45deg me-2"></i> Important Links</h2>
            <div className="container text-center mt-4">
                <div className="row">
                    {buttons.map((btn, index) => (
                        <div key={index} className="col-md-4 col-sm-6 my-2">
                            <Link to={btn.path}>
                                <button className={`btn ${btn.color} fw-bold w-100`}>
                                    <i className={`${btn.icon} me-2`}></i> {btn.label}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-0 ">
                <div className="container-fluid m-1 mx-auto" id="">
                    <h2 className="py-2 text-primary text-center fw-bolder" data-aos="fade-right" data-aos-duration="1500">
                        Features And Updates
                    </h2>
                    <center className="hideFont fw-medium" id="FeatureTextOne" >
                        <span id="element"></span>
                    </center>
                    <p className="showFont" data-aos="fade-left" data-aos-duration="1000" id="FeatureTextTwo">“ <b style={{ color: 'red' }}>Drishtee </b>
                        envisions a world where all communities are empowered to achieve shared prosperity.“
                    </p>
                    <div className="container-fluid pt-0 ">
                        <div className="row">
                            <TimeTable />
                            <NoticeBoard />
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <Team />

            <div className="row" >
                <div className="col-md-6" ><Offers /></div>
                <div className="col-md-6"><QueryForm /> </div>
            </div>

            {/* <LiveChatPage /> */}
            <div className="row d-flex justify-content-between align-items-center" style={{ background: "#6a41ed", padding: "60px" }}>
                <div className="col-md-6">
                    <h1 className="text-white">Get your admission now</h1>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={'/AdmissionForm'}>
                    <button className="btn btn-light rounded-pill" style={{ width: "200px" }}>Enroll</button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div >
    );
}
export default Home;
