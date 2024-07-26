import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./crew.css";
import crewData from "./Data";

function Crew() {
  const [currentID, setID] = useState(0);
  const updateCurrentID = (currentID) => {
    setID(currentID);
  };

  const { id, name, parag, role, imgSrc } = crewData[currentID];

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="crew-wrapper">
      <div className="crew-container">
        <p className="crew-caption">
          <span className="crew-num">02</span>Meet Your Crew
        </p>
        <motion.div
          className="crew-inner-container"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <article className="crew-text-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                className="crew-info-container"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.5 }}
              >
                <h1 className="crew-role">{role}</h1>
                <h2 className="crew-name">{name}</h2>
                <p
                  className={`crew-parag ${id === 2 && "europa"} ${
                    id === 1 && "mars"
                  }`}
                >
                  {parag}
                </p>
              </motion.div>
            </AnimatePresence>
            <ul className="crew-links-container">
              {crewData.map((link) => {
                let isActive = link.id === currentID;
                return (
                  <li
                    key={link.id}
                    onClick={() => updateCurrentID(link.id)}
                    className={`crew-link ${isActive && "active"}`}
                  ></li>
                );
              })}
            </ul>
          </article>
          <AnimatePresence mode="wait">
            <motion.div
              key={imgSrc}
              className="crew-image-container"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={imageVariants}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5,
              }}
            >
              <img src={imgSrc} alt={`${name}'s image`} className="crew-img" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Crew;
