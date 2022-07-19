import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerCategories from './categories/categories';
import reducerbooks from './books/books';

const rootReducer = combineReducers(
  {
    books: reducerbooks,
    categotries: reducerCategories,
  },
);

const store = configureStore(rootReducer);

export default store;
