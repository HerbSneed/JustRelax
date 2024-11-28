import '../styles/BookNow.css';
import { motion } from "framer-motion";

function BookNow() {
  return (
    <button
      type="submit"
      id="heroBookNow"
      className="py-[6px] bg-click w-[65px] h-full rounded-r-md mx-auto hover:bg-buttonFocus"
    >
      Book
    </button>
  );
  
}

export default BookNow;
