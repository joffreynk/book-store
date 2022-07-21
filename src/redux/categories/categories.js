// category check action
const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

// category check action creator
export const checkStatus = () => (dispatch) => dispatch({ type: CHECK_STATUS });

// category reducer
const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default reducerCategories;
