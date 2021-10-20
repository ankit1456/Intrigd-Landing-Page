import "./_screenshot.scss";
import Slider from "react-slick";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const Screenshot = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    lazyLoad: true,
    padSlides: true,
    accessibility: true,

    responsive: [
      {
        breakpoint: 1070,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 868,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id='screenshot' className='screenshot'>
      <h2>APP SCREENSHOTS</h2>

      <Slider {...settings}>
        {[
          "https://intrigd.co/assets/images/about1/14.jpg",
          "https://intrigd.co/assets/images/about1/11.jpg",
          "https://intrigd.co/assets/images/about1/8.jpg",
          "https://intrigd.co/assets/images/about1/12.jpg",
          "https://intrigd.co/assets/images/about1/17.jpg",
          "https://intrigd.co/assets/images/about1/9.jpg",
        ].map((x, i) => (
          <div
            onClick={() => {
              setSelectedImg(x);
              handleOpen();
            }}
            key={i}
            className='screenshot__imgContainer'
          >
            <img src={x} alt='' />
          </div>
        ))}
      </Slider>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img style={{ height: "50rem" }} src={selectedImg} alt='' />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Screenshot;
