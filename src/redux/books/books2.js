import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const GET_BOOKS = 'book-store/books/GET_BOOKS';

const fetched = (data, method) => ({
  url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B1JICHLslKFVZ0PibsXC/books/',
  header: {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  },
});

export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const { url } = fetched(1, 'GET');
    const res = await fetch(url);
    return res.data;
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    const { url, header } = fetched(book, 'POST');
    const res = await fetch(url, header);
    console.log(res.ok);
    return res.data;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async ({ id }) => {
    const { url } = fetched(id, 'DELETE');
    await fetch(`${url}${url}`);
    return { id };
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducer: {},
  extraReducers: {
    [addBook.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [getBooks.fulfilled]: (state, action) => [...action.payload],
    [removeBook.fulfilled]: (state, action) => {
      const index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export default bookSlice;
