import React, { useState } from "react";
import { connect } from "react-redux";
import { addBooks } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    books: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (obj) => dispatch(addBooks(obj)),
  };
};

const Books = (props) => {
  const [book, setBook] = useState("");

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const add = () => {
    if (book === "") {
      alert("Novel List is empty. What do you want to read?");
    } else {
      props.addBook({
        id: Math.floor(Math.random() * 1000),
        item: book,
        completed: false,
      });
      setBook("");
    }
  };

  return (
    <div className="addBooks">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="book-input"
        value={book}
        placeholder="What do you want to read?"
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
