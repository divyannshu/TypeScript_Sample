import type { FC } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookPage from "./pages/book_page";
import MoviePage from "./pages/movie_page";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme-library/module";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Layout
            children={
              <Routes>
                <Route
                  path="/book"
                  element={
                    <PrivateRoute>
                      <BookPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/movie"
                  element={
                    <PrivateRoute>
                      <MoviePage />
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<LoginPage />} />
              </Routes>
            }
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// exlpore WrapperComponents Architecture`
