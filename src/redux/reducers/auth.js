import { USER_LOGGING_ERROR, USER_LOGGING_REQUESTED, USER_LOGGING_SUCCESFULL } from "../actions/actions";

const initialState = {
    loading: false,
    currentUser: [],
    isLoggedIn: false,
    error: false,
    errorMessage: "",
    message: ""
};


function auth(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGING_REQUESTED:
            return Object.assign({}, state, {
                ...state,
                loading: true,
            });
        case USER_LOGGING_SUCCESFULL:
            return Object.assign({}, state, {
                loading: false,
                isLoggedIn: true,
                message: action.message,
                currentUser: action.currentUser
            })
        case USER_LOGGING_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                errorMessage: action.errorMessage
            })
        default:
            return state
        }
        
}
export default auth;