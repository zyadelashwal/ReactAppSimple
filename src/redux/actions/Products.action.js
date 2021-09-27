import { FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../../scripts/constants.js';
import axios  from "axios";

export  function  fetchProduct() {

  return async (dispatch)  => {
    dispatch(getProduct())

    await axios.get(`http://test-api.edfa3ly.io/product`)
        .then(function (response) {
            return(dispatch(getProductSuccess(response.data)))
        })
        .catch(err => dispatch(getProductFailure(err)))
}

}

function getProduct() {

    return {
        type: FETCHING_PRODUCTS
    }
}

function getProductSuccess(data) {
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      data
  }
}

function getProductFailure(err) {
  return {
      type: FETCH_PRODUCTS_FAILURE
  }
}