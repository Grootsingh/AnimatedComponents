"use client";

import React from "react";
import { motion } from "framer-motion";
import { womenData } from "@/data";

function WomenAccordion() {
  const [isActive, setActive] = React.useState(false);

  const GrowParent = {
    Grow: (value) => ({
      flexGrow: value ? 6 : 1,
    }),
  };

  const StaggerdChildren = {
    fadeInAndMoveY: ({ bool, delay }) => ({
      opacity: bool ? 1 : 0,
      translateY: bool ? "0px" : "8px",
      transition: {
        delay: bool ? delay : 0,
        duration: bool ? 0.2 : 0,
        type: "tween",
      },
    }),
    hidden: {
      opacity: 0,
      translateY: "8px",
    },
  };
  return (
    <div
      onMouseLeave={() => setActive(false)}
      className="h-[310px] md:h-[350px] lg:h-[680px] w-full overflow-hidden flex gap-1"
    >
      {womenData.map(({ img, alt, title, heading, description }) => (
        <motion.div
          initial={false}
          variants={GrowParent}
          custom={isActive === alt}
          animate="Grow"
          key={alt}
          onMouseEnter={() => setActive(alt)}
          onClick={() => setActive(alt)}
          className={`aspect-square relative flex-1 `}
        >
          {isActive === alt ? (
            <div className="absolute z-10 inset-0 flex items-center justify-center  text-white ">
              <div className="w-[80%] h-fit flex flex-col items-center">
                <motion.p
                  custom={{ bool: isActive === alt, delay: 0.3 }}
                  animate={"fadeInAndMoveY"}
                  initial={"hidden"}
                  variants={StaggerdChildren}
                  className="pb-[2px] md:pb-1 text-center"
                >
                  {title}
                </motion.p>
                <motion.p
                  custom={{ bool: isActive === alt, delay: 0.4 }}
                  animate={"fadeInAndMoveY"}
                  initial={"hidden"}
                  variants={StaggerdChildren}
                  className="pb-1 text-xl md:text-2xl lg:text-4xl font-bold text-center"
                >
                  {heading}
                </motion.p>
                <motion.p
                  custom={{ bool: isActive === alt, delay: 0.5 }}
                  animate={"fadeInAndMoveY"}
                  initial={"hidden"}
                  variants={StaggerdChildren}
                  className="pb-1 hidden sm:block lg:pb-6  text-center"
                >
                  {description}
                </motion.p>
                <motion.button
                  custom={{ bool: isActive === alt, delay: 0.5 }}
                  animate={"fadeInAndMoveY"}
                  initial={"hidden"}
                  variants={StaggerdChildren}
                  className="rounded-full font-semibold hover:bg-red-700 bg-custom-red text-sm py-2 px-6"
                >
                  Read More
                </motion.button>
              </div>
            </div>
          ) : undefined}

          <motion.img
            animate={{
              filter: isActive === alt ? "brightness(0.8)" : "brightness(1)",
            }}
            src={img}
            alt={alt}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default WomenAccordion;
