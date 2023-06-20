import React from "react";
import { useSelector } from "react-redux";
import { animate, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.7,
    },
  },
};
const mealVariants = {
  hover: {
    scale: 1.5,
    color: "#F0B76C",
    transition: { type: "spring", stiffness: 100 },
  },
};

const mealsVariants = {
  initial: { y: "100vh" },
  animate: {
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 1.2, duration: 1 },
  },
};

const MainCourse = () => {
  const meals = ["Rice", "Spaghetti", "Amala", "Shawarma"];
  const name = useSelector((state) => state.name);
  return (
    <motion.div
      className="maincourse container"
      variants={containerVariants}
      initial="hidden"
      animate="animate"
    >
      <h2>{`Hi ${name}, welcome😊.`}</h2>
      <motion.div variants={mealsVariants} initial="initial" animate="animate">
        <p className="title">What will you like to order from us today?</p>
        <div className="meal-wrapper">
          {meals.map((meal, i) => (
            <motion.p key={i} variants={mealVariants} whileHover="hover">
              {meal}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainCourse;
