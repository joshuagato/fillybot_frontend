import * as actionTypes from './actionTypes';
import axios from 'axios';

const loginSuccess = response => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: response.token,
    user: response.user
  };
}

const loginSuccessWithWarning = message => {
  return {
    type: actionTypes.LOGIN_SUCCESS_WITH_WARNING,
    message: message
  };
}

const loginFailure = message => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    message: message
  };
}

export const login = userInput => {
  return dispatch => {    
    axios.post('/login', userInput).then(response => {
      if (response.data.success) {
        dispatch(loginSuccess(response.data));
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.token));
      }
      else  
        dispatch(loginSuccessWithWarning(response.data.message))
    })
    .catch(error => {
      if (error.response) dispatch(loginFailure(error.response.data.message));
    });
  };
};

export const logout = () => {
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  // localStorage.removeItem('addr1');
  // localStorage.removeItem('addr2');
  // localStorage.removeItem('city');
  // localStorage.removeItem('country');
  // localStorage.removeItem('postalCode');
  // localStorage.removeItem('state');

  return {
    type: actionTypes.LOGOUT
  };
}