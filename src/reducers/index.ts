import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import enthusiasm from './hello';
import permission from './permission'
import menuData from './menu'

export default combineReducers({
    router: routerReducer,
    enthusiasm,
    permission,
    menuData
});
