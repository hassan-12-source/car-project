import React from 'react'
import './Services.css'

function Services() {
    return (
        <div className='services-container'>
            <div className='text-service'>
                <h1>AUTO REPAIR SERVICES</h1>
                <p>We offer a wide range of services to help you get back on the road quickly and safely.</p>
            </div>
            <div className='services-content'>
                <div className='service'>
                    <img src={`/images/oil.svg`} alt="oil" className='oil' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>
                <div className='service'>
                    <img src={`/images/brakes.svg`} alt="brakes" className='brakes' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>
                <div className='service'>
                    <img src={`/images/transmission.svg`} alt="transmission" className='transmission' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>

                <div className='service'>
                    <img src={`/images/tire.svg`} alt="tire" className='tire' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>
                <div className='service'>
                    <img src={`/images/carwash.svg`} alt="carwash" className='carwash' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>
                <div className='service'>
                    <img src={`/images/engine.svg`} alt="engine" className='engine' />
                    <h2>OIL CHANGES</h2>
                    <p>Regular oil and filter changes help your engine<br></br> run smoothly and efficiently.</p>
                </div>
            </div>
        </div>
    )
}

export default Services