import React, { Component } from 'react'
import "./contact.css"

export class Contactus extends Component {
    render() {
        return (
            
            <div>
                <h2 className='header'>CARTEL</h2>
                <div className='email text-center'>
                <a href="https://accounts.google.com/"><i class="far fa-envelope"><a href="#"> info@cartelnetwork.com</a></i></a>
                </div>
                <p className='para text-center'>
                44, Street Name
               (555) 555-5555
                pincode- 521 006.
                </p>
                
            
            
            <form id="form">
            <h3  className='head'>Enquiry Form</h3>
            <input type="text" placeholder="Name" name="Name" required/>
        <input type="Email" placeholder="Email" name="Email" required/>
        <input type="number" placeholder="Mobile Number" name="Number" required/>
        <button onclick="enquire()"><a href="#">Enquire</a></button>
            </form>
          </div>
        )
    }
}

export default Contactus
