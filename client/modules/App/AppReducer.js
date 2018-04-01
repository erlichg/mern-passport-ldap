// Import Actions
import { GET_ERRORS } from './AppActions';

// Initial State
const initialState = {
  errors: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errors: state.errors,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getErrors = state => state.app.errors;

// Export Reducer
export default AppReducer;
