import React from 'react'

export default function Services() {
  return (
    <div>
        <div className="servicesheading">Services</div>
        <div className="homeservice">
        <h5>
          SERVICES <span> PROVIDED</span>
        </h5>
        <h2>
          Empowering Web Presence with
          <br /> Innovative Solutions
        </h2>
        <div className="cards">
          <div className="card1 card">
            <i className="bx bxs-paint"></i>
            <h4>Graphics Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
              deleniti. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card1 card">
            <i className="bx bx-code-alt"></i>
            <h4>Web Develpment</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
              deleniti. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card1 card">
            <i className="bx bxs-wrench"></i>
            <h4>Maintainance</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
              deleniti. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="serviceproducts">
        <div className="produchimg">
            <img src="/aboutproduct.jpg" alt="" />
        </div>
        <div className="productdesc">
            <h2>Opening Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis, ipsum doloribus aperiam omnis animi?</p>
            <button className='topbutton'><span>Browse Products</span></button>
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
                <img src="/pngegg.png" alt="" />
                <img src="/pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src="/images.jpg" alt="" className="personimg" />
              </div>
              <p>Mahmudur Rahman</p>
              <p>Business Owner</p>
            </div>
            <div className="carousel-item">
              <div className="iconImage">
                <img src="/pngegg.png" alt="" />
                <img src="/pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src="/images.jpg" alt="" className="personimg" />
              </div>
              <p>Mahmudur Rahman</p>
              <p>Business Owner</p>
            </div>
            <div className="carousel-item">
              <div className="iconImage">
                <img src="/pngegg.png" alt="" />
                <img src="/pngegg.png" alt="" />
              </div>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                ratione earum aliquid itaque placeat nam illum cum ducimus
                aspernatur voluptatem
              </h4>
              <div className="image-container">
                <img src="/images.jpg" alt="" className="personimg" />
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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, molestias!</p>
        <button className='topbutton'><span>Start Talking</span></button>
      </div>
    </div>
  )
}
