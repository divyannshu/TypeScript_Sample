// import { useEffect } from 'react'; // We'll use useEffect for default values
// import useBookContext from '../hooks/use-books-context';
// import TextField from '@mui/material/TextField'; // Material-UI TextField
// import Button from '@mui/material/Button';     // Material-UI Button

// // React Hook Form imports
// import { useForm, SubmitHandler, Controller, ControllerRenderProps } from 'react-hook-form';

// // --- 1. Define your form input types ---
// interface BookFormInputs {
//   title: string;
// }

// interface BookEditProps {
//   book: {
//     id: number;
//     title: string;
//   };
//   onSubmit: () => void; // Callback to hide the edit form
// }

// function BookEdit({ book, onSubmit }: BookEditProps) {
//   const { editBook } = useBookContext()!;

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<BookFormInputs>({
//     defaultValues: {
//       title: book.title,
//     },
//   });

//   useEffect(() => {
//     reset({ title: book.title });
//   }, [book.title, reset]); // `reset` itself is a stable function provided by RHF


//   // --- 3. Define your submission handler ---
//   const handleFormSubmit: SubmitHandler<BookFormInputs> = async (data) => {
//     await editBook(book.id, data.title);
//     onSubmit();
//   };

//   return (
//     <form onSubmit={handleSubmit(handleFormSubmit)}>
//       {/* --- 5. Use Controller for Material-UI TextField --- */}
//       <Controller
//         name="title" // Must match the name in BookFormInputs
//         control={control}
//         rules={{
//           required: 'Title is required', // Built-in validation rules
//           minLength: {
//             value: 1,
//             message: 'Title must be at least 1 character',
//           },
//         }}
        
//         render={({ field }: { field: ControllerRenderProps<BookFormInputs, 'title'> }) => (
//           <TextField
//             {...field} // Spreads onChange, onBlur, value, name
//             label="New Title" // Label for the TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             error={!!errors.title} // Show error state if validation fails
//             helperText={errors.title ? errors.title.message : ''} // Display error message
//           />
//         )}
//       />
//       <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}> {/* mt for margin-top */}
//         Save
//       </Button>
      
//     </form>
//   );
// }

// export default BookEdit;