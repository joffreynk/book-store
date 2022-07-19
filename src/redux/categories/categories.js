// category check action
const CHECK_STATUS = 'boo-store/categories/CHECK_STATUS';

// category check action creator
export const checkStatus = (id) => (dispatch) => dispatch({ type: CHECK_STATUS, payload: id });

// category reducer
const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state.filter(((book) => book.id === action.payload));
    default:
      return state;
  }
};

export default reducerCategories;
