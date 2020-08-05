import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addProfile = profileDetails => {
  return dispatch => {
    axios.post('/addprofile', profileDetails)
    .then(() => dispatch(fetchAllProfiles()))
    .catch(() => dispatch(fetchAllProfiles()));
  };
};

export const purchaseAdidas = (productAndUserDetails) => {
  return dispatch => {
    axios.post('/adidas', productAndUserDetails)
    // .then(() => dispatch(fetchAllTasks()))
    .then(response => console.log(response.data))
    .catch(() => dispatch(fetchAllProfiles()));
  };
};

export const deleteTask = productId => {
  return dispatch => {
    axios.delete('/deletetask/' + productId)
    .then(() => dispatch(fetchAllProfiles()))
    .catch(() => dispatch(fetchAllProfiles()));
  };
};

const fetchAllProfilesSuccess = tasks => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks
  };
};

const fetchAllProfilesFailure = message => {
  return {
    type: actionTypes.FETCH_TASKS_FAILURE,
    message: message
  };
};

export const fetchAllProfiles = () => {
  return dispatch => {
    axios.get('/fetchallprofiles')
    .then(response => dispatch(fetchAllProfilesSuccess(response.data.tasks)))
    .catch(error => {
      if (error.response) dispatch(fetchAllProfilesFailure(error.response.data.message));
    });
  };
};