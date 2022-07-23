import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ganesh from "../../img/Ganesh.jpg";
import Shubham from "../../img/Shubham.png";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: Ganesh,
      name: "Ganesh Patel",
      designation: "Senior Research Engineer (Quill Bot)",
      review:
        "He has a strong grasping ability and a positive attitude toward work. His communication abilities are also excellent. Shravan has excellent communication skills, and I never felt isolated from him. He also had a positive attitude about work and was always willing to try new things. I believe he needs to improve his attention to detail.",
    },
    {
      img: Shubham,
      name: "Shubham Chitransh",
      designation: "Head of operations (EDevelopers World)",
      review:
        "Before undertaking the assignment, he attempts to properly comprehend it and then asks questions. He does not give up lightly and will do his absolute best to complete a task. Shravan is a dedicated worker who is also a quick learner. He does his best to complete the responsibilities assigned to him. He understands React well, but he may concentrate more on the logical aspects.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Testimonials</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.name}</span>
                <span>{client.designation}</span>
                <br />
                <span id="review">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
