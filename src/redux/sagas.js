// @flow
import { all } from 'redux-saga/effects';

import authSaga from './auth/auth.saga';
import layoutSaga from './layout/layout.saga';

export default function* rootSaga() {
    yield all([authSaga(), layoutSaga()]);
}