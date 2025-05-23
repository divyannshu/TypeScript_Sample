import { useEffect } from "react";
import useBookContext from "../hooks/use-books-context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// React Hook Form imports
import { useForm, SubmitHandler } from "react-hook-form";

interface BookFormInputs {
  title: string;
  description: string;
}

interface BookEditProps {
  book: {
    id: number;
    title: string;
    description: string;
  };
  onSubmit: () => void;
}

function BookEdit({ book, onSubmit }: BookEditProps) {
  const { editBook } = useBookContext()!;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormInputs>({
    defaultValues: {
      title: book.title,
    },
  });

  useEffect(() => {
    reset({ title: book.title });
  }, [book.title, reset]);

  const handleFormSubmit: SubmitHandler<BookFormInputs> = async (data) => {
    await editBook(book.id, data.title, data.description);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        label="New Title"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.title}
        helperText={errors.title ? errors.title.message : ""}
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 1,
            message: "Title must be at least 1 character",
          },
        })}
      />
      <TextField
        label="New Description"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.title}
        helperText={errors.title ? errors.title.message : ""}
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: 1,
            message: "Description must be at least 1 character",
          },
        })}
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Save
      </Button>
    </form>
  );
}

export default BookEdit;
