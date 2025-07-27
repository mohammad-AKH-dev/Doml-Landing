import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";

function Button(props) {
  const { title } = props;
  const themeContext = useTheme()

  return (
    <motion.button
      initial={{scale: .8}}
      animate={{scale: 1}}
      transition={{
        delay: .3,
        duration: .5,
        type: 'spring',
        stiffness: 150
        
      }}
      type="button"
      className="button  my-btn cursor-pointer outline-none transition-all group duration-150 rounded-full mt-5 p-2 px-10 lg:px-5 2xl:px-10"
    >
      <div className="rounded-l-[14px] rounded-r-[14px] tracking-wider mn:group-hover:tracking-widest transition-all flex items-center gap-x-4">
        <span>{title}</span>
        <FaArrowRightLong className="group-hover:translate-x-1 transition-all"/>
      </div>
    </motion.button>
  );
}

export default Button;
