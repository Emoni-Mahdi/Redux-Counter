// increase count
// decrease count
// react count

// action oject has a propert called "type"

export const increaseCount = () => {
    return{
        type : 'count/increased'
    }
};

export const decreaseCount = () => {
    return{
        type : 'count/decreased'
    }
};

export const resetCount =() => {
    return{
        type : 'count/reset'
    }
};