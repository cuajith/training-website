import React from 'react';
import "./Courses.css"
import cisco from './Courseimage/cisco.png'


const Courses = () => {
    return (
        <div class="body">
            <div class="card card-1">
                <div class="card-style">
                <img src={cisco} />
                <p>Cisco is the worldwide leader in IT that helps companies seize the opportunities of tomorrow by proving that amazing things can happen when you connect.....</p>
                <button><a href="/cisco" >Know More</a></button>
                </div>
            </div>
        </div>
    )
}
{/*<section className='body'>
            <div class="glassBox">
  <div class="glassBox__imgBox">
    <img src="" alt="" />
    <h3 class="glassBox__title"></h3>
  </div>
  <div class="glassBox__content"></div>
</div>
    */}
export default Courses
