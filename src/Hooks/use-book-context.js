import { useContext } from "react";
import BookContext from "../context/BookContext";

function useBookContext() {
  return useContext(BookContext);
}
export default useBookContext;
