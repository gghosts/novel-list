import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBooks,
  removeBooks,
  updateBooks,
  completeBooks,
} from "../redux/reducer";
import BookItem from "./BookItem";

const mapStateToProps = (state) => {
  return {
    books: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (obj) => dispatch(addBooks(obj)),
    removeBook: (id) => dispatch(removeBooks(id)),
    updateBook: (obj) => dispatch(updateBooks(obj)),
    completeBook: (id) => dispatch(completeBooks(id)),
  };
};

const DisplayBooks = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaybooks">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Actively Reading
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed Books
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          <a href="https:gghosts.github.io">Search Books</a>
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.books.length > 0 && sort === "active"
            ? props.books.map((item) => {
                return (
                  item.completed == false && (
                    <BookItem
                      key={item.id}
                      item={item}
                      removeBook={props.removeBook}
                      updateBook={props.updateBook}
                      completeBook={props.completeBook}
                    />
                  )
                );
              })
            : null}
          {props.books.length > 0 && sort === "completed"
            ? props.books.map((item) => {
                return (
                  item.completed == true && (
                    <BookItem
                      key={item.id}
                      item={item}
                      removeBook={props.removeBook}
                      updateBook={props.updateBook}
                      completeBook={props.completeBook}
                    />
                  )
                );
              })
            : null}
          {props.books.length > 0 && sort === "all"
            ? props.books.map((item) => {
                return (
                  <BookItem
                    key={item.id}
                    item={item}
                    removeBook={props.removeBook}
                    updateBook={props.updateBook}
                    completeBook={props.completeBook}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBooks);
