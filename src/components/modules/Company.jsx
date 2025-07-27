import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";

function Company(props) {
  const { path, title, darkPath } = props;
  const themeContext = useTheme();

  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity: 1}}
     transition={{delay: .5,duration: 2}}
     className={`company mx-auto`}>
      <img
        src={darkPath && themeContext.theme === "dark" ? darkPath : path}
        alt={title}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

export default Company;
