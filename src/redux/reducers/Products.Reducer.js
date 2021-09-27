import { FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../../scripts/constants.js';

const initialState = {
    Products: [],
    isFetching: false,
    error: false
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function ProductsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_PRODUCTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                Products: action.data
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}