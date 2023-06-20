import React from "react";
import { motion } from "framer-motion";
const headerVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { type: "spring" } },
};
// const svgVariants = {
//   hidden: {
//     rotate: -180,
//   },
//   animate: {
//     rotate: 0,
//     transition: { duration: 1 },
//   },
// };
// const pathVariants = {
//   hidden: { pathLength: 0 },
//   animate: { pathLength: 1, transition: { duration: 2 } },
// };
const Nav = () => {
  return (
    <div className="nav-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon food-icon"
        viewBox="0 0 512 512"
      >
        <path
          d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 112l16-64 47-16"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M224 112h256"
        />
      </svg>
      <motion.h2
        className="brand-name"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        Riddy Foods
      </motion.h2>
    </div>
  );
};

export default Nav;