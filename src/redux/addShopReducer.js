import { SHOW_ADD,CLOSE_ADD } from "../operations/typito";
const initialState = false
export default (state = initialState,action)=>{
    switch(action.type){
        case SHOW_ADD :
            return true
        case CLOSE_ADD:
            return false
        default:
            return state;
    }
}