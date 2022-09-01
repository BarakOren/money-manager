const INITIAL_STATE = {
    user: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "SET_EXPENSES_AND_INCOMES":
            return {
               ...state,
               user: {...state.user, expenses: action.payload.expesnes, incomes: action.payload.incomes} 
            }
        default:
            return state;
    }
}