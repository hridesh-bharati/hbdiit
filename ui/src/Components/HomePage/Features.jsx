import React from 'react';

const cardData = [
    {
        imageUrl: "images/icon/projector.png",
        title: "Live Projects",
        text: "To work on real-time projects.",
        duration: 300,
        id: 'liveA',
    },
    {
        imageUrl: "images/icon/trainers.png",
        title: "Expert Trainers",
        text: "Learn from certified & experienced trainers.",
        duration: 600,
        id: 'liveB',
    },
    {
        imageUrl: "images/icon/course2.png",
        title: "Globally Recognized Certificates",
        text: "Our Certificates are valued by top corporates.",
        duration: 900,
        id: 'liveC',
    },
    {
        imageUrl: "images/icon/practical.gif",
        title: "Hands on Training",
        text: "100% Practical based training model.",
        duration: 1200,
        id: 'liveD',
    }
];
const descriptions = [
    {
        description: "Our live projects allow you to apply what you’ve learned in a practical, real-world context, working on projects that simulate the challenges you would face in your future career.",
        icon: <i className="bi bi-lightbulb-fill" style={{ color: '#ff9800', fontSize: '2rem' }}></i>
    },
    {
        description: "Our trainers bring valuable industry experience and knowledge to the classroom, ensuring that you receive the most up-to-date and relevant information to succeed in your field.",
        icon: <i className="bi bi-person-fill" style={{ color: '#3b82f6', fontSize: '2rem' }}></i>
    },
    {
        description: "The certificates you earn here are more than just a piece of paper—they carry weight in the industry and are recognized by leading companies and organizations worldwide.",
        icon: <i className="bi bi-award-fill" style={{ color: '#4caf50', fontSize: '2rem' }}></i>
    },
    {
        description: "Our hands-on training approach ensures that you not only understand the theory but also know how to apply it practically, making you ready to take on the challenges of the professional world.",
        icon: <i className="bi bi-hand-thumbs-up-fill" style={{ color: '#f44336', fontSize: '2rem' }}></i>
    }
];
export default function LiveCards() {
    return (
        <div className="card-group py-3 mx-3 fixed-position" id="liveCards">
            <style>{`
                /* Dark mode styles for LiveCards */
                .dark-mode #liveCards {
                    background: #23293a !important;
                    color: #f1f1f1;
                    border-radius: 1rem;
                    transition: background 0.3s;
                    margin:1rem;
                }
                .dark-mode #liveCards .card,
                .dark-mode #liveCards .myshadow {
                    background: #273043 !important;
                    color: #f1f1f1;
                    border: none;
                }
                .dark-mode #liveCards .card-title {
                    color: #ffe066 !important;
                }
                .dark-mode #liveCards .card-text {
                    color: #bdbdbd !important;
                }
                .dark-mode #liveCards .text-primary,
                .dark-mode #liveCards .textColorOne {
                    color: #ffe066 !important;
                }
                .dark-mode #liveCards hr {
                    border-color: #ffe066 !important;
                    color: #ffe066 !important;
                }
            `}</style>
            <span className="w-100 d-block text-center h2 fw-bolder">
                <p id="LiveWork" className='textColorOne text-primary' data-aos="fade-right" data-aos-duration="1000"> WHY CHOOSE DRISHTEE </p>
                <center data-aos="fade-left" data-aos-duration="1000">
                    <small className="h6 fw-normal" >We are a modern and inviting institute perfectly suited for students, providing all educational materials here.</small>
                    <hr size="5" color="yellow" width="20%" />
                </center>
            </span>
            {cardData.map((card) => (
                <div
                    key={card.id}
                    id={card.id}
                    className="card text-center m-2 border-secondary myshadow"
                    data-aos="fade-up"
                    data-aos-duration={card.duration}
                >
                    <img
                        className="card-img-top mt-2 rounded mx-auto d-block"
                        src={card.imageUrl}
                        alt={card.title}
                        style={{ width: '70px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" style={{ color: 'blue' }}>
                            {card.title}
                        </h5>
                        <p className="card-text">
                            {card.text}
                        </p>
                    </div>
                </div>
            ))}
            <div className="row justify-content-center">
                {descriptions.map((data, index) => (
                    <div key={index} className="col-sm-6 col-md-3 mb-4">
                        <div className="card shadow-sm p-2 p-lg-4 h-100 text-center myshadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                    {data.icon}
                                    <p className="ml-3 p-2">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}