// All Filter Used And Get Final Response

/* eslint-disable */

export const getFilterProductsdata = (data, { category, color,value,ratings}) => {
    

    return data.filter(product => {
        
        let categoryMatchValue;
        if(product.categoryId===category)
            categoryMatchValue = true
        else
            categoryMatchValue = false;  
   

       

        let colorMatchValue;
        
        if(color && product.colors) {
            colorMatchValue = product.color.some(colors => color.includes(colors))
        }else{
            colorMatchValue = false;
        }

       
        let ratingMatchValue;
        if(product.rating === ratings) {
            ratingMatchValue = true;
        }
        else if(ratings === "")
        {
            ratingMatchValue = true;
        }
        else{
            ratingMatchValue = false;
        } 
        
        const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatchValue = typeof value.max !== 'number' || product.price <= value.max;

        
        if(category.length > 0 && color.length > 0  > 0 && ratings.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue   && ratingMatchValue && startPriceMatchValue && endPriceMatchValue ;
        }
        if(category.length > 0 && color.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        if(category.length > 0  && ratings.length > 0  )
        {
            return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue ;
        }
        
        if(color.length > 0  && ratings.length > 0 )
        {
            return  colorMatchValue    && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  ;
        }
     
        if(color.length > 0)
        {
            return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue;
        }
        if(category.length > 0)
        {
            return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue;
        }
        
        if(ratings.length > 0)
        {
            return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  ;
        }
        else
        {
        return startPriceMatchValue && endPriceMatchValue;
       }

    })
}