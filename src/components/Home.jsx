import React, { useState } from "react";
import { motion } from "framer-motion";

const inputVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, stiffness: 200, type: "spring" },
  },
};

const Home = () => {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const changeHandler = (e) => {
    setShowName(false);
    setName(e.target.value);
    if (e.target.value === "") {
    }
  };
  const submitHandler = () => {
    name && setShowName(true);
  };
  return (
    <motion.div
      className="name-input"
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{
        duration: 1,
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
      {showName && (
        <motion.p
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
        >
          {`Hi ${name}, welcome😊.`}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Home;
