import React from "react";
// import { motion } from "framer-motion";
import "./home.css";

function Home() {
  // Animation variants
  const variants = {
  //   hidden: { opacity: 0, y: -60 },
  //   visible: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: 60 },
  // };
  return (
    <motion.div
      className="home-wrapper"
{/*       initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8 }} */}
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
        <div className="home-link-container">
          <a className="home-link">Explore</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
