
import { all, put, take } from 'redux-saga/effects';
import * as GetUserAction from "../../actions/GetUserAction";
import { instance } from "./AxiosInstance";


// LOGIN
function* UserLogin(payload) {
    const { username, password } = payload
    try {
        const response = yield instance.post(`/login`, { username, password });
        const data = yield response;
        const user = data.data;
        yield put({
            type: GetUserAction.LOGIN_USER_SUCCESS,
            errorMessage: 'login successfully',
            payload: user,
        })
    } catch (error) {
        yield put({
            type: GetUserAction.LOGIN_USER_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

// REGISTER
function* UserRegister(payload) {
    const { username, email, password } = payload
    try {

        const response = yield instance.post(`/register`, {
            username, email, password
        }).catch((error) => {
            throw new Error(error.response.data.message)
        });
        const responseData = yield response.data;
        yield put({
            type: GetUserAction.REGISTER_USER_SUCCESS,
            errorMessage: responseData.errorMessage,
            payload: responseData
        })
    } catch (error) {
        if (typeof error === "string") {
            yield put({
                type: GetUserAction.REGISTER_USER_FAIL,
                errorMessage: error,
                payload: null
            })
        } else {
            yield put({
                type: GetUserAction.REGISTER_USER_FAIL,
                errorMessage: error.message,
                payload: null
            })
        }
    }
}

// PATCH
function* UserUpdate(payload) {
    try {
        const response = yield instance.patch(`/user/${payload.data.id}`, payload.data);
        const responseData = yield response.data;
        yield put({
            type: GetUserAction.UPDATE_USER_SUCCESS,
            payload: null
        })
    } catch (error) {
        yield put({
            type: GetUserAction.UPDATE_USER_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

// DELETE
// not implemented
function* UserDelete(payload) {
    try {
        const response = yield instance.delete(`/user/${payload.data}`);
        const responseData = yield response.data;
        yield put({
            type: GetUserAction.DELETE_USER_SUCCESS,
            payload: null
        })
    } catch (error) {
        yield put({
            type: GetUserAction.DELETE_USER_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

// not implemented
// function* reGetUser() {
//     yield GetUser()
// }

// Watch LOGIN ACTION
function* watchUserLoginSaga() {
    while (true) {
        const { payload } = yield take(GetUserAction.LOGIN_USER)
        yield UserLogin(payload)
    }
}

// Watch REGISTER ACTION
function* watchUserRegisterSaga() {
    while (true) {
        const { payload } = yield take(GetUserAction.REGISTER_USER)
        yield UserRegister(payload)
    }
}

// not implemented
function* watchAddUserSaga() {
    while (true) {
        const { payload } = yield take(GetUserAction.UPDATE_USER)
        yield UserUpdate(payload)
    }
}

// not implemented
function* watchDeleteUserSaga() {
    while (true) {
        const { payload } = yield take(GetUserAction.DELETE_USER)
        yield UserDelete(payload)
    }
}

function* mySaga() {
    yield all([
        // takeEvery(ADD_USER_SUCCESS, reGetUser),
        // takeEvery(REQUEST_USER, GetUser),
        watchUserLoginSaga(),
        watchUserRegisterSaga(),
        // watchDeleteUserSaga(),
    ])
}

export default mySaga;