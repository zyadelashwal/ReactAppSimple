export const colorValue = (color) => ({
    type: "GET_COLOR_VALUE",
    color
});


export const categoryValue = (category) => ({
    type: "GET_CATEGORY_VALUE",
    category
});

export const ratingValue = (rating) => ({
    type: "GET_RATING_VALUE",
    rating
});

export const priceValue = (value) => ({
    type: "GET_PRICE_VALUE",
    value
});
