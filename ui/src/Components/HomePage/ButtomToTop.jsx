import React from 'react';

function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className="btn btn-primary m-0 p-1 px-2"
            id="btnBackToTop"
            title="Scroll to Top"
            aria-label="Scroll to top"
            style={{
                position: 'fixed',
                bottom: '25px',
                right: '10px',
                zIndex: 9999
            }}
        >
            <i className="bi bi-arrow-up-circle-fill fs-5"></i>
        </button>
    );
}

function BottomToTop() {
    return (
        <>
            <style>
                {`
                #btnBackToTop::after {
                    content: "";
                    border-radius: 50%;
                    border: 6px solid #00ffcb;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: ring 1.5s infinite;
                }

                @keyframes ring {
                    0% {
                        width: 30px;
                        height: 30px;
                        opacity: 1;
                    }
                    100% {
                        width: 100px;
                        height: 100px;
                        opacity: 0;
                    }
                }
                `}
            </style>
            <ScrollToTopButton />
        </>
    );
}

export default BottomToTop;
