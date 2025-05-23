import BookShow from "./BookShow/BookShow";
import useBookContext from "../hooks/use-books-context";
import { Grid, Box } from "@mui/material";
function BookList() {
  const { books } = useBookContext()!;
  console.log(books);
  const ShowBooks = books.map((book) => {
    return (
      <Grid key={book.id}>
        <BookShow book={book} />
      </Grid>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ShowBooks}
      </Grid>
    </Box>
  );
}
export default BookList;
