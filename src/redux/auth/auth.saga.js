// @flow
import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import {
    login as loginApi,
    logout as logoutApi,
    signup as signupApi,
    forgotPassword as forgotPasswordApi,
    forgotPasswordConfirm,
} from '../../services';
import { APICore, setAuthorization } from '../../services/core/core.service';
import { authApiResponseSuccess, authApiResponseError } from './auth.action';
import { AuthActionTypes } from './auth.constant';

const api = new APICore();

let users = {
    id: 1,
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'User',
    role: 'Admin',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
};

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password } }) {
    try {
         const response = yield call(loginApi, { username, password });
        //const user = response.data;
        const user = users;
        // NOTE - You can change this according to response format from your api
        api.setLoggedInUser(user);
        setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user));
    } catch (error) {
        console.log(error);
        yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

/**
 * Logout the user
 */
function* logout() {
    try {
        yield call(logoutApi);
        api.setLoggedInUser(null);
        setAuthorization(null);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error));
    }
}

function* signup({ payload: { fullname, email, password } }) {
    try {
        const response = yield call(signupApi, { fullname, email, password });
        //const user = response.data;
        const user = users;
        // api.setLoggedInUser(user);
        // setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error));
        api.setLoggedInUser(null);
        setAuthorization(null);
    }
}

function* forgotPassword({ payload: { username } }) {
    try {
        //const response = yield call(forgotPasswordApi, { username });
        //response.data
        let responseData = {
            message: "We've sent you a link to reset password to your registered email.",
        };
        yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, responseData));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error));
    }
}

function* forgotPasswordChange({ payload: { data } }) {
    try {
        const response = yield call(forgotPasswordConfirm, data);
        yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD_CHANGE, response.data));
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD_CHANGE, error));
    }
}

export function* watchLoginUser() {
    yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchLogout() {
    yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

export function* watchSignup() {
    yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
}

export function* watchForgotPassword() {
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

export function* watchForgotPasswordChange() {
    yield takeEvery(AuthActionTypes.FORGOT_PASSWORD_CHANGE, forgotPasswordChange);
}

function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchForgotPassword),
        fork(watchForgotPasswordChange),
    ]);
}

export default authSaga;