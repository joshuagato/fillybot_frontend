import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addTask = productDetails => {
  return dispatch => {
    axios.post('/addtask', productDetails)
    .then(() => dispatch(fetchAllTasks()))
    .catch(() => dispatch(fetchAllTasks()));
  };
};

export const purchaseAdidas = (productAndUserDetails) => {
  return dispatch => {
    axios.post('/adidas', productAndUserDetails)
    // .then(() => dispatch(fetchAllTasks()))
    .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllTasks()));
  };
};

export const deleteTask = productId => {
  return dispatch => {
    axios.delete('/deletetask/' + productId)
    .then(() => dispatch(fetchAllTasks()))
    .catch(() => dispatch(fetchAllTasks()));
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

export const fetchAllTasks = () => {
  return dispatch => {
    axios.get('/fetchalltasks')
    .then(response => dispatch(fetchAllTasksSuccess(response.data.tasks)))
    .catch(error => {
      if (error.response) dispatch(fetchAllTasksFailure(error.response.data.message));
    });
  };
};