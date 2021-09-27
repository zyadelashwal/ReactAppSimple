/* eslint-disable */

export default (state = {category: [],color: [], ratings:"",value: { min: 0, max: 15000 }}, action) => {
    if(action.type === "GET_CATEGORY_VALUE")
    {
        return {
            ...state,
            category: action.category
        };
    }
    
    else if(action.type === "GET_COLOR_VALUE")
    {
        
     return {
                ...state,
                color: action.color
            };
    }
    else if(action.type === "GET_PRICE_VALUE")
    {
        return {
                    ...state,
                    value: {min: action.value.value.min, max: action.value.value.max }
                };
    }
    else if(action.type === "GET_RATING_VALUE")
    {
        return {
                        ...state,
                        ratings: action.rating
                    };
    }
    else
    {
        return state;
    }    
}