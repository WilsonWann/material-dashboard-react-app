import { all } from "redux-saga/effects";
import GetEditorList from "./GetEditorList";
import GetTagList from "./GetTagList";
import GetUserList from "./GetUserList";

function* rootSaga() {
  yield all([
      GetTagList(),
      GetEditorList(),
      GetUserList(),
    ]);
}

export default rootSaga;
