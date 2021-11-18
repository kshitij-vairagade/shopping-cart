import AddShopForm from './fillform'
import { connect } from 'react-redux'
import { update } from '../../operations'
import { close_add } from '../../operations'

const Addshop=props=>{
    const className=`pop ${props.add?'show':'hide'}`
    console.log(className)
    const onSubmit= values=>{
        props.update(values)
        props.close_add()
    }
    return(

        <div className={className}>
            <i onClick={props.close_add} class="fas fa-times cross"></i>
            <AddShopForm onSubmit={onSubmit}/>
        </div>
        )
}
const mapStateToProps = state => ({
   shops:state.shops,
   add:state.add,
   edit:state.edit
});
export default connect(mapStateToProps,{update,close_add})(Addshop);