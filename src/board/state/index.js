import {createReducer, createSetValueAction, setValueReducer} from '../../common/redux-helper';

// 4가지 action (board/ 라는 prefix를 붙여줌 - 이름 충돌 방지)

export const types = {
    // ADD : 'board/ADD',
    // REMOVE : 'board/REMOVE',
    // EDIT : 'board/EDIT',
    SET_VALUE : 'board/SET_VALUE',
    SET_LOADING: 'timeline/SET_LOADING',

    SET_LIST : 'board/SET_LIST,',
    GET_LIST : 'board/GET_LIST',
}

// action creator 함수
export const actions = {
    // addArticle : board => ({ type: types.ADD, board }),
    // removeArticle : board => ({ type: types.REMOVE, board }),
    // editArticle : board => ({ type: types.EDIT, board }),
    setValue : createSetValueAction(types.SET_VALUE),
    setLoading: isLoading => ({
        type: types.SET_LOADING,
        isLoading,
    }),

    getList : () => ({ type: types.GET_LIST }),
    setList : board => ({ type: types.SET_LIST, board }),
}

const INITIAL_STATE = { 
    boards: [], 
    isLoading: false, 
};

const reducer = createReducer(INITIAL_STATE, {
    // [types.ADD]: (state, action) => state.boards.push(action.board),

    // [types.REMOVE]: (state, action) => (state.boards = state.boards.filter(board => board.id !== action.board.id)),

    // [types.EDIT]: (state, action) => {
    //     const index = state.boards.findIndex(board => board.id === action.board.id);
    //     if(index >= 0){
    //         state.boards[index] = action.board;
    //     }
    // },
    [types.SET_VALUE] : setValueReducer,

    [types.SET_LOADING] : (state, action) => (state.isLoading = action.isLoading),
    [types.SET_LIST]: (state, action) => (state.boards.push(action.board)),
});

export default reducer;

