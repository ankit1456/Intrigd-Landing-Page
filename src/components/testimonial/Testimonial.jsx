import "./_testimonial.scss";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Great thought and perfect implementation. App is very good with its content.",
      author: "Subham Gupta",
      avatar: "https://einfotech.in/images/einfo/shubham.jpeg",
    },
    {
      text: "The best ever news app in the world I would say!!!. I mean it. Delivers exactly what you need",
      author: "James Joel",
      avatar: "https://einfotech.in/images/einfo/jame_sir.jpg",
    },
    {
      text: "Best app with future requirements of youth.",
      author: "Ayush Maheshwari",
      avatar: "https://einfotech.in/images/einfo/ayush.jpeg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    lazyLoad: true,
    padSlides: true,
    accessibility: true,
    arrows: false,
  };
  return (
    <div id='testimonial' className='testimonial'>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div className='testimonial__content'>
            <img src={t.avatar} alt='' />

            <div className='testimonial__content__stars'>
              {[1, 2, 3, 4, 5].map((x, i) => (
                <AiFillStar size={17} color='yellow' key={i} />
              ))}

              <div className='testimonial__bgImage'></div>
            </div>

            <p>{t.text}</p>
            <h5>{t.author}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
