import produce from 'immer';

export function createReducer(initialState, handlerMap) {
    return function(state = initialState, action) {    // createReducer가 반환하는 함수가 reducer
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if(handler){
                handler(draft, action);
            }
        });
    };
}

export function createSetValueAction(type){
    return(key, value) => ({ type, key, value });
}

export function setValueReducer(state, action) {
    state[action.key] = action.value;
}

