import React from "react";
import GradientText from "./modules/GradientText";
import Button from "./modules/Button";

function EnterPrice() {
  return (
    <section className="enter-price__section mt-32 container mx-auto" id="enterprice">
      <div className="enter-price__section-content flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between mt-2">
        <div className="enter-price__section-left text-center lg:text-start w-full  sm:w-[75%] lg:w-[50%]">
          <GradientText />
          <p
            className="enter-price-section-left__desc  text-[14px] sm:text-[16px]
           md:text-[21px] lg:text-[16px] font-sans mt-8 mx-auto lg:mr-0 lg:ml-0 max-w-[440px] sm:max-w-[580px] lg:max-w-[380px] leading-7"
          >
            DOML is a digital media agency powered by AI technology providing
            real time,
            <span className="text-[#0075FF]">data-driven insights</span> on your
            business and audience. The mission of DOML is to create the best
            experiences for companies through intelligent insights, powerful
            analytics and{" "}
            <span className="text-[#0075FF]">strategic execution.</span>
          </p>
          <div className="w-full h-[1px] mb-3 mx-auto lg:mx-0 bg-white max-w-[400px] mt-6"></div>
          <Button title={"Learn More"} />
        </div>
        <div className="enter-price__section-right  w-full  sm:w-[75%] lg:w-[50%] flex items-center justify-center">
          <img src="/images/pink-cube.png"/>
        </div>
      </div>
    </section>
  );
}

export default EnterPrice;
