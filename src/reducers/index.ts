import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import enthusiasm from './hello';
import permission from './permission'
import homelist from './home'
import msglist from './message'

export default combineReducers({
    router: routerReducer,
    enthusiasm,
    permission,
    homelist,
    msglist
});
