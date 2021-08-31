import "./css/main.css";
import DisplayBooks from "./components/DisplayBooks";
import Books from "./components/Books";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ Y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        novel list
      </motion.h1>
      <motion.div
        initial={{ Y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
          <Books />
          <DisplayBooks />
      </motion.div>
    </div>
  );
}

export default App;
