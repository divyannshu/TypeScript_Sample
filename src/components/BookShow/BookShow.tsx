import { useState } from "react";
import useBookContext from "../../hooks/use-books-context";
import BookEdit from "../BookEdit";
import "./BookShow.css";
import {
  Button,
  Rating,
  Card,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Book = {
  id: number;
  title: string;
  description: string;
};

interface ShowProps {
  book: Book;
}

function BookShow({ book }: ShowProps) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext()!;
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = (
    <Box>
      <Typography variant="h6">{book.title}</Typography>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="medium">Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            {book.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <Card variant="outlined" className="book-card">
      <Box className="card-main">
        <Box
          component="img"
          alt="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          className="book-image"
        />
        <Box className="book-content">
          {content}
          <Box className="book-actions">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
            />
            <Box display="flex" gap={1}>
              <Button
                className="action-button edit"
                variant="outlined"
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button
                className="action-button delete"
                variant="outlined"
                color="error"
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
export default BookShow;
