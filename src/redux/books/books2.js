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
    const result = await res.json();
    const data = [];
    /* eslint-disable */
    for (const [key, value] of Object.entries(result)) {
      data.push({ id: key, ...value[0] });
    }
    return data;
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    const { url, header } = fetched(book, 'POST');
    await fetch(url, header);
    return { ...book,id: book.item_id};
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B1JICHLslKFVZ0PibsXC/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return id;
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
      return state.filter((item) => item.id !== action.payload)
    },
  },
});

export default bookSlice;
