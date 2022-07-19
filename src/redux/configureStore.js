import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerCategories from './categories/categories';
import reducerbooks from './books/books';

const reducer = combineReducers(
  {
    books: reducerbooks,
    categotries: reducerCategories,
  },
);

const store = configureStore({ reducer });

export default store;
