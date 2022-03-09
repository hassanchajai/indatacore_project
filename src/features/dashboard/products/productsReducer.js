const GET_ALL= 'GET_ALL';
export const getAllProducts=(_)=>{
    return {
        type:GET_ALL,
        payload:_
    }}
const productsReducer = (state = {
    data:[]
}, action) => {
    switch (action.type) {
        case GET_ALL:
            return {...state,data:action.payload};
        default:
            return state;
    }
}
export default productsReducer;