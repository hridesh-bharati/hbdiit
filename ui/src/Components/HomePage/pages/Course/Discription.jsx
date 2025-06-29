import React from "react";
import { Link } from "react-router-dom";

function Discription() {
    return (
        <div className="container-fluid p-0 mt-5" id="termsPage">
            {/* Header Section */}
            <div className="text-center bg-white py-4 shadow-sm border-bottom">
                <h1 className="fw-bold text-dark">
                    <span className="text-danger">TERMS</span> OF USE
                </h1>
                <div className="small text-secondary d-flex justify-content-center align-items-center gap-2">
                    <Link to="/" className="text-decoration-none text-primary">
                        <i className="fa fa-home"></i>
                    </Link>
                    /
                    <span className="text-dark">Terms & Conditions</span>
                </div>
            </div>

            {/* Intro Message */}
            <div className="bg-light p-3 text-center border-bottom">
                <p className="mb-0 text-muted fw-medium">
                    Please read the following terms carefully before using the Drishti Institute of Information Technology website.
                </p>
            </div>

            {/* Terms Section */}
            <div className="px-3 py-4">
                <h3 className="text-uppercase fw-bold border-bottom pb-2 mb-4 text-warning">
                    Terms & Conditions
                </h3>
                <ul className="list-unstyled ps-2">
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-check-circle text-success me-2 mt-1"></i>
                        <span>
                            This official website of Drishti Institute of Information Technology has been
                            developed to provide information to the general public.
                        </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-check-circle text-success me-2 mt-1"></i>
                        <span>
                            The website is designed and developed by students and maintained by Drishti's internal departments.
                            The documents and information are for reference only and not legal documents.
                        </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-gavel text-danger me-2 mt-1"></i>
                        <span>
                            These terms will be governed by Indian laws. Any disputes should be directed to the institute
                            via email or official communication channels.
                        </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-lock text-primary me-2 mt-1"></i>
                        <span>
                            User data privacy is respected. We do not collect personal information unless you voluntarily provide it
                            for admission, contact, or course inquiries.
                        </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-refresh text-info me-2 mt-1"></i>
                        <span>
                            Drishti reserves the right to update or modify terms, content, or services on this website without prior notice.
                        </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start hoverTextOrange">
                        <i className="fa fa-globe text-success me-2 mt-1"></i>
                        <span>
                            This website may include links to external sites. Drishti is not responsible for their content or privacy policies.
                        </span>
                    </li>
                </ul>
            </div>
            <style>
                {`
                .hoverTextOrange {
    transition: all 0.3s ease;
}
.hoverTextOrange:hover {
    color: var(--orangeTextColor, orange);
    transform: translateX(5px);
}

                `}
            </style>
        </div>
    );
}

export default Discription;
