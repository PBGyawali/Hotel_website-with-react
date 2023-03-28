import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
     //code for navigation menu in heading section
    <header id="header">
      <nav className="navbar navbar-expand-lg bg-dark fixed-top text-uppercase">
        <div className="container">
          <Link
            to="hero"
            className="navbar-brand text-light"
            spy={true}
            smooth={true}
            duration={500}
          >
            Hotel Gautam Raj
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="gallery"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="rooms"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* adding a header image,welcome text and link to contact us button*/}
      <section id="home" class="highlight mt-8">
      {/* adding a random image from cdn server*/}
    <img src="https://random.imagecdn.app/1000/600"  alt="Header"></img>
      <div class="intro mt-6 pt-6 ">
      <div class="containe">
      <h1 class="d-inline-block">Welcome to Hotel Gautam Raj</h1></div>
        <p class="d-inline-block">Your Home Away From Home</p>
        <div class="links">
            <a href="#contact" class="button bg-light">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact Us</a>
        </div>
      </div>
      </section>
    </header>

  );
}

export default Header;
