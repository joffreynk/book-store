// books actions
const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// books action creators
export const addBook = (book) => (dispatch) => dispatch({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => (dispatch) => dispatch({ type: REMOVE_BOOK, payload: id });

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const filterAndArrage = (state, id) => state.filter(((book) => book.id !== Number(id)))
  .map((item, i) => ({ ...item, id: i + 1 }));

// books reducer
const reducerbooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { id: state.length + 1, ...action.payload }];
    case REMOVE_BOOK:
      return filterAndArrage(state, action.payload);
    default:
      return state;
  }
};

export default reducerbooks;
