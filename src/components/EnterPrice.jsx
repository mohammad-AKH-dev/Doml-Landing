import React from "react";
import GradientText from "./modules/GradientText";
import Button from "./modules/Button";
import { motion } from "motion/react";

function EnterPrice() {
  const enterLeftVariants = {
    initial: { opacity: 0, x: "-10rem" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 2,
      },
    },
  };

  const enterRightVariants = {
    initial: { opacity: 0, x: "10rem" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 2,
      },
    },
  };

  return (
    <section
      className="enter-price__section mt-32 container mx-auto overflow-x-hidden!"
      id="enterprice"
    >
      <div className="enter-price__section-content flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between mt-2">
        <motion.div
          variants={enterLeftVariants}
          initial="initial"
          whileInView={"whileInView"}
          className="enter-price__section-left text-center lg:text-start w-full  sm:w-[75%] lg:w-[50%]"
        >
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
          <div className="w-full enter-price-border h-[1px] mb-3 mx-auto lg:mx-0 bg-[#000] dark:bg-white max-w-[400px] mt-6"></div>
          <Button title={"Learn More"} />
        </motion.div>
        <motion.div
          variants={enterRightVariants}
          initial="initial"
          whileInView={"whileInView"}
          className="enter-price__section-right  w-full  sm:w-[75%] lg:w-[50%] flex items-center justify-center"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2,
            }}
            src="/images/pink-cube.png"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EnterPrice;
