import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/BookContext";

function App() {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // This will run us into an error of infinite requests, if we do not use useCallback hook with fetchBooks function.
  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
