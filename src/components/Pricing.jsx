import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import Button from "./modules/Button";

function Pricing() {
  return (
    <section className="pricing-section container mx-auto mt-32">
      <div className="pricing-section__content-wrapper  flex flex-col md:flex-row items-center justify-between px-12 rounded-3xl">
        <div className="pricing-section-left__content sm:translate-x-[3rem] -translate-y-[8rem] md:translate-0 w-full md:w-[50%]">
          <img src="/images/pink-heart.png" />
        </div>
        <div className="pricing-section-right__content w-full -translate-y-[8rem] md:translate-0 text-center md:text-start md:w-[50%]">
          <h2 className="pricing-section-right__content-title text-white text-[28px] sm:text-[40px] md:text-[28px] lg:text-[40px] 2xl:text-[50px] font-sans">
            Get exponential reach via{" "}
            <FancyText
              gradient={{ from: "#5200FF", to: "#FF2DF7", type: "linear" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
              className="hidden! md:inline-block!"
            >
              AI Marketing
            </FancyText>
            <span className="block md:hidden font-bold">AI Marketing</span>
          </h2>
          <div className="btn-wrapper mt-6 flex  gap-x-3">
            <input
              type="text"
              className="btn-email rounded-full pr-6 2xl:pr-10 mt-5 pl-6 outline-none flex items-center justify-center p-2 text-[16px]"
              placeholder="Enter your work email"
            />
            <Button title={'Get in touch'}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
