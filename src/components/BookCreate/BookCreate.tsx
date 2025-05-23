import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import useBookContext from "../../hooks/use-books-context"; // adjust path
import "./BookCreate.css"; // external CSS

type BookFormInputs = {
  title: string;
  description: string;
};

export default function BookCreate() {
  const { createBook } = useBookContext()!;
  const [showForm, setShowForm] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormInputs>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<BookFormInputs> = (data) => {
    console.log("Form data submitted:", data);
    createBook(data.title, data.description);
    reset();
    setShowForm(false);
  };

  return (
    <div className="book-create-container">
      <Button
        variant="contained"
        className="create-button"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add a Book"}
      </Button>

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="book-form">
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              minLength: {
                value: 1,
                message: "Title must be at least 1 character",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{
              required: "Description is required",
              minLength: {
                value: 1,
                message: "Description must be at least 1 character",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />

          <Button className="create-button" variant="outlined" type="submit">
            Create
          </Button>
        </form>
      )}
    </div>
  );
}

//Controllers are usually used when we want to render a component which manages its ow internal state