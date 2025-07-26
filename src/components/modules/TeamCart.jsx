import React, { useEffect, useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { AiFillDiscord } from "react-icons/ai";

function TeamCart(props) {
  const [animate, setAnimate] = useState(false);
  const { img, name, quote, platform, children , role} = props;

  useEffect(() => {
    const myInterVal = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(myInterVal);
  }, []);
  return (
    <div className="team-member-cart rounded-2xl p-12 xl:p-24 flex flex-col md:flex-row gap-x-10 items-center md:items-start justify-center">
      <div className="team-member-cart__img rounded-4xl">
        <img
          src={img}
          className=" team-member-img  max-w-[282px] mn:max-h-[282px] rounded-4xl  mn:min-w-[282px] mn:min-h-[282px] object-contain"
        />
      </div>
      <div className="team-member-cart__infos text-center md:text-start mt-6 pt-6 xl:py-2">
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
          className="text-[22px] hidden! md:inline-block! xl:text-[25px] mt-2 mb-2 md:mb-0"
        >
          {name}
        </FancyText>
        <h4 className="text-[22px] block md:hidden xl:text-[25px] mt-2 mb-2 md:mb-0">
          {name}
        </h4>
        <span className="team-member-role block text-[15px] sm:text-[17px] xl:text-[21px] font-sans">
          {role}
        </span>
        <div className="team-member__platform font-sans flex items-center justify-center md:justify-start gap-x-3 mt-2">
          {children} {platform}
        </div>
      </div>
    </div>
  );
}

export default TeamCart;
