import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="home">
        <bg className="personimg"><img src="/Menimagegreen.png" alt="" /></bg>
        <div className="homecontainer">
          <div className="intro">
            <h3>Hello This Is_</h3>
            <h1>Motiur Rahman Rafi</h1>
            <div className="typedtext">
              <h3>And I Am A &nbsp;</h3>
              <span>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    'Web Developer',2000, '',0, 'Web Designer', 2000, 'Coder', 2000
                  ]}
                  speed={10}
                  deletionSpeed={20}
                  cursor={true}
                  repeat={Infinity}
                  
                />
              </span>
            </div>
          </div>
          <div className="media">
            <a href="">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </div>
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
      <div className="homeportfolio">
        <h5>PORTFOLIOS</h5>
        <h2>
          Some of my awesome
          <br /> stuffs here
        </h2>
        <div className="portfolioImages">
          <div className="portfolioImagesrow1">
            <div className="imagebx1 imagebx">
              <div className="desc">
              <h4>Metal Ink Fountain Pen</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quas non nemo deleniti magnam.</p>
              <button ><a href="https://www.daraz.com.bd/products/6006-i182652628-s1126602419.html?spm=a2a0e.searchlistcategory.list.127.18e69a4eowJ8l1&search=1" target="_blank"><i className='bx bx-link-external'></i></a></button>
            </div>
              <img src="/mystuff1.jpg" alt="" />
            </div>
            <div className="imagebx1 imagebx">
              <div className="desc">
              <h4>Samsung Galaxy A72</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quas non nemo deleniti magnam.</p>
              <button><a href="https://www.daraz.com.bd/products/samsung-galaxy-a72-smartphone-mobile-8gb-ram256gb-rom-5000mah-battery-i189577455-s1137282861.html?spm=a2a0e.searchlistcategory.list.20.708f585etudWSh&search=1" target="_blank"><i className='bx bx-link-external'></i></a></button>
            </div>
              <img src="/mystuff2.jpg" alt="" />
            </div>
          </div>
          <div className="portfolioImagesrow2">
            <div className="imagebx1 imagebx">
              <div className="desc">
              <h4>Uv400</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quas non nemo deleniti magnam.</p>
              <button><a href="https://www.daraz.com.bd/products/2021-uv400-i193744789-s1140294871.html?spm=a2a0e.searchlist.list.39.786c6ae9XGqpWE&search=1" target="_blank"><i className='bx bx-link-external'></i></a></button>
            </div>
              <img src="/mystuff3.jpg" alt="" />
            </div>
            <div className="imagebx1 imagebx">
              <div className="desc">
              <h4>Muuchstac Ocean Moisturizer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quas non nemo deleniti magnam.</p>
              <button><a href="https://www.daraz.com.bd/products/muuchstac-mens-ocean-moisturizer-sunscreen-matte-look-spf-18-cream-with-turmeric-aloe-vera-beads-nonsticky-water-resistant-100-ml-i286447579-s1284671569.html?spm=a2a0e.searchlistcategory.list.3.23fe5ca7JJGZGO&search=1" target="_blank"><i className='bx bx-link-external' ></i></a></button>
            </div>
              <img src="/mystuff4.jpg" alt="" />
            </div>
            <div className="imagebx1 imagebx">
              <div className="desc">
              <h4>SKMEI</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quas non nemo deleniti magnam.</p>
              <button><a href="https://www.daraz.com.bd/products/skmei-9185-i113872656-s1031230695.html?spm=a2a0e.searchlistcategory.list.52.35e21406wT3Ofw&search=1" target="_blank"><i className='bx bx-link-external'></i></a></button>
            </div>
              <img src="/mystuff5.jpg" alt="" />
            </div>
          </div>
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
          <img src="/men2.jpg" alt="" />
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
        <button className="topbutton"><span>Start Talking</span></button>
      </div>
    </>
  );
}
