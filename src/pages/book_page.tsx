import { useContext, useEffect } from "react";
import type { FC } from "react";
import BookCreate from "../components/BookCreate/BookCreate";
import BookList from "../components/BookList";
import BooksContext from "../context/books";

const BookPage: FC = () => {
  const { fetchBooks }: { fetchBooks: () => void } = useContext(BooksContext)!;
  // const didFetch = useRef(false);
  useEffect(() => {
    // if (!didFetch.current) {
    fetchBooks();
    //   didFetch.current = true;
    // }
  }, []);

  return (
    <div
      className="app"
      style={{
        background: "linear-gradient(to right, #f9f9f9, #e0f7fa)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <BookCreate />
      <BookList />
    </div>
  );
};

export default BookPage;

// exlpore WrapperComponents Architecture`
