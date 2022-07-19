// books actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// books action creators
export const addBook = (book) => (dispatch) => dispatch({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => (dispatch) => dispatch({ type: REMOVE_BOOK, payload: id });

// books reducer
const reducerbooks = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(((book) => book.id !== action.payload));
    default:
      return state;
  }
};

export default reducerbooks;
