import createMiddleware from '../middleware';
import reducer from '../reducers';
import { applyMiddleware, createStore as _createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const [__DEVELOPMENT__, __CLIENT__, __DEVTOOLS__]: boolean[] = [true, true, true];

export default function createStore(history) {
    // Sync dispatched route actions to the history

    const middleware = [createMiddleware(), routerMiddleware(history)];

    let finalCreateStore;
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
        finalCreateStore = composeWithDevTools(
            applyMiddleware(...middleware),
        )(_createStore);
    } else {
        finalCreateStore = applyMiddleware(...middleware)(_createStore);
    }

    const store = finalCreateStore(reducer);

    return store;
}
