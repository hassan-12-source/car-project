import React from 'react'
import './Appointment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

function Appointment() {
    return (
        <div
        className="background-container-appointment"
            style={{
                backgroundImage: `url('/images/section-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '50vh',
                width: '100%',
            }}
        
        >

            <div className='appointment-text'>
                <h1>24/7 FREE SERVICES</h1>
                <p>We are committed to providing our customers with quality repairs at a fair price.</p>
            </div>

            <button className='btn-appointment'>
                <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '8px' }} />
                Schedule an Appointment
            </button>

        </div>
    )
}

export default Appointment