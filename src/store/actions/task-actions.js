import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addTask = productDetails => {
  return dispatch => {
    axios.post('/addtask', productDetails)
    .then(() => dispatch(fetchAllTasks(productDetails.user)))
    .catch(() => dispatch(fetchAllTasks(productDetails.user)));
  };
};

export const purchaseAdidas = productAndUserDetails => {
  return dispatch => {
    axios.post('/adidas', productAndUserDetails)
    .then(() => dispatch(fetchAllTasks(productAndUserDetails.user)))
    // .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllTasks(productAndUserDetails.user)));
  };
};

export const purchaseEastbay = productAndUserDetails => {
  return dispatch => {
    axios.post('/eastbay', productAndUserDetails)
    .then(() => dispatch(fetchAllTasks(productAndUserDetails.user)))
    // .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllTasks(productAndUserDetails.user)));
  };
};

export const purchaseFootlocker = productAndUserDetails => {
  return dispatch => {
    axios.post('/footlocker', productAndUserDetails)
    .then(() => dispatch(fetchAllTasks(productAndUserDetails.user)))
    // .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllTasks(productAndUserDetails.user)));
  };
};

export const purchaseChampssports = productAndUserDetails => {
  return dispatch => {
    axios.post('/champssports', productAndUserDetails)
    .then(() => dispatch(fetchAllTasks(productAndUserDetails.user)))
    // .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllTasks(productAndUserDetails.user)));
  };
};

export const deleteTask = (productId, userId) => {
  return dispatch => {
    axios.delete('/deletetask/' + productId)
    .then(() => dispatch(fetchAllTasks(userId)))
    .catch(() => dispatch(fetchAllTasks(userId)));
  };
};

const fetchAllTasksSuccess = tasks => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks
  };
};

const fetchAllTasksFailure = message => {
  return {
    type: actionTypes.FETCH_TASKS_FAILURE,
    message: message
  };
};

export const fetchAllTasks = id => {
  return dispatch => {
    axios.get('/fetchallusertasks/' + id)
    .then(response => dispatch(fetchAllTasksSuccess(response.data.tasks)))
    .catch(error => {
      if (error.response) dispatch(fetchAllTasksFailure(error.response.data.message));
    });
  };
};