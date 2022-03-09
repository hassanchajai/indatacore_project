const PopupReducer=(state={},action)=>{
    switch(action.type){
        case 'POPUP_SHOW':
            return {
                ...state,
                show:true,
                message:action.message
            }
        case 'POPUP_HIDE':
            return {
                ...state,
                show:false
            }
        default:
            return state
    }
}
export default PopupReducer