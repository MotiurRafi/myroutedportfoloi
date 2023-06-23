import React,{useEffect,useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




export default function Header() {
  let Link      = Scroll.Link;
  let Button    = Scroll.Button;
  let Element   = Scroll.Element;
  let Events    = Scroll.Events;
  let scroll    = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;


  const [showHeader, setShowHeader] = useState(true);
  const [headerbgclr, setHeaderBgClr] = useState(false);
  let lastScrollTop = 0;
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;
    const screenHeight = window.innerHeight;
    const pageHeight = document.body.offsetHeight;
    
     
    if (scrollTop > 100) {
      setHeaderBgClr(true)
    } else {
      setHeaderBgClr(false)
    }

    if (scrollDirection === 'down') {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    if(scrollTop+screenHeight >= pageHeight){
      setShowHeader(true)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <header style={{top:showHeader?0:"-81px",backgroundColor:headerbgclr?"#001D38":"transparent"}}>
        <div className="logo">
          <h3>.rafi</h3>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>Home</NavLink></li>
            <li><NavLink to="/About" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>About</NavLink></li>
            <li><NavLink to="/Services" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>Services</NavLink></li>
            <li><NavLink to="/Portfolio" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>Portfolio</NavLink></li> 
            <li><NavLink to="/Blog" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>Blog</NavLink></li>
            <li><NavLink to="/Contact" onClick={() => {scroll.scrollToTop();}}spy={false} offset={0} delay={0}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className="contactme">
        <NavLink to="/Contact"><button className="topbutton"><span>Contact Me</span></button></NavLink>
          
        </div>
      </header>
    </div>
  );
}
