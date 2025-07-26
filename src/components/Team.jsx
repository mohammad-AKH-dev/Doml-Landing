import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import TeamCart from "./modules/TeamCart";

function Team() {
  return (
    <section className="team-section mt-32 container mx-auto" id="team">
      <div className="team-section__content-wrapper rounded-2xl bg-[#171717]">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <TeamCart/>
          </SwiperSlide>
           <SwiperSlide>
            <TeamCart/>
          </SwiperSlide>
           <SwiperSlide>
            <TeamCart/>
          </SwiperSlide>
           <SwiperSlide>
            <TeamCart/>
          </SwiperSlide>
           <SwiperSlide>
            <TeamCart/>
          </SwiperSlide>
     
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
