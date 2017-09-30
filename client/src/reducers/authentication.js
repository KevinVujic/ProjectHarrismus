/**
 * Authentication reducers
 * */

import {
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL,
    LOGOUT_USER,
    CHECK_RESET_ROUTE_SUCCESS,
    CHECK_RESET_ROUTE_FAIL
} from '../constants/action_types';

/**
 * Apply logout or login adjustments on the state depending on the action type.
 * Note that the original state object wont get overwritten.
 * ALWAYS use an empty object as first parameter and the original state as second
 * parameter with Object.assign, as we would overwrite the whole existing state otherwise.
 * */
export function UserAuthentication(state = {}, action) {
    switch (action.type) {
        //------------------------------------------
        // LOGIN PAGE
        //------------------------------------------
        case POST_LOGIN_SUCCESS:
            return Object.assign(
                {},
                state,
                { isAuthenticated: true, username: action.payload.data.username }
            );
        case POST_LOGIN_FAIL:
            return Object.assign({}, state, { isAuthenticated: false }); // TODO: implement
        case LOGOUT_USER:
            return Object.assign({}, state, { username: null, isAuthenticated: false });

        //------------------------------------------
        // RESET PAGE
        //------------------------------------------
        case CHECK_RESET_ROUTE_SUCCESS:
            return Object.assign({}, state, { routeIsValid: true });

        case CHECK_RESET_ROUTE_FAIL:
            return Object.assign({}, state, { routeIsValid: false});

        default:
            return state
    }
}
