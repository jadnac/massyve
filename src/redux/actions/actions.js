import { loginUsers } from "@/config/config";

export const USER_LOGGING_REQUESTED = 'USER_LOGGING_REQUESTED';
export const USER_LOGGING_SUCCESFULL = 'USER_LOGGING_SUCCESFULL';
export const USER_LOGGING_ERROR = 'USER_LOGGING_ERROR';

export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGGING_REQUESTED,
            })
            if (data?.email && data?.password) {
                let signingIn = await loginUsers(data);
                if (signingIn.status === 200) {
                    localStorage.setItem('creds', JSON.stringify(signingIn?.data?.data?.access_token))
                    dispatch({
                        type: USER_LOGGING_SUCCESFULL,
                        currentUser: signingIn?.data?.data.loginUser,
                        message: signingIn?.data?.message
                    })
                    return signingIn?.data
                } else {
                    dispatch({
                        type: USER_LOGGING_ERROR,
                        errorMessage: 'Error sign in, please try again or contact customer support.'
                    })
                }
            }
        } catch (err) {
            console.log(err);
            dispatch({
                type: USER_LOGGING_ERROR,
                errorMessage: err
            })
        }
    }
}