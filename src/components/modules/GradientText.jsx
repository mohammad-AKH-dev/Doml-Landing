import React, { useEffect, useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";

function GradientText() {
    const [animate,setAnimate] = useState(false)
    
      useEffect(() => {
        const myInterVal = setInterval(() => {
            setAnimate(prev => !prev)
        },1000)
    
        
    
        return () => clearInterval(myInterVal)
      },[])
  return (
    <h1 className="landing-section__title  text-[32px] sm:text-[40px] md:text-[52px] lg:text-[40px] font-sans tracking-wider flex flex-col">
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
    </h1>
  );
}

export default GradientText;
