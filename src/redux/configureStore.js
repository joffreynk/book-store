import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerCategories from './categories/categories';
import bookSlice from './books/books2';

const reducer = combineReducers(
  {
    books: bookSlice.reducer,
    categotries: reducerCategories,
  },
);

const store = configureStore({ reducer });

export default store;
