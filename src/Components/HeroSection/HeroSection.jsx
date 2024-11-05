import React from 'react'
import './HeroSection.css'
import '../Navbar/Navbar.css';

function HeroSection() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-overlay">
                        <img src="./images/slider-1.jpg" className="d-block w-100" alt="Slide 1" />
                        <div className='carousel-text'>
                            <h1>BEST CAR MAINTENENCE SERVICE</h1>
                            <h2>Servise And Repair</h2>
                            <p>At Kar Repair, we're committed to earning your trust by providing the highest quality car repair services at a fair price</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-overlay">
                        <img src="./images/slider-2.jpg" className="d-block w-100" alt="Slide 2" />
                        <div className='carousel-text'>
                            <h1>BEST CAR DETAILING SERVICES</h1>
                            <h2> Maintenance and Repair</h2>
                            <p>At Kar Repair, we're committed to earning your trust by providing the highest quality car repair services at a fair</p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default HeroSection
