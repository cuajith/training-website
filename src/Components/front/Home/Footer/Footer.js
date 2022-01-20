import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <a href="#"><img className="navbar-brand" src='./images/Cartel-Logo.png' /></a>
                        <p class="text-justify">Copyright 2016 © Cartel Network Solutions Pvt Ltd. All Rights Reserved     </p>
                        <ul class="linkedin-list">
                        <li><a class="linkedin" href="https://www.linkedin.com/signup"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6 className='contact'>Contact Us</h6>
                        
                        <a href="https://accounts.google.com/"><i class="far fa-envelope"><a className='email' href="#"> info@cartelnetwork.com</a></i></a>
                        
                        
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6 className='contact'>Training</h6>
                        <ul class="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="">Citrix</a></li>
                            <li><a href="">Courses</a></li>
                            <li><a href="">Training</a></li>
                            <li><a href="">Contactus</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="container2">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">
                        © 2021 Cartel Network Solutions Pvt Ltd. Proudly powered by <a href="https://digiapricus.com/">Digi Apricus Pvt ltd</a> 
                        </p>
                    </div>

                </div>
            </div>
        </footer>

    )
}
export default Footer