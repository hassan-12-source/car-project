import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer-container'>
            <div
                className="background-container-footer"
                style={{
                    backgroundImage: `url('/images/section-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    height: '70vh',
                    width: '100%',
                }}
            >
                <div className='footer-content'>
                    <div className='footer-left-content'>
                        <h1>Kar - Car Wash</h1>
                        <p>At Kar Repair, we're committed to earning<br></br> your trust by providing the highest quality<br></br> car repair services at a fair price.</p>
                        <div className='icons'>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </div>

                    <div className='footer-center-content'>
                        <h1>Useful Links</h1>
                        <div class="container">
                            <div class="line"></div>
                        </div>

                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Our services</li>
                        <li>Faq</li>
                    </div>

                    <div className='footer-right-content'>
                        <h1>Contact</h1>
                        <div class="container-2">
                            <div class="line-2"></div>
                        </div>
                        <div className='label-content'>
                            <label htmlFor=""> <FontAwesomeIcon icon={faLocationDot} color='red' /> Address : <br></br> 11 West Town, PBo 12345, United States </label>
                            <label htmlFor="phone"><FontAwesomeIcon icon={faPhone} color='red' /> Phone : +1 1234 56 789 <br></br> <FontAwesomeIcon icon={faPhone} color='red' /> Phone :  +1 1234 56 780</label>
                            <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} color='red' /> Email :  info@example.com</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer