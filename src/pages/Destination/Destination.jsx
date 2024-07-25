import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./destination.css";
import destinationData from "./Data";

function Destination() {
  const [currentID, setID] = useState(0);
  const updateCurrentID = (currentID) => {
    setID(currentID);
  };

  const { id, name, parag, distance, time, imgSrc } =
    destinationData[currentID];

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

  const valueVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  };
  return (
    <div className="destination-wrapper">
      <div className="destination-container">
        <p className="destination-caption">
          <span className="destination-num">01</span> Pick Your Destination
        </p>
        <motion.div
          className="destination-inner-container"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imgSrc}
              className="destination-image-container"
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
              <img
                src={imgSrc}
                alt={`${name}'s image`}
                className="destination-img"
              />
            </motion.div>
          </AnimatePresence>
          <article className="destination-text-container">
            <ul className="destination-links-container">
              {destinationData.map((link) => {
                let isActive = link.id === currentID;
                return (
                  <li
                    key={link.id}
                    onClick={() => updateCurrentID(link.id)}
                    className={`destination-link ${isActive && "active"}`}
                  >
                    {link.name}
                  </li>
                );
              })}
            </ul>

            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                className="destination-info-container"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.5 }}
              >
                <h1 className="destination-title">{name}</h1>
                <p
                  className={`destination-parag ${id === 2 && "europa"} ${
                    id === 1 && "mars"
                  }`}
                >
                  {parag}
                </p>
              </motion.div>
              <div className="destination-stats-container">
                <div className="distance-container">
                  <p className="avg-distance">AVG. DISTANCE</p>
                  <motion.div
                    key={`${distance}-${time}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={valueVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="distance value">{distance}</h2>
                  </motion.div>
                </div>
                <div className="time-container">
                  <p className="travel-time">Est. travel time</p>
                  <motion.div
                    key={`${distance}-${time}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={valueVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="time value">{time}</h2>
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          </article>
        </motion.div>
      </div>
    </div>
  );
}

export default Destination;
