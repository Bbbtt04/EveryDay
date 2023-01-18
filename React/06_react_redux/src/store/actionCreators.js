import * as actionTypes from './constants';

export const addNumberAction = (value) => ({
  type: actionTypes.ADD_NUMBER,
  value
});

export const subNumberAction = (value) => ({
  type: actionTypes.SUB_NUMBER,
  value
});

export const getCategoryAction = (value) => ({
  type: actionTypes.GET_CATEGORY,
  value
});
