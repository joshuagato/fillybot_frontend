import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
  loading: false,
  failureMessage: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_TASKS_START:
      return { ...state, loading: true };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.tasks, loading: false };
      
    case actionTypes.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, failureMessage: action.message };

    default: return state;
  }
};

export default reducer;