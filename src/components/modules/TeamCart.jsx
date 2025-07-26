import React, { useEffect, useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { AiFillDiscord } from "react-icons/ai";

function TeamCart() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const myInterVal = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(myInterVal);
  }, []);
  return (
    <div className="team-member-cart rounded-2xl p-12 xl:p-24 flex flex-col md:flex-row items-center md:items-start justify-center">
      <div className="team-member-cart__img">
        <img
          src="/images/team/member-1.png"
          className="mn:ml-4 ml-4 sm:ml-8 md:ml-0 min-w-[282px] min-h-[282px] object-contain"
        />
      </div>
      <div className="team-member-cart__infos text-center md:text-start md:pt-6 xl:py-2">
        <p
          className="team-member-desc text-[15px] sm:text-[17px] -mt-4 
        mb-2 md:mt-0 md:mb-0 md:text-[15px] lg:text-[17px]  xl:text-[21px] font-sans"
        >
          It's all about getting your message in front of the right audience and
          creating those valuable relationships. Learn More about how DOML can
          help you do just that - all with a simple, easy-to-use platform.
        </p>
        <FancyText
          gradient={{ from: "#5200FF", to: "#FF2DF7", type: "linear" }}
          animate={animate}
          animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
          animateDuration={2000}
          className="text-[22px] hidden! md:inline-block xl:text-[25px] mt-2 mb-2 md:mb-0"
        >
          Amaka Micheal
        </FancyText>
        <h4 className="text-[22px] block md:hidden xl:text-[25px] mt-2 mb-2 md:mb-0">Amaka Micheal</h4>
        <span className="team-member-role block text-[15px] sm:text-[17px] xl:text-[21px] font-sans">
          Media Executive, Buying & Control
        </span>
        <div className="team-member__platform font-sans flex items-center justify-center md:justify-start gap-x-1 mt-2">
          <AiFillDiscord className="text-[21px] xl:text-[24px]" /> Discord
        </div>
      </div>
    </div>
  );
}

export default TeamCart;
