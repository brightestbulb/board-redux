import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import boardReducer from '../board/state';
import boardSaga from '../board/state/saga'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const reducer = combineReducers({  // combineReducers : 여러개의 리듀서를 하나로 합친다.
    board: boardReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

function* rootSaga(){
    yield all([boardSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;

