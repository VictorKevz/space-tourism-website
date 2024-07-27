import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  };
  const linkVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };
  return (
    <motion.div
      className="home-wrapper"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      <div className="home-container">
        <section className="home-text-container">
          <p className="home-caption">So, You Want To Travel To</p>
          <h1 className="home-title">SPACE</h1>
          <p className="home-parag">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <motion.div 
        className="home-link-container"
        initial="hidden"
              animate="visible"
              exit="exit"
              variants={linkVariants}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5,
              }}
        >
          <Link to="/destination" className="home-link">Explore</Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
