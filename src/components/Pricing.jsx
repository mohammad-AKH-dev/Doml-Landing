import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { delay, motion } from "motion/react";
import Button from "./modules/Button";

function Pricing() {
  const pricingLeftVariants = {
    initial: { x: "-10rem", opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: {delay: .2 , duration: 2} },
  };

  const pricingRightVariants = {
    initial : {
      x: '5rem',
      opacity: 0
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: .2 , 
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 2
      }
    }
  }

  return (
    <section className="pricing-section container mx-auto mt-32">
      <div className="pricing-section__content-wrapper  flex flex-col md:flex-row items-center justify-between px-12 rounded-3xl">
        <motion.div
         variants={pricingLeftVariants}
         initial="initial"
         whileInView={"whileInView"} 
         className="pricing-section-left__content sm:translate-x-[3rem] -translate-y-[8rem] md:translate-0 w-full md:w-[50%]">
          <motion.img
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 1.5,
            }}
            src="/images/pink-heart.png"
          />
        </motion.div>
        <motion.div
        variants={pricingRightVariants}
        initial="initial"
        whileInView={"whileInView"}
        
        className="pricing-section-right__content w-full -translate-y-[8rem] md:translate-0 text-center md:text-start md:w-[50%]">
          <motion.h2 
          initial={{y: '-6rem' , scale: .9}}
          whileInView={{y: 0 , scale: 1}}
          transition={{
            delay: .5,
            duration: 3
          }}
          className="pricing-section-right__content-title text-white text-[28px] sm:text-[40px] md:text-[28px] lg:text-[40px] 2xl:text-[50px] font-sans">
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
          </motion.h2>
          <motion.div
           initial={{y: '10rem',opacity: 0}}
           whileInView={{y: 0 , opacity: 1}}
           transition={{
            duration: 2.5
           }}
           className="btn-wrapper mt-6 flex  gap-x-3">
            <input
              type="text"
              className="btn-email rounded-full pr-6 2xl:pr-10 mt-5 pl-6 outline-none flex items-center justify-center p-2 text-[16px]"
              placeholder="Enter your work email"
            />
            <Button title={"Get in touch"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
