// books actions
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// books action creators
export const addBook = (book) => async (dispatch) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(book),
  };
  const sendData = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B1JICHLslKFVZ0PibsXC/books', options);
  if (sendData.ok) {
    dispatch({ type: ADD_BOOK, payload: book });
  }
};

export const removeBook = (id) => (dispatch) => dispatch({ type: REMOVE_BOOK, payload: id });

// const initialState = [
//   {
//     id: 1,
//     title: 'The Hunger Games',
//     author: 'Suzanne Collins',
//     category: 'action',
//   },
//   {
//     id: 2,
//     title: 'Dune',
//     author: 'Frank Herbert',
//     category: 'Science Fiction',
//   },
//   {
//     id: 3,
//     title: 'Capital in the Twenty-First Century',
//     author: 'Suzanne Collins',
//     category: 'Economy',
//   },
// ];

// books reducer
const reducerbooks = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(((book) => book.item_id !== action.payload));
    default:
      return state;
  }
};

export default reducerbooks;
