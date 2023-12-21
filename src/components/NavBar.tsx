import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHamburgerToggled, setHamburgerToggled] = useState<boolean>(false);
  const { pathname } = useLocation();



  useEffect(() => {
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
    const navLinks = document.querySelector(".nav-links") as HTMLUListElement;
    const links = document.querySelectorAll(".nav-links li");

    const handleClick = () => {
      // Animate Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });

      // Hamburger Animation
      hamburger.classList.toggle("toggle");

      // Close the navbar when a link is clicked
      setIsOpen(!isOpen);
      setHamburgerToggled(!isHamburgerToggled);
    };

    hamburger.addEventListener('click', handleClick);

    return () => {
      // Cleanup: Remove the event listener when the component is unmounted
      hamburger.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelector(".nav-links") as HTMLUListElement;

    // Close the navbar when the pathname changes
    setIsOpen(false);
    setHamburgerToggled(false);

    // Add a class to temporarily disable transitions
    navLinks.classList.add("no-transition");

    // Enable transition after a short delay (adjust the delay as needed)
    setTimeout(() => {
      navLinks.classList.remove("no-transition");
    }, 500);
  }, [pathname]);

  return (
    <>
      <nav>
        <div className="logo">
          <img src="logo.svg" alt="Logo Image" />
        </div>
        <div className={`hamburger ${isHamburgerToggled ? 'toggle' : ''}`} >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/art-and-crafts">Art Crafts</Link></li>
          <li><Link to="/shirts">Shirts</Link></li>
          <li><Link to="/signs">Signs</Link></li>
          <li><Link to="/special-occasions">Special Occasions</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
