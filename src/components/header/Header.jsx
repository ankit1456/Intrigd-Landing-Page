import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <header className={`header flex-space-around ${show && "header-white"}`}>
        <div className='header__logo'>
          <img src='https://intrigd.co/assets/images/logo.png' alt='' />
        </div>
        <div className='header__menu flex-space-between'>
          <li>
            <a href='#root'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#feature'>Feature</a>
          </li>
          <li>
            <a href='#screenshot'>Screenshot</a>
          </li>
          <li>
            <a href='#testimonial'>Testimonial</a>
          </li>
          <li>
            <a href='#newsletter'>Contact</a>
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
