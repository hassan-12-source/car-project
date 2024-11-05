import React from 'react'
import './Packages.css'

function Packages() {
    return (
        <div className='packages-container'>
            <div className='text-packags'>
                <h1>SERVICE PACKAGES</h1>
                <p>Regular oil and filter changes are essential for engine health.</p>
            </div>

            <div className='grid-packages'>
                <div className='packages-services'>
                    <h1>FREE SERVICES</h1>
                    <li>Wiper Blade Installation</li>
                    <li>Check Engine Light Code Retrieval</li>
                    <li>Air Filter Replacement Installation</li>
                    <li>Starting and Charging System Evaluation</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>

                <div className='packages-services'>
                    <h1>HOME WASH SERVICES</h1>
                    <li>Spring Maintenance Package</li>
                    <li>Summer Maintenance Package</li>
                    <li>Winter Maintenance Package</li>
                    <li>Smoke Test Diagnostic Service</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>

                <div className='packages-services'>
                    <h1>FLUID SERVICES</h1>
                    <li>Engine Flush Service</li>
                    <li>Transmission Fluid Service</li>
                    <li>Brake Fluid Exchange</li>
                    <li>Coolant Drain and Fill</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>

                <div className='packages-services'>
                    <h1>SYSTEM EVALUATIONS</h1>
                    <li>A/C System Leak Evaluation</li>
                    <li>Steering and Suspension System Evaluation</li>
                    <li>Coolant System Evaluation</li>
                    <li>Cranks No Start Diagnostic Service</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>

                <div className='packages-services'>
                    <h1>MAINTENANCE SERVICES</h1>
                    <li>Headlight Restoration</li>
                    <li>Small Bulb Installation</li>
                    <li>Cabin Air Filter Install</li>
                    <li>Spring Maintenance Package</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>

                <div className='packages-services'>
                    <h1>TUNE UPS</h1>
                    <li>Small Bulb Installation</li>
                    <li>Cranks No Start Diagnostic Service</li>
                    <li>Engine Cooling System Check</li>
                    <li>Headlight Restoration</li>
                    <div className='price'>
                        <span>$25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages