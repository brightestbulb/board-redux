import { all, call, debounce, put, takeLeading, takeLatest } from 'redux-saga/effects';
import { actions, types } from './index';
import { getBoardListAPI } from '../api';
import { getTestAPI } from '../api';

const data = [
    { id: 1, writer: "admin", title: "첫번째 글" },
    { id: 2, writer: "admin", title: "두번째 글" },
    { id: 3, writer: "admin", title: "세번째 글" },
]

// 게시글 목록을 조회
export function* fetchBoardList(action) {
    yield put(actions.setLoading(true));
    try {
        // const response = yield call(getBoardListAPI);
        // console.log(response)
        // yield put(actions.setList(response.data));
        yield put(actions.setList(data));
    } catch(e) {
        console.log(e);
    }
    yield put(actions.setLoading(false));
}

export function* trySetText(action){
    yield put(actions.setValue('text', action.text));
}

export default function* (){
    yield all([
        takeLeading(types.GET_LIST, fetchBoardList),
        // debounce(500, types.TRY_SET_TEXT, trySetText),
    ]);
}

