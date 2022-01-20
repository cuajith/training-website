import React from 'react'
import "./Cisco.css"
import CiscoDescription from './CiscoDescription'


function Cisco() {
    return (
        <section>
            <div className='cisco-top-links'>
                <a href="/">Home &gt;</a>
                <a href='/courses'>Courses &gt;</a>
                <a href='/cisco'>Cisco</a>
            </div>
            <div className='content-body'>
                <img
                    className="Cisco-image"
                    src="./images/cisco1.jpg"
                    alt="First slide"
                />
                <p>Today’s dynamic IT technologies are driving Cisco’s redesign of our training and certification programs
                    to prepare students, engineers, and software developers for success in the industry’s most critical job
                </p>
                
            </div>
            <CiscoDescription />
        </section>
    )
}

export default Cisco
