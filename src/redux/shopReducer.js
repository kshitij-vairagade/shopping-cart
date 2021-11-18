import {UPDATE_SHOP_LIST} from '../operations/typito'; 

const initialState = {}

export default (state = initialState,action)=>{
    switch(action.type){
        case UPDATE_SHOP_LIST :
            return action.payload

        default:
            return state;
    }
}