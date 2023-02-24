import { all, put, take, takeEvery } from 'redux-saga/effects';
import * as GetEditorAction from "../../actions/GetEditorAction";
import { instance } from "./AxiosInstance";

// GET
function* GetEditorTitleList() {
    try {
        const response = yield instance.get(`/editor/title`);
        const titleList = yield response.data;
        yield put({
            type: GetEditorAction.REQUEST_EDITOR_TITLE_LIST_SUCCESS,
            payload: titleList,
        })
    } catch (error) {
        yield put({
            type: GetEditorAction.REQUEST_EDITOR_TITLE_LIST_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}
function* GetEditorByTitle(payload) {
    try {
        const response = yield instance.get(`/editor/${payload.data.id}`);
        const responseData = yield response.data;
        yield put({
            type: GetEditorAction.REQUEST_EDITOR_SUCCESS,
            payload: responseData,
        })
    } catch (error) {
        yield put({
            type: GetEditorAction.REQUEST_EDITOR_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

function* UploadImage(payload) {
    try {
        const response = yield instance.post(`/editor/image`, payload.data);
        const responseData = yield response.data;
        yield put({
            type: GetEditorAction.UPLOAD_IMAGE_SUCCESS,
            payload: responseData,
        })
    } catch (error) {
        yield put({
            type: GetEditorAction.UPLOAD_IMAGE_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}
// POST
function* AddEditor(payload) {
    try {
        const response = yield instance.post(`/editor`, payload.data);
        const responseData = yield response.data;
        yield put({
            type: GetEditorAction.ADD_EDITOR_SUCCESS,
            payload: responseData
        })

    } catch (error) {
        yield put({
            type: GetEditorAction.ADD_EDITOR_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

// PATCH
function* UpdateEditor(payload) {
    try {
        const response = yield instance.patch(`/editor/${payload.id}`, payload.data);
        const responseData = yield response.data;
        yield put({
            type: GetEditorAction.UPDATE_EDITOR_SUCCESS,
            payload: responseData
        })
    } catch (error) {
        yield put({
            type: GetEditorAction.UPDATE_EDITOR_FAIL,
            payload: null
        })
    }
}

// DELETE
function* DeleteEditor(payload) {
    try {
        const response = yield instance.delete(`/editor/bunchDeleteByIds`, {
            "ids": payload.data.ids
        });
        const responseData = yield response.data;
        yield put({
            type: GetEditorAction.DELETE_EDITOR_SUCCESS,
            payload: responseData
        })
    } catch (error) {
        yield put({
            type: GetEditorAction.DELETE_EDITOR_FAIL,
            errorMessage: error.message,
            payload: null
        })
    }
}

function* reGetEditorList() {
    yield GetEditorTitleList()
}


function* watchAddEditorSaga() {
    while (true) {
        const { payload } = yield take(GetEditorAction.ADD_EDITOR)
        yield AddEditor(payload)
    }
}

function* watchUpdateEditorSaga() {
    while (true) {
        const { payload } = yield take(GetEditorAction.UPDATE_EDITOR)
        yield UpdateEditor(payload)
    }
}

function* watchDeleteEditorSaga() {
    while (true) {
        const { payload } = yield take(GetEditorAction.DELETE_EDITOR)
        yield DeleteEditor(payload)
    }
}

function* watchGetEditorByTitleSaga() {
    while (true) {
        const { payload } = yield take(GetEditorAction.REQUEST_EDITOR_BY_TITLE)
        yield GetEditorByTitle(payload)
    }
}

function* watchUploadImageSaga() {
    while (true) {
        const { payload } = yield take(GetEditorAction.UPLOAD_IMAGE)
        yield UploadImage(payload)
    }
}

function* mySaga() {
    yield all([
        takeEvery(GetEditorAction.ADD_EDITOR_SUCCESS, reGetEditorList),
        takeEvery(GetEditorAction.REQUEST_EDITOR, GetEditorTitleList),
        watchUpdateEditorSaga(),
        watchAddEditorSaga(),
        watchDeleteEditorSaga(),
        watchGetEditorByTitleSaga(),
        watchUploadImageSaga(),
    ])
}

export default mySaga;