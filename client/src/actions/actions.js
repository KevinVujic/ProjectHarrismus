/**
 * File for declaring actions in our application.
 * Actions are payloads of information that send data from our application to our store.
 * See the react redux actions documentation for further details
 * */

import {
    LOGOUT_USER,
    POST_LOGIN,
    CHECK_RESET_ROUTE,
    RESET_PASSWORD,
    PASSWORDS_DO_NOT_MATCH,
    POST_REGISTRATION,
    SHOW_REGISTRATION_FORM_ERORRS, CLEAR_REGISTRATION_FORM_ERRORS
} from '../constants/action_types';

// action generator for posting login information
export function postLogin (loginData) {
    return {
        type: POST_LOGIN,
        payload: {
            request: {
                url: '/login',
                method: 'POST',
                data: Object.assign({}, loginData)
            }
        }
    }
}

// action generator for posting login information
export function postRegistration (registrationData) {
    return {
        type: POST_REGISTRATION,
        payload: {
            request: {
                url: '/register',
                method: 'POST',
                data: Object.assign({}, registrationData)
            }
        }
    }
}

export function showRegistrationFormErrors (errors) {
    return {
        type: SHOW_REGISTRATION_FORM_ERORRS,
        errors
    }
}

export function clearRegistrationFormErrors () {
    return {
        type: CLEAR_REGISTRATION_FORM_ERRORS
    }
}

export function checkResetRoute (token) {
    return {
        type: CHECK_RESET_ROUTE,
        payload: {
            request: {
                method: 'POST',
                url: '/reset',
                data: {
                    token: token
                }
            }
        }
    }
}

export function resetPassword (token, password) {
    return {
        type: RESET_PASSWORD,
        payload: {
            request: {
                method: 'POST',
                url: '/reset',
                data: {
                    token: token,
                    password: password
                }
            }
        }
    }
}

export function passwordsDoNotMatch () {
    return {
        type: PASSWORDS_DO_NOT_MATCH
    }
}

// action generator for a logout action
export function logoutUser () {
    return {
        type: LOGOUT_USER
    };
}

