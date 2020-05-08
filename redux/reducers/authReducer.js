import * as types from '../actions/ActionTypes.js';

const initialState = {
    isAuthenticated: false,
    user: {}
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        default:
            return state;
    }
};
export default auth;