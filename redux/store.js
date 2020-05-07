import { createStore } from 'redux';

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "UPDATE_LOGIN_USER":
            return {
                ...state,
                loginUser: { ...state.loginUser, ...payload.loginUser }
            };
        default:
            return state;
    }
};

export const init;