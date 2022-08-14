const INITIAL_STATE = {
    user: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SELECT_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}