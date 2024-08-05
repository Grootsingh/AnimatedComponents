"use client";

import React from "react";
import { motion } from "framer-motion";
import { menData } from "@/data";

function MenAccordion() {
  const [isActive, setActive] = React.useState(false);

  const GrowParent = {
    Grow: (value) => ({
      flexGrow: value ? 6 : 1,
    }),
  };

  const StaggerdChildren = {
    fadeInAndMoveY: ({ bool, delay }) => ({
      opacity: bool ? 1 : 0,
      translateY: bool ? 0 : "8px",

      transition: {
        delay: bool ? delay : 0,
        duration: bool ? 0.2 : 0,
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
      className="h-[310px] md:h-[350px] lg:h-[680px] w-full overflow-hidden bg-custom-soil flex"
    >
      {menData.map(({ img, alt, heading, description }) => (
        <motion.div
          initial={false}
          variants={GrowParent}
          custom={isActive === alt}
          animate="Grow"
          key={alt}
          onMouseEnter={() => setActive(alt)}
          onClick={() => setActive(alt)}
          className={`aspect-square flex flex-1 overflow-hidden `}
        >
          <motion.div
            className="origin-center flex-1"
            animate={{
              scale: isActive === alt ? 1.1 : 1,
            }}
            transition={{
              scale: { duration: 0.5, type: "tween", ease: "easeInOut" },
            }}
          >
            <img
              src={img}
              alt={alt}
              className=" h-full w-full  object-cover object-center"
            />
          </motion.div>
          <motion.div
            animate={{
              flexGrow: isActive === alt ? 1 : 0,
            }}
            layout={true}
            className="bg-custom-soil min-w-0 flex flex-1 items-center justify-center text-white "
          >
            <div className="w-[75%] h-fit flex flex-col ">
              <motion.p
                custom={{ bool: isActive === alt, delay: 0.4 }}
                animate={"fadeInAndMoveY"}
                initial={"hidden"}
                variants={StaggerdChildren}
                className="pb-4 text-xl md:text-2xl lg:text-3xl font-semibold "
              >
                {heading}
              </motion.p>
              <motion.p
                custom={{ bool: isActive === alt, delay: 0.5 }}
                animate={"fadeInAndMoveY"}
                initial={"hidden"}
                variants={StaggerdChildren}
                className="pb-8 hidden sm:block lg:pb-6 text-custom-gray text-sm "
              >
                {description}
              </motion.p>
              <motion.button
                custom={{ bool: isActive === alt, delay: 0.5 }}
                animate={"fadeInAndMoveY"}
                initial={{
                  opacity: 0,
                  translateY: "8px",
                  backgroundColor: "#495157",
                  color: "#fff",
                }}
                variants={StaggerdChildren}
                whileHover={{
                  backgroundColor: "#fff",
                  color: "#495157",
                  transition: { duration: 0.3 },
                }}
                className=" bg-custom-darkNaviBlue font-serif text-sm py-2 px-6 w-fit"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default MenAccordion;
