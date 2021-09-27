import { combineReducers } from 'redux';
import Products from './Products.Reducer';
import Category
from './Category.Reducer';
import filters from './filter';


const rootReducer = combineReducers({
  Products,
  Category,
  filters
})

export default rootReducer