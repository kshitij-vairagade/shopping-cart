import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import shopReducer from './shopReducer';
import addShopReducer from './addShopReducer';
import editShopReducer from "./editReducer";


export default combineReducers({
    form: formReducer,
    shops:shopReducer,
    add:addShopReducer,
    edit:editShopReducer
})