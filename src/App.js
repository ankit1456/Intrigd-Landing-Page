import "./sass/_app.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Feature from "./components/feature/Feature";
import Screenshot from "./components/screenshot/Screenshot";
import Testimonial from "./components/testimonial/Testimonial";
import NewsLetter from "./components/newsletter/NewsLetter";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
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
    <>
      <div className='app__main'>
        <Hero />
        <About />
        <Feature />
        <Screenshot />
        <Testimonial />
        <NewsLetter />
      </div>

      {show && (
        <a href='#hero' className='moveToTop'>
          <FaArrowAltCircleUp color='#fff' size={25} />
        </a>
      )}
    </>
  );
}

export default App;
