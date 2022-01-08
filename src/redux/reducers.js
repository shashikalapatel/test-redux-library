// @flow
import { combineReducers } from 'redux';

import Auth from './auth/auth.reducer';
import Layout from './layout/layout.reducer';

export default (combineReducers({
    Auth,
    Layout,
}));