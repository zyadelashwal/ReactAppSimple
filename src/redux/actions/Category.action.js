import { FETCHING_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../../scripts/constants.js';
import axios  from "axios";

export  function  fetchCategory() {

  return async (dispatch)  => {
    dispatch(getCategory())

    await axios.get(`https://fakestoreapi.com/products/categories`)
        .then(function (response) {
            return(dispatch(getCategorySuccess(response.data)))
        })
        .catch(err => dispatch(getCategoryFailure(err)))
}

}

function getCategory() {

    return {
        type: FETCHING_CATEGORIES
    }
}

function getCategorySuccess(data) {
  return {
      type: FETCH_CATEGORIES_SUCCESS,
      data
  }
}

function getCategoryFailure(err) {
  return {
      type: FETCH_CATEGORIES_FAILURE
  }
}