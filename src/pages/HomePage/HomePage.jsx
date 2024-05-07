import heroImg from '../../assets/images/hero.png'
import about1Img from '../../assets/images/about-1.jpg'
import about2Img from '../../assets/images/about-2.jpg'
import about3Img from '../../assets/images/about-3.jpg'
import about4Img from '../../assets/images/about-4.jpg'
import menu1Img from '../../assets/images/kottu_ed1.JPG'
import menu2Img from '../../assets/images/kottu2.JPG'
import menu3Img from '../../assets/images/momosed.JPG'
import menu4Img from '../../assets/images/mutton_rolls.JPG'
import menu5Img from '../../assets/images/dumb_biriyani.JPG'
import menu6Img from '../../assets/images/egg_hoppers.JPG'
import menu7Img from '../../assets/images/showerma.JPG'
import menu8Img from '../../assets/images/chai_ed.JPG'
import menu9Img from '../../assets/images/lumprice.JPG'
import menu10Img from '../../assets/images/blackTea.JPG'

//import team1Img from '../../assets/images/team-1.jpg'
//import team2Img from '../../assets/images/team-2.jpg'
//import team3Img from '../../assets/images/team-3.jpg'
//import team4Img from '../../assets/images/team-4.jpg'
//import testimonial1Img from '../../assets/images/testimonial-1.jpg'
//import testimonial2Img from '../../assets/images/testimonial-2.jpg'
//import testimonial3Img from '../../assets/images/testimonial-3.jpg'
//import testimonial4Img from '../../assets/images/testimonial-4.jpg'
import '../../assets/styles/style.css'

import React, { useState } from "react";
import CardPopup from '../CardPopup/CardPopup';

function HomePage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const [counter, setCounter] = useState(0);
    const [price, setPrice] = useState(0);


    const updateQuatityPlus = (val) => {



        setCounter(counter => counter + 1);
        setPrice(price => price + val);

    };


    const updateQuatityMinus = (val) => {



        setCounter(counter => counter - 1);
        setPrice(price => price - val);

    };


    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    // Example card data
    const cardData = {
        title: 'Card Titlesss',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel leo libero.'
    };


    return (

        <div className="container-xxl bg-white p-0">

            {/*<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
             <div className="spinner-border text-primary" style={{width: '3rem;', height: '3rem;'}} role="status">
                <span className="sr-only">Loading...</span>
            </div> 
        </div>*/}




            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-warning m-0"><i className="fa fa-utensils me-3"></i>Dinner Dance Mahanama OB Association</h1>

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>

                </nav>

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy <br />The Day</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Let's sway and celebrate the night away. #dinnerdance</p>
                               {/* <a href="" className="btn btn-warning py-sm-3 px-sm-5 me-3 animated slideInLeft">Book Tickets</a>*/}

                                <div>
                                    {/* Display your cards here */}
                                    <div className="btn btn-warning py-sm-3 px-sm-5 me-3 animated slideInLeft" onClick={() => handleCardClick(cardData)}>
                                     Book Tickets </div>

                                    {/* Render the CardPopup component */}
                                    <CardPopup isOpen={isPopupOpen} onClose={handleClosePopup} cardData={selectedCard} />
                                </div>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1Img} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about2Img} style={{ 'marginTop': '25%' }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3Img} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4Img} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Event</h5>
                            <h1 className="mb-4">Warmly Welcome to <i className="fa fa-utensils text-primary me-2"></i>Event</h1>
                            <p className="mb-4"></p>

                            {/* <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
*/}
                        </div>
                    </div>
                </div>
            </div>








            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Our Service</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>

                            <a className="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Event</h4>
                            <h5 className="text-light fw-normal">Monday - Saturday</h5>
                            <p>09AM - 09PM</p>

                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="copyright">

                    </div>
                </div>
            </div>

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>


    );
}

export default HomePage;