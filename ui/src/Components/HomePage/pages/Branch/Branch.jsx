import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import SwiperDemo from './Slider';
import Footer from '../../../Footer/Footer';
import QueryForm from '../QueryFrom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from './Slider';

function Branch() {
    useEffect(() => {
        const typed = new Typed('#typingAmt', {
            strings: ['Growing.', 'Faster.', 'Bigger.'],
            typeSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const features = [
        {
            icon: 'bi-person-circle',
            title: 'Expert Guidance',
            text: 'Our experts provide tailored guidance to help students navigate the tech industry.',
            iconColor: 'text-primary',
        },
        {
            icon: 'bi-clock',
            title: 'Flexible Timings',
            text: 'Our flexible class timings are designed to fit into your busy schedule.',
            iconColor: 'text-danger',
        },
        {
            icon: 'bi-mortarboard',
            title: 'Certification Programs',
            text: 'We offer certification programs that give our students the edge they need in the job market.',
            iconColor: 'text-warning',
        },
    ];

    const programs = [
        {
            icon: 'bi-laptop',
            title: 'Web Development',
            text: 'Learn the latest technologies to build modern websites and web applications.',
            iconColor: 'text-primary',
            details: 'Our comprehensive web development program covers HTML5, CSS3, JavaScript, React, Node.js, and MongoDB. Students gain hands-on experience through real-world projects and build a professional portfolio.',
            duration: '6 Months',
            fee: '₹15,000'
        },
        {
            icon: 'bi-graph-up',
            title: 'Data Science',
            text: 'Master data analysis, machine learning, and AI technologies to solve real-world problems.',
            iconColor: 'text-warning',
            details: 'This intensive program teaches Python for data science, statistical analysis, machine learning algorithms, data visualization, and big data technologies. Perfect for aspiring data scientists and analysts.',
            duration: '8 Months',
            fee: '₹20,000'
        },
        {
            icon: 'bi-phone',
            title: 'Mobile App Development',
            text: 'Build powerful and responsive mobile applications for both Android and iOS.',
            iconColor: 'text-danger',
            details: 'Learn to develop cross-platform mobile applications using Flutter and React Native. Course includes UI/UX principles, API integration, and app publishing to Google Play and Apple App Store.',
            duration: '5 Months',
            fee: '₹18,000'
        },
    ];

    const whydiit = [
        {
            icon: 'bi-lightbulb-fill',
            title: 'Innovative Learning',
            description: 'We use cutting-edge teaching methods and modern technologies to ensure that you stay ahead in your field.',
            iconColor: 'text-primary',
        },
        {
            icon: 'bi-check-circle-fill',
            title: 'Proven Success',
            description: 'Our graduates have successfully entered the workforce at top companies, thanks to our comprehensive training and career services.',
            iconColor: 'text-success',
        },
        {
            icon: 'bi-person-fill',
            title: 'Personalized Support',
            description: 'We believe in offering individual attention to each student, ensuring your needs are met throughout your educational journey.',
            iconColor: 'text-info',
        },
    ];

    const sections = [
        {
            title: 'Our Vision',
            content: 'Our vision is to be the leading institution that transforms the lives of students by providing them with the tools, knowledge, and networks needed to thrive in an ever-evolving tech industry. We aim to cultivate a generation of innovators, problem-solvers, and future leaders who will shape the digital landscape.',
        },
        {
            title: 'Student Support',
            content: "At Drishtee, we understand that education extends beyond the classroom. That's why we offer a variety of student support services to help you succeed. From career counseling to mental wellness programs, we are dedicated to helping you balance your academic, professional, and personal life.",
        },
        {
            title: 'Get Involved',
            content: "Drishtee is not just a place to learn—it's a community. We encourage our students to participate in clubs, events, and industry collaborations. Join our network of like-minded individuals who are passionate about technology and innovation. Get involved in our coding clubs, attend our workshops, and connect with alumni who are making a difference in the world.",
        },
    ];

    const carouselItems = [
        { src: './images/vender/tdiit.jpg', alt: 'DIIT' },
        { src: './images/vender/teacher.jpg', alt: 'DIIT' },
    ];

    const faqs = [
        {
            question: 'What are the admission requirements?',
            answer: 'We require basic computer knowledge and passion for technology. For advanced courses, we assess your current skill level to ensure proper placement.'
        },
        {
            question: 'Do you provide placement assistance?',
            answer: 'Yes, we have a dedicated placement cell that helps with resume building, interview preparation, and connecting students with our industry partners.'
        },
        {
            question: 'Are there any discounts available?',
            answer: 'We offer early bird discounts and scholarships for meritorious students. Please contact our admission office for current offers.'
        },
        {
            question: 'What is the class size?',
            answer: 'We maintain small batch sizes (15-20 students) to ensure personalized attention for each learner.'
        }
    ];
    const statsData = [
        { value: "500+", label: "Students Trained", color: "text-primary", delay: 100 },
        { value: "95%", label: "Placement Rate", color: "text-success", delay: 200 },
        { value: "20+", label: "Industry Partners", color: "text-warning", delay: 300 },
        { value: "15+", label: "Certified Courses", color: "text-danger", delay: 400 },
        { value: "10+", label: "Experienced Faculties", color: "text-info", delay: 500 },
        { value: "4.9★", label: "Student Rating", color: "text-secondary", delay: 600 }
    ];
    const images = [1, 2, 3];
    const methodologyPoints = [
        {
            title: "Project-Based Learning",
            description:
                "Students work on real-world projects throughout the course, building a professional portfolio that showcases their skills to potential employers.",
        },
        {
            title: "Industry Mentorship",
            description:
                "Our students receive guidance from industry professionals who provide insights into current trends and hiring expectations.",
        },
        {
            title: "Continuous Assessment",
            description:
                "Regular coding challenges, quizzes, and project reviews ensure students stay on track and master each concept before moving forward.",
        },
    ];
    return (
        <div>
            <div className="mx-sm-0 px-sm-0 pt-4">
                {/* Bootstrap Carousel */}

                <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={i}
                                className={i === 0 ? "active" : ""}
                                aria-current={i === 0 ? "true" : undefined}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="carousel-inner">
                        {images.map((n, i) => (
                            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                <img src={`images/vender/d${n}.jpg`} className="d-block w-100" alt={`Slide ${n}`} />
                            </div>
                        ))}
                    </div>

                    {["prev", "next"].map(dir => (
                        <button
                            key={dir}
                            className={`carousel-control-${dir}`}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide={dir}
                        >
                            <span className={`carousel-control-${dir}-icon`} aria-hidden="true" />
                            <span className="visually-hidden">{dir === "prev" ? "Previous" : "Next"}</span>
                        </button>
                    ))}
                </div>


                {/* Typed Text */}
                <div className="container text-center fs-4 fw-bold">
                    <div className="row">
                        <div className="col-12 my-3" id="BranchTypingText">
                            <small>
                                Drishtee Computer Center is{' '}
                                <span className="text-warning" id="typingAmt"></span>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Text Content */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="col-md-12 pt-4"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-out-cubic"
                                >
                                    <h3 className="fw-bold mb-3" style={{ color: "#00268f", fontSize: "2rem" }}>
                                        WELCOME TO <span style={{ color: "#ff6b00" }}>DRISHTEE COMPUTER CENTER</span>
                                    </h3>
                                    <span className='text-muted d-block mb-3small' style={{ fontWeight: 500 }}>
                                        📍 Branch: Main Market road, in front of Rauniyar Chitra Mandir, Thoothibari, Maharajganj
                                    </span>
                                </div>

                                <p className="text-dark"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="400"
                                    style={{ lineHeight: "1.8", fontSize: "1rem" }}
                                >
                                    Drishtee Institute of Technology, founded in 2018, is recognized as one of the top technical computer institutes in the region. Our mission is to empower students with practical, job-ready skills through innovative teaching and an industry-aligned curriculum.
                                </p>

                                <p className="text-dark"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="600"
                                    style={{ lineHeight: "1.8", fontSize: "1rem" }}
                                >
                                    Located in the heart of Maharajganj, our center boasts modern computer labs, experienced faculty, and a nurturing learning environment that fosters talent and supports professional growth.
                                </p>
                            </div>

                            {/* Image/Slider Section */}
                            <div className="col-lg-6">
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                                    <Slider />
                                </div>
                            </div>

                            {/* Statistics Row */}
                            <div className="d-flex align-items-center justify-content-start flex-wrap mt-4">
                                {statsData.map((stat, index) => (
                                    <div
                                        className={`me-5 mb-3 ${index === statsData.length - 1 ? "" : ""}`}
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={stat.delay}
                                        data-aos-duration="800"
                                    >
                                        <h3 className={`${stat.color} mb-0 fw-bold`}>{stat.value}</h3>
                                        <p className="mb-0 text-muted">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Additional Features */}
                <div className="container py-5">
                    <h2 className="fw-bold text-center mb-5" style={{ color: "#00268f" }}>Why Choose Our Institute?</h2>
                    <div className="row text-center">
                        {features.map((feature, index) => (
                            <div className="col-md-4 my-3" key={index}>
                                <div className="card shadow-sm hover-shadow-lg transition-all h-100">
                                    <div className="card-body" style={{ textAlign: 'justify' }}>
                                        <i className={`bi ${feature.icon} fs-1 ${feature.iconColor} hover-text-success`}></i>
                                        <h5 className="card-title mt-3 text-primary">{feature.title}</h5>
                                        <p className="card-text">{feature.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Why DiiT */}
                {/* <div className="container my-5">
                    <h3 className="text-center fw-bold text-primary mb-5">Our Key Differentiators</h3>
                    <div className="row text-center mt-4">
                        {whydiit.map((feature, index) => (
                            <div className="col-md-4 my-2" key={index}>
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <i className={`bi ${feature.icon} fs-1 ${feature.iconColor}`}></i>
                                        <h5 className="card-title mt-3 text-primary">{feature.title}</h5>
                                        <p className="card-text">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Featured Programs */}
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "#00268f" }}>Our Comprehensive Programs</h2>
                        <p className="lead">Choose from our industry-relevant courses designed to launch your tech career</p>
                    </div>
                    <div className="row">
                        {programs.map((program, index) => (
                            <div className="col-md-4 my-3" key={index}>
                                <div className="card shadow-sm hover-shadow-lg transition-all h-100">
                                    <div className="card-body">
                                        <i className={`bi ${program.icon} fs-1 ${program.iconColor} hover-text-success`}></i>
                                        <h5 className="card-title mt-3 text-primary">{program.title}</h5>
                                        <p className="card-text">{program.text}</p>
                                        <div className="program-details mt-3">
                                            <p><strong>Duration:</strong> {program.duration}</p>
                                            <p><strong>Course Fee:</strong> {program.fee}</p>
                                            <button className="btn btn-sm btn-outline-primary mt-2" data-bs-toggle="collapse" data-bs-target={`#programDetails${index}`}>
                                                View Details
                                            </button>
                                            <div className="collapse mt-2" id={`programDetails${index}`}>
                                                <div className="card card-body bg-light">
                                                    {program.details}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Methodology Section */}
                <div className="container-fluid bg-light py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="fw-bold mb-4">Our Unique Learning Approach</h2>
                                {methodologyPoints.map((point, index) => (
                                    <div className="methodology-point mb-3" key={index}>
                                        <h5 className="text-primary">{point.title}</h5>
                                        <p>{point.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-6">
                                {/* <img
                                    src="./images/vender/tdiit.jpg"
                                    className="img-fluid rounded shadow"
                                    alt="Learning Methodology"
                                /> */}
                                <div className="carousel-inner">
                                    {carouselItems.map((item, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1000">
                                            <img src={item.src} className="d-block w-100 img-fluid h-100" alt={item.alt} />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery Section */}
                <div className="container py-5" data-aos="fade-up">
                    <h2 className="text-center fw-bold text-primary mb-4">Our Campus Life</h2>
                    <p className="text-center mb-4">Explore moments from our vibrant learning community</p>
                    <div className="row">
                        {["d1", "d2", "d3", "d4", "d5", "d6"].map((num, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card shadow-sm">
                                    <img
                                        src={`images/vender/${num}.jpg`}
                                        className="card-img-top"
                                        alt={`Gallery ${num}`}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Simple Sections Layout */}
                <div className="container mb-5">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="mb-2 text-primary">{section.title}</h3>
                            <div>{section.content}</div>
                        </div>
                    ))}
                </div>

                {/* FAQs Section */}
                <div className="container py-5">
                    <h2 className="fw-bold text-center mb-5 text-primary">Frequently Asked Questions</h2>
                    <div className="row">
                        {faqs.map((faq, index) => (
                            <div className="col-md-6 my-3" key={index}>
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{faq.question}</h5>
                                        <p className="card-text">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact and Hours Section - Redesigned */}
                <div className="container my-5 px-3">
                    <div className="row g-4">
                        {/* Contact Info */}
                        <div className="col-md-6">
                            <div className="p-4 border rounded-4 bg-light h-100">
                                <h4 className="text-primary mb-3">Contact Details</h4>
                                <p className="mb-2">
                                    <i className="bi bi-telephone-fill me-2 text-secondary"></i>
                                    +91 9876543210
                                </p>
                                <p className="mb-2">
                                    <i className="bi bi-envelope-fill me-2 text-secondary"></i>
                                    info@drishtee.com
                                </p>
                                <p>
                                    <i className="bi bi-geo-alt-fill me-2 text-secondary"></i>
                                    Thoothibari, Maharajganj District<br />
                                    Uttar Pradesh, India
                                </p>
                                <div className="mt-4">
                                    <h6 className="text-dark">Connect With Us:</h6>
                                    <div className="d-flex gap-3 mt-2">
                                        <a href="#" className="text-decoration-none text-primary fs-4"><i className="bi bi-facebook"></i></a>
                                        <a href="#" className="text-decoration-none text-info fs-4"><i className="bi bi-twitter"></i></a>
                                        <a href="#" className="text-decoration-none text-danger fs-4"><i className="bi bi-instagram"></i></a>
                                        <a href="#" className="text-decoration-none text-primary fs-4"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="col-md-6">
                            <div className="p-4 border rounded-4 bg-light h-100">
                                <h4 className="text-primary mb-3">Opening Hours</h4>
                                <p className="mb-2">
                                    <i className="bi bi-clock-fill me-2 text-secondary"></i>
                                    Monday - Saturday
                                </p>
                                <p className="mb-2">6:00 AM - 7:00 PM</p>
                                <p className="text-danger fw-semibold">Closed on Sundays</p>

                                <div className="mt-4">
                                    <h6 className="text-dark">Upcoming Events:</h6>
                                    <ul className="list-unstyled mt-2">
                                        <li className="mb-2">
                                            <i className="bi bi-calendar-event me-2 text-primary"></i>
                                            Tech Workshop - June 15, 2023
                                        </li>
                                        <li>
                                            <i className="bi bi-calendar-event me-2 text-primary"></i>
                                            Coding Competition - July 1, 2023
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map and Query Form Section */}
                <div className="container-fluid my-5">
                    <h2 className="text-center mb-4">Locate-Us</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.3484879661028!2d83.69061145032624!3d27.427248144117375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39942392249c9073%3A0x6b62ef81415149dd!2sDrishtee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1696133570458!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="col-md-6">
                            <QueryForm />
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="container-fluid bg-primary text-white py-5">
                    <div className="container text-center">
                        <h2 className="mb-4">Ready to Start Your Tech Journey?</h2>
                        <p className="lead mb-4">Join hundreds of successful students who launched their careers with Drishtee</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light btn-lg px-4">
                                <i className="bi bi-telephone me-2"></i> Call Now
                            </button>
                            <button className="btn btn-outline-light btn-lg px-4">
                                <i className="bi bi-whatsapp me-2"></i> WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Branch;