import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSlack } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TeamCart from "./modules/TeamCart";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Team() {
  const [testimonials, setTestimonials] = useState([
    {
      img: "/images/team/user-1.png",
      quote:
        "This platform helped me connect with the perfect audience. Everything is just so intuitive.",
      name: "Emily Carter",
      role: "Content Strategist, Marketing Team",
      platform: "Slack",
      icon: <FaSlack className="text-[21px] xl:text-[24px]" />,
    },
    {
      img: "/images/team/user-2.png",
      quote:
        "I’ve never experienced such smooth collaboration across teams before. DOML made it possible.",
      name: "James Anderson",
      role: "Product Designer, UX Department",
      platform: "Discord",
      icon: <AiFillDiscord className="text-[21px] xl:text-[24px]" />,
    },
    {
      img: "/images/team/user-3.png",
      quote:
        "Thanks to DOML, our outreach campaign grew 3x faster with better targeting.",
      name: "Daniel Smith",
      role: "Marketing Lead, Growth Team",
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-[21px] xl:text-[24px]" />,
    },
    {
      img: "/images/team/user-4.png",
      quote:
        "A powerful and easy-to-use tool that really understands the needs of fast-growing teams.",
      name: "Sophia Miller",
      role: "Tech Lead, Development Unit",
      platform: "GitHub",
      icon: <FaGithub className="text-[21px] xl:text-[24px]" />,
    },
    {
      img: "/images/team/user-5.png",
      quote:
        "Our workflow has never been this streamlined. Highly recommend for remote teams.",
      name: "Olivia Thompson",
      role: "Operations Manager, Global Teams",
      platform: "Youtube",
      icon: <FaYoutube className="text-[21px] xl:text-[24px]" />,
    },
  ]);
  return (
    <section className="team-section mt-32 overflow-x-hidden! container mx-auto" id="team">
      <div className="team-section__content-wrapper rounded-2xl text-white dark:bg-[#171717]!">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {testimonials.map((testimonial,index) => (
            <SwiperSlide key={index}>
              <TeamCart {...testimonial} children={testimonial.icon} />
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
