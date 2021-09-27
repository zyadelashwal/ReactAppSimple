import { FETCHING_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../../scripts/constants.js';

const initialState = {
    Categories: [],
    isFetching: false,
    error: false
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function CategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_CATEGORIES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CATEGORIES_SUCCESS:
            
            return {
                ...state,
                isFetching: false,
                Categories: action.data
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}