// types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
// actions
export const login_obj = (user) => ({ type: LOGIN, payload: user });
export const logout_obj = () => ({ type: LOGOUT });
// reducer
const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            {
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload
                };
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}
export default AuthReducer;