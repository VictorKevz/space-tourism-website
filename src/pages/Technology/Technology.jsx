import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./technology.css";
import technologyData from "./Data";

const ImageComponent = ({ imgSrc, title, imageVariants }) => (
  <AnimatePresence mode="wait">
    <motion.picture
      key={imgSrc.desktop}
      className="technology-image-container"
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
      <source media="(max-width: 1160px)" srcSet={imgSrc.mobile} />
      <img
        src={imgSrc.desktop}
        alt={`${title}`}
        className="technology-img"
      />
    </motion.picture>
  </AnimatePresence>
);

const TextComponent = ({ title, parag, textVariants }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={title}
      className="technology-info-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={textVariants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="technology-terminology">THE TERMINOLOGY...</h1>
      <h2 className="technology-title">{title}</h2>
      <p className="technology-parag">{parag}</p>
    </motion.div>
  </AnimatePresence>
);

function Technology() {
  const [currentID, setID] = useState(0);
  const updateCurrentID = (currentID) => setID(currentID);

  const { id, title, parag, imgSrc } = technologyData[currentID];

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
    <div className="technology-wrapper">
      <div className="technology-container">
        <p className="technology-caption">
          <span className="technology-num">03</span>SPACE LAUNCH 101
        </p>
        <motion.div
          className="technology-inner-container"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <ImageComponent imgSrc={imgSrc} title={title} imageVariants={imageVariants} />
          <article className="technology-text-container">
            <nav className="technology-links-container" role="navigation" aria-label="Technology links">
              {technologyData.map((link) => (
                <li
                  key={link.id}
                  onClick={() => updateCurrentID(link.id)}
                  className={`technology-link ${link.id === currentID && "active"}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      updateCurrentID(link.id);
                    }
                  }}
                  aria-current={link.id === currentID ? "page" : undefined}
                  aria-label={`Technology ${link.id + 1}`}
                >
                  {link.id + 1}
                </li>
              ))}
            </nav>
            <TextComponent title={title} parag={parag} textVariants={textVariants} />
          </article>
        </motion.div>
      </div>
    </div>
  );
}

export default Technology;