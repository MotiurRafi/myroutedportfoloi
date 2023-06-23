import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="aboutheading">Contact</div>
      <div className="contactcontent">
        <div className="contactform">
          <h3>Get in Touch</h3>
          <form action="">
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message"></textarea>
            <input type="text" name="" placeholder="Enter Your Name"/>
            <input type="email" name="" placeholder="Enter Email Address"/>
            <input type="text" className="subjectinput" name="" placeholder="Enter Subject"/>
            <button type="submit" className="topbutton"><span>Send Message</span></button>
          </form>
        </div>
        <div className="locationbox">
          <div className="loaction">
            <i class='bx bx-home-alt-2'></i>
            <div className="locationdetail">
              <h5>Sylhet Sadar, Sylhet.</h5>
              <p>Airport Road</p>
            </div>
          </div>
          <div className="phonenum">
            <i class='bx bx-phone'></i>
            <div className="phonedetail">
              <h5>+88 0172342****</h5>
              <p>Sat to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="mailbox">
            <i class='bx bx-envelope'></i>
            <div className="maildetail">
              <h5>motiurrafi601@gmail.com</h5>
              <p>Send us your query anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
