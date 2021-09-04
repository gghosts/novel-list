import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const BookItem = (props) => {
  const { item, updateBook, removeBook, completeBook } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateBook({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {""}
          <AiOutlineEdit />
          {""}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "#0000FF" }}
            onClick={() => completeBook(item.id)}
          >
            <IoCheckmarkDoneSharp />
            {""}
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "#D70040" }}
          onClick={() => removeBook(item.id)}
        >
          {""}
          <AiOutlineDelete />
        </motion.button>
        {""}
      </div>
      {item.completed && <span className="completed">Finished reading!</span>}
    </motion.li>
  );
};

export default BookItem;
