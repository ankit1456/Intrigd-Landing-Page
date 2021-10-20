import "./_newsletter.scss";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { Slide } from "react-awesome-reveal";
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <div className='newsletter__form'>
        <h2> DOWNLOAD OUR APP</h2>

        <div className='newsletter__form__btns' id='newsletter'>
          <Link to='#'>
            <span>
              <AiFillApple size={22} /> APP STORE
            </span>
          </Link>
          <Link to='#'>
            <span>
              {" "}
              <AiFillAndroid size={22} /> PLAY STORE
            </span>
          </Link>
        </div>
      </div>

      <div className='newsletter__email__form'>
        <div className='newsletter__email__form__left'>
          <h2>CONTACT US</h2>

          <li>
            <span>
              <BsFillTelephoneFill />
            </span>
            <span> +91-8025043077</span>
          </li>

          <li>
            {" "}
            <span>
              <AiOutlineMail />
            </span>
            <span> +91-8025043077</span>
          </li>
        </div>
        <div className='newsletter__email__form__right'>
          <div className='input__group'>
            <input type='text' placeholder='Name' />
          </div>
          <div className='input__group'>
            <input type='email' placeholder='Email' />
          </div>
          <div className='input__group'>
            <input type='text' placeholder='Subject' />
          </div>
          <div className='input__group'>
            <textarea type='text' placeholder='Message' />
          </div>

          <button> SUBMIT</button>
        </div>
      </div>

      <div className='newsletter__footer'>
        <div className='newsletter__footer__content'>
          <p>Copyright © . All Rights Reserved</p>
          <p className='newsletter__footer__content__p'>Terms & Conditions</p>
          <p className='privacy'>Privacy and Policy</p>

          <div className='newsletter__footer__links'>
            <Link to='#'>
              <span>
                <FaFacebookF />{" "}
              </span>
            </Link>
            <Link to='#'>
              <span>
                <AiOutlineTwitter />{" "}
              </span>
            </Link>
            <Link to='#'>
              <span>
                <GrLinkedinOption />{" "}
              </span>
            </Link>
            <Link to='#'>
              <span>
                <AiOutlineInstagram />{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
