import React from "react";
import GradientText from "./modules/GradientText";
import Button from "./modules/Button";

function Marketing() {
  return (
    <section className="marketing-section mt-32 container mx-auto" id="marketplace">
      <div className="marketing-section__content-wrapper flex flex-col lg:flex-row items-center justify-between">
        <div className="marketing-section__left">
          <img src="/images/magnet.png" />
        </div>
        <div className="marketing-section__right text-center lg:text-start xl:pr-16">
          <GradientText />
          <p
            className="marketing-section-left__desc  text-[14px] sm:text-[16px]
           md:text-[21px] lg:text-[16px] font-sans mt-8 mx-auto lg:mx-0 max-w-[440px] sm:max-w-[580px] lg:max-w-[380px] leading-7"
          >
            It's all about getting your message in front of the right audience
            and creating those valuable{" "}
            <span className="text-[#0075FF]">relationships.</span>{" "}
            relationships. Learn More about how DOML can help you do just that -
            all with a simple, easy-to-use platform.
          </p>
          <div className="w-full market-border h-[1px] mb-3 mx-auto lg:mx-0 bg-[#000] dark:bg-white max-w-[400px] mt-6"></div>
          <Button title={"Learn More"} />
        </div>
      </div>
    </section>
  );
}

export default Marketing;
