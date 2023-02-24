import * as GetEditorAction from "../actions/GetEditorAction";
import { errorMessage } from './errorMessage';

const initialState = {
    _id: null,
    id: null,
    title: null,
    content: null,
    errorMessage: null,
    imageFileDirectory: null,
    titleList: []
}
const getEditorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetEditorAction.INITIAL_EDITOR:
            return {
                ...state,
                _id: null,
                id: null,
                title: null,
                content: null,
                errorMessage: null,
            }

        case GetEditorAction.ADD_EDITOR_SUCCESS:
            return {
                ...state,
                _id: action.payload._id,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                errorMessage: errorMessage.addSuccess
            }
        case GetEditorAction.ADD_EDITOR_FAIL:
            return {
                ...state,
                errorMessage: errorMessage.addFail
            }
        case GetEditorAction.REQUEST_EDITOR_TITLE_LIST_SUCCESS:
            return {
                ...state,
                titleList: action.payload,
                errorMessage: errorMessage.getFinish
            }
        case GetEditorAction.REQUEST_EDITOR_TITLE_LIST_FAIL:
            return {
                ...state,
                errorMessage: errorMessage.getFail
            }
        case GetEditorAction.REQUEST_EDITOR_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                errorMessage: errorMessage.getFinish
            }
        case GetEditorAction.REQUEST_EDITOR_FAIL:
            return {
                ...state,
                errorMessage: errorMessage.getFinish
            }
        case GetEditorAction.UPDATE_EDITOR_SUCCESS:
            return {
                ...state,
                errorMessage: errorMessage.updateSuccess
            }
        case GetEditorAction.UPDATE_EDITOR_FAIL:
            return {
                ...state,
                errorMessage: errorMessage.updateFail
            }
        case GetEditorAction.REQUEST_EDITOR:
        case GetEditorAction.UPDATE_EDITOR:
        case GetEditorAction.DELETE_EDITOR:
            return {
                ...state,
                errorMessage: null
            }
        case GetEditorAction.UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                imageFileDirectory: action.payload.imageFileDirectory,
                errorMessage: errorMessage.uploadImageFinish
            }
        case GetEditorAction.UPLOAD_IMAGE_FAIL:
            return {
                ...state,
                errorMessage: errorMessage.uploadImageFail
            }
        default:
            return { ...state }
    }
}

export default getEditorReducer