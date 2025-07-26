import React from "react";
import GradientText from "./modules/GradientText";
import Button from "./modules/Button";

function Product() {
  return (
    <section className="product-section mt-48 container mx-auto" id="product">
      <p className="product-section-intro text-[20px] font-sans text-center">
        Trusted by the world’s most ambitious teams.
      </p>
      <div className="product-section__content-wrapper flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between mt-24">
        <div className="product-section__left text-center lg:text-start w-full  sm:w-[75%] lg:w-[50%]">
          <GradientText />
          <p className="product-section-left__desc  text-[14px] sm:text-[16px]
           md:text-[21px] lg:text-[16px] font-sans mt-8 mx-auto lg:mr-0 lg:ml-0 max-w-[440px] sm:max-w-[580px] lg:max-w-[380px] leading-7">
            DOML is a digital media agency powered by AI technology providing
            real time,
            <span className="text-[#0075FF]">data-driven insights</span> on your
            business and audience. The mission of DOML is to create the best
            experiences for companies through intelligent insights, powerful
            analytics and{" "}
            <span className="text-[#0075FF]">strategic execution.</span>
          </p>
          <div className="w-full h-[1px] mb-3 mx-auto lg:mx-0 bg-white max-w-[400px] mt-6"></div>
          <Button title={'Learn More'}/>
        </div>
        <div className="product-section__right relative  w-full  sm:w-[75%] lg:w-[50%] flex items-center justify-center">
          <div className="product-img__wrapper hidden lg:block border border-[#9747FF] absolute rotate-45 max-w-[310px] max-h-[310px] xl:max-w-[371px] 
          xl:max-h-[371px] 2xl:max-w-[471px] lg:top-[4.5rem] lg:left-[6.5rem] xl:top-[5rem] xl:left-[7rem]
          2xl:left-[7rem]  2xl:top-[6rem] 2xl:max-h-[471px] inset-0 border-dashed">
          </div>
            <img src="/images/cube.png"/>
        </div>
      </div>
    </section>
  );
}

export default Product;
