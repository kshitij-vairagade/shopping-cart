import { connect } from 'react-redux';
import AddShop from '../addshops';
import styles from './shopslist.css';
import Tile from './tile';
import Edit from '../editshops';
import { show_add } from '../../operations';

const List=({shops,showEdit})=>{
    if (!shops.length){
        return null
    }
    return shops.map(shop=>{
        return(<Tile shop ={shop} showEdit={showEdit}/>)
    })
}

const Shops=({shops,show_add,add})=>{
    return(
        <div className={`row ${styles.parent}`}>
            <i onClick={show_add} className={`fas fa-plus-circle ${styles.add_button}`}></i>
            <Edit/>
            <AddShop />
            <div className={styles.list}>
                <List shops={shops} />
            </div>
        </div>)
}
const mapStateToProps = state => ({
    shops:state.shops,
    add:state.add,
    edit:state.edit

 });
 export default connect(mapStateToProps,{show_add})(Shops)