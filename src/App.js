import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import BoardListContainer from './board/container/BoardListContainer';

import { Provider } from 'react-redux';
import store from './common/store'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}> 
      {/* <BrowserRouter> */}
        <div>
              <BoardListContainer />
        </div>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;
