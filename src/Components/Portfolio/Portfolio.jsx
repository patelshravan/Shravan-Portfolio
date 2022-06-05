import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Schoolinks from "../../img/schoolinks.png";
import TaxiCab from "../../img/TaxiCab.png";
import PWT from "../../img/PWT.PNG";
import Weather from "../../img/weather.jpeg";
import Flappy from "../../img/flappy.jpeg";
import F2h from "../../img/f2h.png";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Porfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Schoolinks} alt="" />
          <span id="span1">Schoolinks Applications</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PWT} alt="" />
          <span id="span3">PlayWithText</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={TaxiCab} alt="" />
          <span id="span2">Taxi Cab App</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weather} alt="" />
          <span id="span4">Weather Mobile App</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Flappy} alt="" />
          <span id="span5">Flappy Bird Clone</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={F2h} alt="" />
          <span id="span6">Farm2Home</span>
          <br />
          <span id="span7">(Development in progress !)</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
