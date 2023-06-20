import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { foodActions } from "../store";
import { useNavigate } from "react-router-dom";

const inputVariants = {
  hidden: { opacity: 0, scale: 1.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 2, stiffness: 200, type: "spring" },
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    dispatch(foodActions.addName(e.target.value));
  };
  const submitHandler = () => {
    name && navigate("/maincourse");
  };
  return (
    <motion.div
      className="name-input container"
      animate={{ x: 0 }}
      initial={{ x: "100vw" }}
      transition={{
        duration: 1,
        delay: 1,
        type: "spring",
        stiffness: 200,
        when: "beforeChildren",
      }}
    >
      <p>To serve you better, we will like to know your name</p>
      <div>
        <motion.input
          placeholder="Your full name"
          onChange={changeHandler}
          variants={inputVariants}
          initial="hidden"
          animate="animate"
          value={name}
        />
        <motion.button
          onClick={submitHandler}
          variants={inputVariants}
          initial="hidden"
          animate="animate"
        >
          Next
        </motion.button>
      </div>
      {/* {showName && (
        <AnimatePresence>
          <motion.p
            exit={{ x: "-100vw", transition: { duration: 2 } }}
            style={{ marginTop: "20px" }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
          >
            {`Hi ${name}, welcome😊.`}
          </motion.p>
        </AnimatePresence>
      )} */}
    </motion.div>
  );
};

export default Home;
