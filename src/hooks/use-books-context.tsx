import {useContext} from 'react';
import BooksContext from '../context/books';

function useBookContext():React.ContextType<typeof BooksContext>{
    return useContext(BooksContext);
}

export default useBookContext;