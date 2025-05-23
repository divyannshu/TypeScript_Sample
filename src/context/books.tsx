import { createContext, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  description: string;
}

interface BooksContextType {
  books: Book[];
  createBook: (title: string, description: string) => Promise<void>;
  editBook: (
    id: number,
    newTitle: string,
    newDescription: string
  ) => Promise<void>;
  deleteBookById: (id: number) => Promise<void>;
  fetchBooks: () => Promise<void>;
}

const BooksContext = createContext<BooksContextType | null>(null);

function Provider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get<Book[]>("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBook = async (
    id: number,
    newTitle: string,
    newDescription: string
  ) => {
    const response = await axios.put<Book>(
      `http://localhost:3001/books/${id}`,
      {
        title: newTitle,
        description: newDescription,
      }
    );
    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...response.data };
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title: string, description: string) => {
    const response = await axios.post<Book>("http://localhost:3001/books", {
      title: title,
      description: description,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    editBook,
    deleteBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
