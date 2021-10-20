import "./_about.scss";
import { BsCheckLg } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div id='about' className='aboutWrapper'>
      <section className='about'>
        <div className='about__left'>
          <Slide direction='up'>
            <img src='https://intrigd.co/assets/images/about1/01.png' alt='' />
          </Slide>
        </div>
        <div className='about__right'>
          <h2> ABOUT INTRIGD</h2>
          <p>An opinion aggregator for long format content .</p>

          <li>
            <BsCheckLg color='#39BDF2' />
            presents unbiased content with a vast coverage across industries and
            daily events
          </li>
          <li>
            <BsCheckLg color='#39BDF2' />
            helps in effortless consumption of opinions through meaningful
            summaries
          </li>

          <button className='about__btn'>Download</button>
        </div>
      </section>
    </div>
  );
};

export default About;
