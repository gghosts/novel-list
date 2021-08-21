import "./css/main.css";
import DisplayBooks from "./components/DisplayBooks";
import Books from "./components/Books";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BookSearch from "./components/BookSearch";
import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <motion.h1
        initial={{ Y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Novel List
      </motion.h1>
      <motion.div
        initial={{ Y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Books />
        <DisplayBooks />
      </motion.div>
      <div className="BookSearch-engine">
        <Booksearch />
      </div>
    </div>
  );
}

export default App;
