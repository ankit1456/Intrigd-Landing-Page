import "./_hero.scss";
import Header from "./../header/Header";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <Header />

      <div className='hero__content flex-space-around'>
        <div className='hero__content__left'>
          <h1>
            Intrigd The Ultimate
            <br />
            Reading App.
          </h1>

          <div className='hero__buttons'>
            <Link to='#'>
              <span>
                <AiFillApple size={20} />
                Apple Store
              </span>
            </Link>
            <Link to='#'>
              <span>
                <FaTelegramPlane size={20} />
                Google Play{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className='hero__content__right'>
          <img
            src='https://intrigd.co/assets/images/about1/inner-1.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
