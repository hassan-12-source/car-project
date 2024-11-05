import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function Testimonial() {
    return (
        <section className="testimonial-section">
            <div className="row text-center">
                <div className="col-md-12">
                    <div id="carouselBasicExample" className="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className='text-testimonial'>
                                <h1>Testimonials</h1>
                                <p>People love us</p>
                            </div>
                            <div className="carousel-item active">
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Thank you very much. Very Awesome Template. I’m impressed with your service.<br></br> I’ve already told my friends about your template and<br></br> your quick response, thanks again!"
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="./images/testimonial-2.jpg"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="sample" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- Anna Morian</p>
                            </div>

                            <div className="carousel-item">
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Great Support, I would just like to say thank you for your prompt<br></br> and effective service, for your friendly and professional support staff!<br></br> I will recommend your expert company to all my friends."
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="./images/testimonial-3.jpg"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="sample" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- William</p>
                            </div>

                            <div className="carousel-item">
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Wow Very Nice Team, I'm so happy with your service. You managed to exceed<br></br> my expectations! You guys are very efficient and <br></br>I will refer more people to your company!"
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="./images/testimonial-4.jpg"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="sample" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- Kate Allise</p>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBasicExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselBasicExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
