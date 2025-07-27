import React, { useEffect, useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { motion } from "motion/react";
import Button from "./modules/Button";

function Landing() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const myInterVal = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(myInterVal);
  }, []);

  const landingLeftVariants = {
    initial: {opacity: 0, x: "-10rem" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: .2,
        duration: 2,
      },
    },
  };

  const landingRightVariants = {
    initial: { opacity: 0, x: "10rem" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 2,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <section className="landing-section mt-24 overflow-x-hidden! container mx-auto">
      <div className="landing-section-content__wrapper flex flex-col-reverse md:flex-row gap-y-12 items-center justify-between">
        <motion.div
          initial="initial"
          animate="animate"
          variants={landingLeftVariants}
          className="landing-content__left-section text-center md:text-start"
        >
          <motion.h1 variants={childVariants} className="landing-section__title text-[32px] sm:text-[45px] md:text-[32px] lg:text-[40px] xl:text-[60px] font-sans tracking-wider flex flex-col">
            {/* gradient text */}
            <FancyText
              gradient={{ from: "#5200FF", to: "#FF2DF7", type: "linear" }}
              animate={animate}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              AI Marketing.
            </FancyText>
            Optimized Reach.
          </motion.h1>
          <motion.p variants={childVariants} className="landing-section__desc mt-8  mb-4 text-[17px] sm:text-[19px] md:text-[17px] lg:text-[19px] xl:text-[25px] max-w-[400px] sm:max-w-[500px]">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </motion.p>
          <Button title={"Get Started"} />
        </motion.div>
        <motion.div
          initial="initial"
          variants={landingRightVariants}
          animate="animate"
          className="landing-content-right__section flex items-center justify-center"
        >
          <img
            src="/images/planet.png"
            className=" mn:max-w-[380px] sm:max-w-[440px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
