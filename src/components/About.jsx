import React from "react";

export default function About() {
  return (
    <div>
      <div className="aboutheading">About Me</div>
      <div className="videocontainer">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/m2hMDU8kuO4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="smallIntro">
          Hi there, I am Rafi. I am designer, artist, cat lover and I would like
          to share with you some of my ideas.
        </div>
      </div>
      <div className="homeabout">
        <div className="bgabout">About</div>
        <div className="aboutdesc">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            incidunt beatae quae ea esse dicta, velit totam et tempore? Aperiam
            fugiat ipsam nam porro beatae, optio mollitia delectus possimus
            libero.
          </p>
          <button className="topbutton"><span>Download CV</span></button>
        </div>
        <div className="aboutimage">
          <img src=" /men2.jpg" alt="" />
        </div>
      </div>
      <div className="counter">
        <div className="countercard">
          <h2>120</h2>
          <p>Total Projects</p>
        </div>
        <div className="countercard">
          <h2>20</h2>
          <p>Ongoing Projects</p>
        </div>
        <div className="countercard">
          <h2>92%</h2>
          <p>Job Success</p>
        </div>
      </div>
      <div className="hometestimonial">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="iconImage">
                <img src=" /pngegg.png" alt="" />
                <img src=" /pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src=" /images.jpg" alt="" className="personimg" />
              </div>
              <p>Mahmudur Rahman</p>
              <p>Business Owner</p>
            </div>
            <div className="carousel-item">
              <div className="iconImage">
                <img src=" /pngegg.png" alt="" />
                <img src=" /pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src=" /images.jpg" alt="" className="personimg" />
              </div>
              <p>Mahmudur Rahman</p>
              <p>Business Owner</p>
            </div>
            <div className="carousel-item">
              <div className="iconImage">
                <img src=" /pngegg.png" alt="" />
                <img src=" /pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src=" /images.jpg" alt="" className="personimg" />
              </div>
              <p>Mahmudur Rahman</p>
              <p>Business Owner</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="discuss">
        <h2>Let's discuss for a project</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          molestias!
        </p>
        <button className="topbutton"><span>Start Talking</span></button>
      </div>
    </div>
  );
}
