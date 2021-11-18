import { UPDATE_SHOP_LIST,SHOW_ADD,CLOSE_ADD,SHOW_EDIT,CLOSE_EDIT } from "./typito"

export const update =values=>dispatch=>{
    if(localStorage.shopList){
        let shops=JSON.parse(localStorage.getItem('shopList'))
        shops.push(values)
        localStorage.setItem("shopList",JSON.stringify(shops))
        dispatch(setList(shops))
    }
    else{
        let shops=[]
        shops.push(values)
        localStorage.setItem("shopList",JSON.stringify(shops))
        dispatch(setList(shops))
    }
   
}
const setList =shops=>{
    return({
        type:UPDATE_SHOP_LIST,
        payload:shops

    })
}
export const getList=()=>dispatch=>{
    let shops=JSON.parse(localStorage.getItem('shopList'))
    dispatch(setList(shops))
}

export const delete_shop= value=>dispatch=>{
    let shops=JSON.parse(localStorage.getItem('shopList'))
    for(let i=0; i<shops.length;i++){
        if (shops[i].name===value){
            var ind=i
            break;
        }
        
        
    }
    shops.splice(ind,1)
    localStorage.setItem("shopList",JSON.stringify(shops))
    dispatch(setList(shops))

}
export const edit_shop= values=>dispatch=>{
    console.log(values)
    let shops=JSON.parse(localStorage.getItem('shopList'))
    for(let i=0; i<shops.length;i++){
        console.log(i)
        if (shops[i].name===values.name){
            var ind=i
            break;
        }}
    shops[ind]=values
    dispatch(setList(shops))
}

export const show_add =()=>dispatch=>{
    dispatch({
        type:SHOW_ADD
    })
}
export const close_add =()=>dispatch=>{
    dispatch({
        type:CLOSE_ADD
    })
}
export const show_edit =shop=>dispatch=>{
    dispatch({
        type:SHOW_EDIT,
        payload:shop
    })
}
export const close_edit =()=>dispatch=>{
    dispatch({
        type:CLOSE_EDIT
    })
}