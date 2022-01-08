// @flow
import { APICore } from '../core/core.service';

const api = new APICore();

// account
function login(params) {
    const baseUrl = '/login/';
    return api.create(`${baseUrl}`, params);
}

function logout() {
    const baseUrl = '/logout/';
    return api.create(`${baseUrl}`, {});
}

function signup(params) {
    const baseUrl = '/register/';
    return api.create(`${baseUrl}`, params);
}

function forgotPassword(params) {
    const baseUrl = '/forget-password/';
    return api.create(`${baseUrl}`, params);
}

function forgotPasswordConfirm(params) {
    const baseUrl = '/password/reset/confirm/';
    return api.create(`${baseUrl}`, params);
}

export { login, logout, signup, forgotPassword, forgotPasswordConfirm };
